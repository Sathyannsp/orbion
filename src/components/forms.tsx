import { useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Icon, SuccessTick } from './ui'
import { isValid, type Kind } from '../lib/validate'
import { CFG, PROGRAMMES, WA } from '../lib/config'
import { errText, readCv, send } from '../lib/submit'
import { useGuards } from '../lib/useGuards'

export interface FieldSpec {
  id: string; label: string; type?: 'text' | 'tel' | 'email' | 'date' | 'select' | 'textarea' | 'file'
  required?: boolean; kind?: Kind; options?: string[]; full?: boolean; ph?: string; err?: string; autoComplete?: string; inputMode?: 'tel' | 'text'
}

/** Controlled form state with per-field validation (blur, then live once invalid). */
export function useFormState(specs: FieldSpec[]) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const spec = Object.fromEntries(specs.map(s => [s.id, s]))
  const valid = (id: string) => isValid(values[id] || '', spec[id].required, spec[id].kind)
  return {
    values, spec,
    set: (id: string, v: string) => setValues(p => ({ ...p, [id]: v })),
    blur: (id: string) => setTouched(p => ({ ...p, [id]: true })),
    bad: (id: string) => !!touched[id] && !valid(id),
    ok: (id: string) => !!touched[id] && valid(id) && !!(values[id] || '').trim(),
    validateAll: () => {
      setTouched(Object.fromEntries(specs.map(s => [s.id, true])))
      const first = specs.find(s => !valid(s.id))
      if (first) document.getElementById(first.id)?.focus()
      return !first
    }
  }
}
type FormState = ReturnType<typeof useFormState>

export function Field({ s, f }: { s: FieldSpec; f: FormState }) {
  const bad = f.bad(s.id), ok = f.ok(s.id), v = f.values[s.id] || ''
  const common = { id: s.id, name: s.id, required: s.required, 'aria-required': s.required || undefined, 'aria-invalid': bad || undefined, onBlur: () => f.blur(s.id) }
  let input: ReactNode
  if (s.type === 'select') input = <select {...common} value={v} onChange={e => f.set(s.id, e.target.value)}><option value="">Select…</option>{s.options!.map(o => <option key={o}>{o}</option>)}</select>
  else if (s.type === 'textarea') input = <textarea {...common} value={v} placeholder={s.ph} onChange={e => f.set(s.id, e.target.value)} />
  else if (s.type === 'file') input = <input {...common} type="file" accept=".pdf,.doc,.docx" onChange={e => f.set(s.id, e.target.files?.[0]?.name || '')} />
  else input = <input {...common} type={s.type || 'text'} value={v} placeholder={s.ph} autoComplete={s.autoComplete} inputMode={s.inputMode} onChange={e => f.set(s.id, e.target.value)} />
  return (
    <div className={`field ${s.full ? 'full' : ''} ${bad ? 'bad' : ''} ${ok ? 'ok' : ''}`}>
      <label htmlFor={s.id}>{s.label}{s.required && <> <span className="req" aria-hidden="true">*</span></>}</label>
      {input}
      <span className="msg" role="alert">{s.err || 'This field is required.'}</span>
    </div>
  )
}

const ENQUIRY: FieldSpec[] = [
  { id: 'parent', label: 'Parent name', required: true, autoComplete: 'name' },
  { id: 'relation', label: 'Relation to child', type: 'select', required: true, options: ['Mother', 'Father', 'Guardian', 'Other'] },
  { id: 'phone', label: 'Phone number', type: 'tel', required: true, kind: 'phone', autoComplete: 'tel', inputMode: 'tel', ph: '10-digit mobile number', err: 'Please enter a valid 10-digit mobile number.' },
  { id: 'email', label: 'Email', type: 'email', required: true, kind: 'email', autoComplete: 'email', err: 'Please enter a valid email address.' },
  { id: 'child', label: 'Child’s name', required: true },
  { id: 'dob', label: 'Child’s date of birth', type: 'date', required: true },
  { id: 'prog', label: 'Programme', type: 'select', required: true, options: PROGRAMMES },
  { id: 'year', label: 'Academic year', type: 'select', required: true, options: ['2027–28', '2028–29'] },
  { id: 'area', label: 'Area / locality', ph: 'e.g. Vilankurichi' },
  { id: 'heard', label: 'How did you hear about us?', type: 'select', options: ['Friend or family', 'Social media', 'Search', 'Banner / hoarding', 'WhatsApp', 'Other'] },
  { id: 'msg', label: 'Message', type: 'textarea', full: true, ph: 'Anything you’d like us to know?' }
]
const CAREER: FieldSpec[] = [
  { id: 'cn', label: 'Full name', required: true, autoComplete: 'name' },
  { id: 'cp', label: 'Phone', type: 'tel', required: true, kind: 'phone', err: 'Please enter a valid 10-digit mobile number.' },
  { id: 'ce', label: 'Email', type: 'email', required: true, kind: 'email', err: 'Please enter a valid email address.' },
  { id: 'cr', label: 'Role', type: 'select', required: true, options: ['Teacher', 'Helper / support staff', 'After-school trainer'], err: 'Please choose a role.' },
  { id: 'cm', label: 'About you', type: 'textarea', full: true, ph: 'Experience, qualifications, why Orbion?' },
  { id: 'cv', label: 'Upload CV', type: 'file', full: true }
]

/** Shared submit machinery for enquiry and career forms. */
function useSecureSubmit(type: 'enquiry' | 'career', f: FormState, map: Record<string, string>) {
  const g = useGuards()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!f.validateAll()) return
    setBusy(true); setError('')
    const data: Record<string, unknown> = {}
    Object.entries(map).forEach(([id, key]) => { data[key] = (f.values[id] || '').trim() })
    try {
      const cv = await readCv((form.querySelector('input[type=file]') as HTMLInputElement | null)?.files?.[0])
      if (cv) data.cv = cv
    } catch (code) { setBusy(false); setError(errText(String(code))); return }
    const res = await send(type, data, g.meta())
    setBusy(false)
    if (!res.ok) { setError(errText(res.error)); g.reset(); return }
    setDone(true)
    form.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return { ...g, busy, error, done, onSubmit }
}

const MockNote = ({ what }: { what: string }) => (CFG.endpoint ? null : <p className="mock-note">Design preview: {what} are not sent anywhere yet.</p>)

export function EnquiryForm() {
  const f = useFormState(ENQUIRY)
  const s = useSecureSubmit('enquiry', f, Object.fromEntries(ENQUIRY.map(x => [x.id, x.id])))
  return (
    <form className="form" id="enquire" noValidate aria-label="Admission enquiry form" onSubmit={s.onSubmit} style={{ position: 'relative' }}>
      {!s.done ? (
        <div className="form-body">
          <div className="fgrid">{ENQUIRY.map(x => <Field key={x.id} s={x} f={f} />)}</div>
          <p className="privacy"><span style={{ width: 18, height: 18, flex: 'none', display: 'inline-flex' }} className="mi"><Icon name="lock" /></span><span>We use your details only to respond to your enquiry and will not share them with anyone else.</span></p>
          {s.guard}
          {s.error && <p className="form-err" role="alert">{s.error}</p>}
          <div className="btns"><button className="btn btn-primary" type="submit" disabled={s.busy}>{s.busy ? 'Sending…' : 'Submit Enquiry'}</button></div>
          <MockNote what="enquiries" />
        </div>
      ) : (
        <div className="success show" role="status">
          <SuccessTick />
          <h3>Thank you! Your mission is underway.</h3>
          <p style={{ margin: '10px auto 0', maxWidth: '46ch', color: 'var(--muted)' }}>We’ve noted your enquiry and a member of our team will be in touch. Prefer a quicker chat?</p>
          <div className="btns" style={{ justifyContent: 'center' }}><a className="btn btn-primary" href={WA}>Continue on WhatsApp</a><Link className="btn btn-secondary" to="/visit">Book a Campus Visit</Link></div>
        </div>
      )}
    </form>
  )
}

export function CareerForm() {
  const f = useFormState(CAREER)
  const s = useSecureSubmit('career', f, { cn: 'name', cp: 'phone', ce: 'email', cr: 'role', cm: 'about' })
  return (
    <form className="form rv" noValidate style={{ maxWidth: 820, margin: 'auto', position: 'relative' }} onSubmit={s.onSubmit} aria-label="Careers application form">
      {!s.done ? (
        <div className="form-body">
          <h3 style={{ marginBottom: 18 }}>Apply now</h3>
          <div className="fgrid">{CAREER.map(x => <Field key={x.id} s={x} f={f} />)}</div>
          {s.guard}
          {s.error && <p className="form-err" role="alert">{s.error}</p>}
          <div className="btns"><button className="btn btn-primary" type="submit" disabled={s.busy}>{s.busy ? 'Sending…' : 'Submit Application'}</button></div>
          <MockNote what="applications" />
        </div>
      ) : (
        <div className="success show" role="status"><SuccessTick /><h3>Thank you for applying!</h3><p style={{ color: 'var(--muted)' }}>We’ll review your application and be in touch.</p></div>
      )}
    </form>
  )
}
