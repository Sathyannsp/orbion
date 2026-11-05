import { useCallback, useEffect, useRef } from 'react'
import { CFG } from './config'

declare global { interface Window { turnstile?: any; __orbTs?: () => void } }
let loading = false

/** Spam guards for a form: honeypot, fill-time, and Cloudflare Turnstile (when a site key is configured). */
export function useGuards() {
  const started = useRef(Date.now())
  const honey = useRef<HTMLInputElement>(null)
  const box = useRef<HTMLDivElement>(null)
  const token = useRef('')
  const widget = useRef<string | null>(null)

  useEffect(() => {
    if (!CFG.turnstileSiteKey || !box.current) return
    const mount = () => {
      if (!box.current || widget.current != null) return
      widget.current = window.turnstile.render(box.current, { sitekey: CFG.turnstileSiteKey, callback: (t: string) => { token.current = t } })
    }
    if (window.turnstile) mount()
    else {
      const prev = window.__orbTs
      window.__orbTs = () => { prev?.(); mount() }
      if (!loading) {
        loading = true
        const s = document.createElement('script')
        s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=__orbTs'
        s.async = true
        document.head.appendChild(s)
      }
    }
    return () => { if (widget.current != null && window.turnstile) { try { window.turnstile.remove(widget.current) } catch { /* ignore */ } } widget.current = null }
  }, [])

  const meta = useCallback(() => ({
    website: honey.current?.value || '',
    elapsed: Math.round((Date.now() - started.current) / 1000),
    token: CFG.turnstileSiteKey ? token.current : 'none'
  }), [])
  const reset = useCallback(() => {
    token.current = ''
    if (widget.current != null && window.turnstile) { try { window.turnstile.reset(widget.current) } catch { /* ignore */ } }
  }, [])

  const guard = (
    <>
      <div style={{ position: 'absolute', left: -9999 }} aria-hidden="true">
        <label>Leave this empty<input ref={honey} type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {CFG.turnstileSiteKey && <div ref={box} style={{ margin: '14px 0 0' }} />}
    </>
  )
  return { guard, meta, reset }
}
