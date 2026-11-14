import type { CSSProperties, ReactNode } from 'react'
import { icoSvg, planet, room } from '../lib/art'

const raw = (html: string) => <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: html }} />

export const Icon = ({ name }: { name: string }) => raw(icoSvg(name))
export const Planet = ({ kind, size = 60 }: { kind: string; size?: number }) => raw(planet(kind, size))
export const RoomArt = ({ color, planetKind, label }: { color: string; planetKind: string; label: string }) => raw(room(color, planetKind, label))
export const IconBox = ({ name, className = '' }: { name: string; className?: string }) => <span className={`ico ${className}`}><Icon name={name} /></span>

export function Logo() {
  return <img className="logo-img" src="/brand/logo.png" alt="" width={52} height={52} />
}

export function OrbitDeco() {
  return (
    <svg className="orbitdeco" viewBox="0 0 340 340" aria-hidden="true">
      <g className="spin">
        <circle className="ring" cx="170" cy="170" r="160" /><circle className="ring" cx="170" cy="170" r="115" /><circle className="ring" cx="170" cy="170" r="70" />
        <circle cx="170" cy="10" r="7" fill="var(--sun)" /><circle cx="285" cy="170" r="5" fill="var(--coral)" /><circle cx="170" cy="240" r="4" fill="var(--sky)" />
      </g>
    </svg>
  )
}

/** Concept-image placeholder: swap for an <img> once real photographs exist. */
export function Ph({ art, cap, className = '', style, cat }: { art?: string; cap?: string; className?: string; style?: CSSProperties; cat?: string }) {
  return (
    <div className={`ph ${className}`} style={style} data-cat={cat} role="img" aria-label={`${cap || 'Image'} (concept placeholder)`}>
      {art && <div className="art" aria-hidden="true"><Planet kind={art} size={200} /></div>}
      {cap && <span className="cap">{cap}</span>}
    </div>
  )
}

export const Notice = ({ children, style, hidden }: { children: ReactNode; style?: CSSProperties; hidden?: boolean }) => <div className="notice" style={style} hidden={hidden}>{children}</div>

export const SuccessTick = () => (
  <div className="tickbig">
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
  </div>
)

const SOCIAL: [string, string, ReactNode][] = [
  ['Instagram', 'https://www.instagram.com/', <><rect x="3" y="3" width="18" height="18" rx="5.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" /></>],
  ['Facebook', 'https://www.facebook.com/', <path fill="currentColor" d="M13.6 21.5v-8.2h2.8l.4-3.3h-3.2V8c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V10H7.5v3.3h2.8v8.2z" />],
  ['YouTube', 'https://www.youtube.com/', <path fill="currentColor" fillRule="evenodd" d="M6.5 5h11A4.5 4.5 0 0122 9.5v5a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 14.5v-5A4.5 4.5 0 016.5 5zM10 8.8v6.4l5.4-3.2z" />],
]

export function Social({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <div className={`soc ${className}`} style={style}>
      {SOCIAL.map(([name, href, svg]) => (
        <a key={name} href={href} target="_blank" rel="noopener" aria-label={`Orbion on ${name}`}><svg viewBox="0 0 24 24" aria-hidden="true">{svg}</svg></a>
      ))}
    </div>
  )
}
