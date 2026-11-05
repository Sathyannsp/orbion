export type Kind = 'phone' | 'email' | undefined
export const PHONE_RE = /^(\+?91)?[6-9]\d{9}$/
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export function isValid(value: string, required: boolean | undefined, kind: Kind): boolean {
  const v = value.trim()
  if (!v) return !required
  if (kind === 'phone') return PHONE_RE.test(v.replace(/[\s-]/g, ''))
  if (kind === 'email') return EMAIL_RE.test(v)
  return true
}
