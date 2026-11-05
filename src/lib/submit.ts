import { CFG } from './config'

export type SendResult = { ok: boolean; error?: string; demo?: boolean }
export const ERR: Record<string, string> = {
  captcha: 'Please complete the security check and try again.',
  rate_limit: 'You just submitted. Please wait a minute before trying again.',
  too_fast: 'That was very quick. Please check your details and try again.',
  slot_taken: 'Sorry, that slot was just taken. Please choose another time.',
  past: 'Please choose a future time.',
  cv_invalid: 'CV must be a PDF or Word file under 3 MB.',
  invalid: 'Please check your phone number and email.'
}
export const errText = (code?: string) => (code && ERR[code]) || 'Something went wrong. Please try again, or call / WhatsApp us.'

/** POST JSON to the Apps Script endpoint (text/plain avoids a CORS preflight). Demo mode when no endpoint is set. */
export async function send(type: 'enquiry' | 'visit' | 'career', data: Record<string, unknown>, meta: { website: string; elapsed: number; token: string }): Promise<SendResult> {
  if (!CFG.endpoint) return { ok: true, demo: true }
  try {
    const r = await fetch(CFG.endpoint, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ ...data, ...meta, type }) })
    return await r.json()
  } catch {
    return { ok: false, error: 'network' }
  }
}

export async function takenSlots(date: string): Promise<string[]> {
  if (!CFG.endpoint) return []
  try {
    const j = await (await fetch(`${CFG.endpoint}?action=slots&date=${date}`)).json()
    return j.taken || []
  } catch { return [] }
}

export function readCv(file?: File): Promise<{ name: string; type: string; data: string } | null> {
  return new Promise((res, rej) => {
    if (!file) return res(null)
    if (file.size > 3 * 1024 * 1024) return rej('cv_invalid')
    const r = new FileReader()
    r.onload = () => res({ name: file.name, type: file.type, data: String(r.result).split(',')[1] })
    r.onerror = () => rej('cv_invalid')
    r.readAsDataURL(file)
  })
}
