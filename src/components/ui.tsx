import type { CSSProperties, ReactNode } from 'react'
import { icoSvg, planet, room } from '../lib/art'

const raw = (html: string) => <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: html }} />

export const Icon = ({ name }: { name: string }) => raw(icoSvg(name))
export const Planet = ({ kind, size = 60 }: { kind: string; size?: number }) => raw(planet(kind, size))
export const RoomArt = ({ color, planetKind, label }: { color: string; planetKind: string; label: string }) => raw(room(color, planetKind, label))
export const IconBox = ({ name, className = '' }: { name: string; className?: string }) => <span className={`ico ${className}`}><Icon name={name} /></span>

export function Logo() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="#1B2A5C" />
      <ellipse cx="24" cy="24" rx="19" ry="7" fill="none" stroke="#FFB62E" strokeWidth="2.2" transform="rotate(-25 24 24)" />
      <circle cx="24" cy="24" r="9" fill="#fff" /><circle cx="24" cy="24" r="4.5" fill="#FF6B5E" />
      <path d="M38 12l1.2 2.6 2.8.4-2 2 .5 2.8L38 18.4l-2.5 1.4.5-2.8-2-2 2.8-.4z" fill="#FFB62E" />
    </svg>
  )
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
      {cap && <span className="cap">{cap} <i>· photo coming</i></span>}
    </div>
  )
}

export const Notice = ({ children, style, hidden }: { children: ReactNode; style?: CSSProperties; hidden?: boolean }) => <div className="notice" style={style} hidden={hidden}>{children}</div>

export const SuccessTick = () => (
  <div className="tickbig">
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
  </div>
)
