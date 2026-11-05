import { useState, type CSSProperties } from 'react'
import { Icon, Notice, Ph } from './ui'
import * as content from '../data/content'
import type { ContentItem } from '../data/content'
import { CFG } from '../lib/config'
import { useEffect, useRef } from 'react'

const COLS = ['coral', 'sky', 'mint', 'violet', 'sun', 'pink']
const ART = ['star', 'orbit', 'launch', 'earth', 'moon', 'station']
/** Only same-site or https image URLs in the content data are rendered. */
const safeSrc = (u?: string) => (u && /^(\/|https:\/\/)/.test(u) ? u : '')

function EventCard({ it, i }: { it: ContentItem; i: number }) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(it.date || '')
  const d = m ? new Date(+m[1], +m[2] - 1, +m[3]) : null
  return (
    <div className={`card event c-${COLS[i % 6]}`}>
      <div className="date">{d ? <><b>{d.getDate()}</b><span>{d.toLocaleDateString('en-IN', { month: 'short' })} {d.getFullYear()}</span></> : <><b>{it.date || 'TBA'}</b><span>{String(it.category || '').slice(0, 10)}</span></>}</div>
      <div><h3>{it.title}</h3><p>{it.summary}</p></div>
    </div>
  )
}
function PostCard({ it, i }: { it: ContentItem; i: number }) {
  const img = safeSrc(it.image)
  return (
    <article className={`card post c-${COLS[i % 6]}`} data-cat={it.category}>
      {img ? <img src={img} alt="" loading="lazy" style={{ width: '100%', height: 170, objectFit: 'cover' }} /> : <Ph art={ART[i % 6]} />}
      <div className="in"><span className="tag">{it.label || it.category}</span><h3>{it.title}</h3><p>{it.summary}</p></div>
    </article>
  )
}
function PersonCard({ it, i }: { it: ContentItem; i: number }) {
  const img = safeSrc(it.photo)
  return (
    <article className={`card person c-${COLS[i % 6]}`}>
      <div className="avatar" style={img ? { overflow: 'hidden' } : undefined}>{img ? <img src={img} alt={it.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <Icon name="users" />}</div>
      <h3>{it.name}</h3><div className="role">{String(it.role || '').toUpperCase()}</div><p>{it.bio}</p>
    </article>
  )
}
function QuoteCard({ it, i }: { it: ContentItem; i: number }) {
  return (
    <div className={`card quote c-${COLS[i % 6]}`}>
      <p>“{it.sample ? '[Sample] ' : ''}{it.quote}”</p>
      <div className="by"><div><b>{it.name}</b><small>{it.sample ? 'Sample · pending permission' : it.group}</small></div></div>
    </div>
  )
}
const CARD = { events: EventCard, blog: PostCard, team: PersonCard, testimonials: QuoteCard }

/** Renders a list from src/data/content.ts. */
export function ContentList({ name, group, limit, filter, className = 'grid g3', style }: { name: keyof typeof CARD; group?: string; limit?: number; filter?: string; className?: string; style?: CSSProperties }) {
  const items = content[name]
  const Card = CARD[name]
  let list = items
  if (group) list = list.filter(x => x.group === group)
  if (filter && filter !== 'all') list = list.filter(x => x.category === filter)
  if (limit) list = list.slice(0, limit)
  return <div className={className} style={style}>{list.length ? list.map((it, i) => <Card key={i} it={it} i={i} />) : <p style={{ color: 'var(--muted)' }}>Nothing here yet. Please check back soon.</p>}</div>
}

export const BLOG_CATS: [string, string][] = [['all', 'All'], ['parenting', 'Parenting'], ['ecd', 'Early Childhood Development'], ['activities', 'Learning Activities'], ['communication', 'Communication Skills'], ['creativity', 'Child Creativity'], ['stem', 'STEM Education']]

export function Filters({ chips, value, onChange, label }: { chips: [string, string][]; value: string; onChange: (v: string) => void; label: string }) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {chips.map(([k, t]) => <button key={k} className={`chip ${value === k ? 'on' : ''}`} onClick={() => onChange(k)}>{t}</button>)}
    </div>
  )
}

export function BlogList() {
  const [cat, setCat] = useState('all')
  return (<><Filters chips={BLOG_CATS} value={cat} onChange={setCat} label="Filter articles" /><ContentList name="blog" filter={cat} /></>)
}

/** Shows the "sample placeholders" notice only while any testimonial is still marked as a sample. */
export function SampleNote() {
  const show = content.testimonials.some(x => x.sample)
  return <Notice style={{ marginBottom: 28 }} hidden={!show}><b>Sample placeholders only.</b> None of the text below is a real review. Genuine testimonials will be added with written permission.</Notice>
}

export const GALLERY = [
  { c: 'campus', a: 'orbit', t: 'Main entrance', k: 't', col: 'sky' }, { c: 'classrooms', a: 'mars', t: 'Mars Room', k: '', col: 'coral' },
  { c: 'learning', a: 'star', t: 'Art & creativity zone', k: 'h', col: 'sun' }, { c: 'classrooms', a: 'moon', t: 'Moon Room', k: '', col: 'violet' },
  { c: 'campus', a: 'station', t: 'Reception', k: 't', col: 'mint' }, { c: 'celebrations', a: 'earth', t: 'Graduation day', k: 'h', col: 'pink' },
  { c: 'learning', a: 'orbit', t: 'STEM activity', k: '', col: 'sky' }, { c: 'events', a: 'launch', t: 'Open house', k: 't', col: 'sun' },
  { c: 'campus', a: 'station', t: 'Outdoor play area', k: 'h', col: 'mint' }, { c: 'learning', a: 'moon', t: 'Reading corner', k: '', col: 'violet' },
  { c: 'celebrations', a: 'mars', t: 'Festival celebration', k: 'h', col: 'coral' }
]
export function GalleryGrid() {
  const [cat, setCat] = useState('all')
  const chips: [string, string][] = [['all', 'All'], ['campus', 'Campus'], ['classrooms', 'Classrooms'], ['learning', 'Learning Activities'], ['events', 'Events'], ['celebrations', 'Celebrations']]
  return (
    <>
      <Filters chips={chips} value={cat} onChange={setCat} label="Filter gallery" />
      <div className="gal">{GALLERY.filter(g => cat === 'all' || g.c === cat).map(g => <Ph key={g.t} className={`${g.k} c-${g.col}`} art={g.a} cap={g.t} cat={g.c} />)}</div>
    </>
  )
}

/** Instagram feed: embed widget from env config, or a labelled placeholder grid. */
export function Instagram() {
  const { embedHtml, embedSrc, profileUrl } = CFG.ig
  const box = useRef<HTMLDivElement>(null)
  const live = !!embedHtml && /^https:\/\//.test(embedSrc)
  useEffect(() => {
    if (!live) return
    if (box.current) box.current.innerHTML = embedHtml // owner-controlled build-time config
    const s = document.createElement('script'); s.src = embedSrc; s.type = 'module'; s.async = true
    document.head.appendChild(s)
    return () => { s.remove() }
  }, [live, embedHtml, embedSrc])
  const url = /^https:\/\//.test(profileUrl) ? profileUrl : 'https://www.instagram.com/'
  return (
    <>
      {live ? <div ref={box} /> : (
        <>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 12 }}>
            {['star', 'orbit', 'moon', 'earth', 'launch', 'mars'].map((a, i) => <Ph key={a} art={a} className={`sq c-${COLS[i]}`} style={{ minHeight: 0 }} />)}
          </div>
          <p className="mock-note">Placeholder: the live Instagram feed appears here once the widget is connected (see README).</p>
        </>
      )}
      <div className="btns"><a className="btn btn-secondary" href={url} target="_blank" rel="noopener">Follow us on Instagram</a></div>
    </>
  )
}
