import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Field, useFormState, type FieldSpec } from './forms'
import { SuccessTick } from './ui'
import { CFG, WA } from '../lib/config'
import { errText, send, takenSlots } from '../lib/submit'
import { useGuards } from '../lib/useGuards'

const SLOTS = ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00'] // keep in sync with backend/Code.gs
const to12 = (t: string) => { const [h, m] = t.split(':').map(Number); return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}` }
const pad = (n: number) => String(n).padStart(2, '0')
const iso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const fmt = (d: Date) => d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

const SPEC: FieldSpec[] = [
  { id: 'vname', label: 'Parent name', required: true, full: true, autoComplete: 'name' },
  { id: 'vphone', label: 'Phone number', type: 'tel', required: true, kind: 'phone', inputMode: 'tel', autoComplete: 'tel', err: 'Please enter a valid 10-digit mobile number.' },
  { id: 'vemail', label: 'Email', type: 'email', required: true, kind: 'email', autoComplete: 'email', err: 'Please enter a valid email address.' },
  { id: 'vprog', label: 'Programme of interest', type: 'select', required: true, full: true, options: ['Playgroup', 'Pre-KG', 'LKG', 'UKG', 'Daycare', 'After-School'], err: 'Please choose a programme.' }
]

export default function Booking() {
  const [view, setView] = useState(() => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), 1) })
  const [date, setDate] = useState<Date | null>(null)
  const [slot, setSlot] = useState<string | null>(null)
  const [taken, setTaken] = useState<string[]>([])
  const [dateErr, setDateErr] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState<{ when: string; who: string } | null>(null)
  const f = useFormState(SPEC)
  const g = useGuards()

  const loadTaken = (d: Date) => { setTaken([]); takenSlots(iso(d)).then(t => setTaken(t)) }
  useEffect(() => { if (date) loadTaken(date) }, [date])

  const today = new Date(); today.setHours(0, 0, 0, 0)
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate()
  const cells: (Date | null)[] = [...Array(view.getDay()).fill(null), ...Array.from({ length: days }, (_, i) => new Date(view.getFullYear(), view.getMonth(), i + 1))]

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const formOk = f.validateAll()
    setDateErr(!date || !slot)
    if (!formOk || !date || !slot) { if (!date || !slot) document.getElementById('cal')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); return }
    setBusy(true); setError('')
    const res = await send('visit', { parent: f.values.vname.trim(), phone: f.values.vphone.trim(), email: f.values.vemail.trim(), prog: f.values.vprog, date: iso(date), time: slot }, g.meta())
    setBusy(false)
    if (!res.ok) {
      if (res.error === 'slot_taken') { setSlot(null); loadTaken(date) }
      setError(errText(res.error)); g.reset(); return
    }
    setDone({ when: `${fmt(date)} at ${to12(slot)}`, who: f.values.vname.trim() })
  }

  if (done) {
    return (
      <div className="success show" role="status" style={{ maxWidth: 560, margin: 'auto' }}>
        <SuccessTick />
        <h2>Visit requested!</h2>
        <p style={{ marginTop: 12 }}>Thank you, <b>{done.who}</b>. We’ve pencilled you in for<br /><b style={{ color: 'var(--navy)' }}>{done.when}</b>.</p>
        <p style={{ color: 'var(--muted)', marginTop: 10 }}>Our team will confirm shortly by phone or WhatsApp.</p>
        <div className="btns" style={{ justifyContent: 'center' }}><a className="btn btn-primary" href={WA}>Confirm on WhatsApp</a><Link className="btn btn-secondary" to="/">Back to Home</Link></div>
      </div>
    )
  }

  return (
    <div className="book">
      <div className="rv">
        <div className="cal" id="cal">
          <div className="cal-h">
            <button type="button" aria-label="Previous month" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}>‹</button>
            <h3 className="cal-title" aria-live="polite">{view.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</h3>
            <button type="button" aria-label="Next month" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}>›</button>
          </div>
          <div className="cal-g">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <span key={i} className="dn">{d}</span>)}
            {cells.map((d, i) => {
              if (!d) return <span key={i} />
              const dis = d < today || d.getDay() === 0
              return <button key={i} type="button" disabled={dis} className={date && +date === +d ? 'sel' : ''} aria-label={`${fmt(d)}${dis ? ' unavailable' : ''}`} onClick={() => { setDate(d); setSlot(null) }}>{d.getDate()}</button>
            })}
          </div>
        </div>
        <h4 style={{ marginTop: 22 }}>Available time slots</h4>
        <div className="slots" aria-live="polite">
          {!date ? <p style={{ color: 'var(--muted)', gridColumn: '1/-1' }}>Pick a date to see available time slots.</p> : SLOTS.map(s => {
            const t = taken.includes(s)
            return <button key={s} type="button" disabled={t} className={`slot ${slot === s ? 'sel' : ''}`} style={t ? { opacity: 0.4, textDecoration: 'line-through', cursor: 'not-allowed' } : undefined} onClick={() => setSlot(s)}>{to12(s)}</button>
          })}
        </div>
        {dateErr && <p role="alert" style={{ color: '#D23C2E', fontWeight: 700, fontSize: '.85rem', marginTop: 8 }}>Please choose a date and a time slot.</p>}
        <p className="mock-note" style={{ textAlign: 'left' }}>Sundays unavailable. Slots are illustrative until the visit schedule is confirmed.</p>
      </div>
      <form className="form rv d1" noValidate onSubmit={onSubmit} style={{ position: 'relative' }}>
        <div className="card flat c-sun tint" style={{ marginBottom: 20, padding: 16 }}>
          <b style={{ color: 'var(--navy)' }}>Your selection</b>
          <div style={{ color: 'var(--navy)' }}>{date ? fmt(date) + (slot ? ' · ' + to12(slot) : '') : 'No date selected yet'}</div>
        </div>
        <div className="fgrid">{SPEC.map(s => <Field key={s.id} s={s} f={f} />)}</div>
        {g.guard}
        {error && <p className="form-err" role="alert">{error}</p>}
        <div className="btns"><button className="btn btn-primary" type="submit" disabled={busy}>{busy ? 'Booking…' : 'Confirm Visit'}</button></div>
        {!CFG.endpoint && <p className="mock-note">Design preview: bookings are not sent anywhere yet.</p>}
      </form>
    </div>
  )
}
