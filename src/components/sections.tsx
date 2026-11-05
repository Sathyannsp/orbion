import { Link } from 'react-router-dom'
import { Planet, OrbitDeco } from './ui'
import { planet } from '../lib/art'

export const STAGES = [
  { k: 'launch', c: 'sun', name: 'Playgroup', code: 'LAUNCH', room: 'Launch Room', desc: 'The beginning of curiosity and discovery: gentle first steps into school life.', out: ['Curiosity', 'Sensory play', 'Early language'] },
  { k: 'orbit', c: 'sky', name: 'Pre-KG', code: 'ORBIT', room: 'Orbit Room', desc: 'Building routines, communication and early learning skills.', out: ['Routines', 'Speaking', 'Early numeracy'] },
  { k: 'moon', c: 'violet', name: 'LKG', code: 'MOON', room: 'Moon Room', desc: 'Developing independence, creativity and foundational knowledge.', out: ['Independence', 'Creativity', 'Pre-reading'] },
  { k: 'mars', c: 'coral', name: 'UKG', code: 'MARS', room: 'Mars Room', desc: 'Building confidence, readiness and school-transition skills.', out: ['Confidence', 'Readiness', 'Reading & writing'] },
  { k: 'station', c: 'mint', name: 'Daycare', code: 'SPACE STATION', room: 'Space Station', desc: 'A calm, cosy and caring place to rest, recharge and feel at home.', out: ['Rest', 'Safe play', 'Belonging'] }
]

export function Journey({ center }: { center?: boolean }) {
  return (
    <>
      <div className="journey rv" data-journey>
        <span className="line-fill" />
        {STAGES.map(s => (
          <article key={s.k} className={`stop c-${s.c}`}>
            <div className="pl"><Planet kind={s.k} size={50} /></div>
            <div className="code">{s.code}</div><h3>{s.name}</h3><div className="who">{s.room}</div>
            <p>{s.desc}</p>
            <ul>{s.out.map(x => <li key={x}>{x}</li>)}</ul>
            <Link className="btn btn-secondary btn-sm" to={s.k === 'station' ? '/daycare' : `/programmes#${s.k}`}>Explore Programme</Link>
          </article>
        ))}
      </div>
      <p className={`journey-note ${center ? 'center' : ''}`}>Learning outcomes shown are indicative and will be finalised with the school’s curriculum team.</p>
    </>
  )
}

export function Graduation() {
  return (
    <div className="grad">
      <div className="rv">
        <span className="eyebrow" style={{ color: 'var(--sun)' }}>UKG Graduation</span>
        <h2>MISSION MARS COMPLETE</h2>
        <p style={{ marginTop: 14, fontSize: '1.1rem' }}>After Launch, Orbit and Moon, every UKG child lands on Mars: confident, curious and ready for school. We celebrate the whole journey with a graduation ceremony families remember.</p>
        <ul className="tick c-sun" style={{ color: '#fff' }}><li>A graduation celebration with family and teachers</li><li>A personal message about confidence and school readiness</li><li>A special “Ready for Any Board” certificate</li></ul>
      </div>
      <div className="cert rv d2">
        <svg className="seal" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28" fill="#FFF3D6" stroke="#E8C987" strokeWidth="2" /><g dangerouslySetInnerHTML={{ __html: planet('mars', 40).replace('<svg ', '<svg x="12" y="12" ') }} /></svg>
        <small>ORBION PREP SCHOOL</small><h3>Ready for Any Board</h3><p style={{ fontSize: '.95rem' }}>This certifies that</p>
        <p style={{ font: '600 1.2rem var(--f-head)', borderBottom: '1px solid var(--line)', margin: '6px 30px', paddingBottom: 6 }}>[ Child’s name ]</p>
        <p style={{ fontSize: '.95rem', marginTop: 8 }}>has completed <b>Mission Mars</b> and is prepared for the next step towards</p>
        <div className="boards" style={{ marginTop: 10 }}><span>CBSE</span><span>ICSE</span><span>IGCSE</span><span>Cambridge</span></div>
        <div className="line" /><small>LEARN. LEAD. SHINE.</small>
        <p className="fine">A readiness recognition from Orbion. It does not indicate affiliation with any board or guarantee admission to any school.</p>
      </div>
    </div>
  )
}

export function Cta({ title = 'Let’s begin your child’s journey', text = 'Tell us a little about your child and we’ll get back to you. No obligation; just a friendly conversation.' }: { title?: string; text?: string }) {
  return (
    <div className="cta rv">
      <OrbitDeco />
      <div style={{ position: 'relative' }}><h2>{title}</h2><p style={{ marginTop: 10 }}>{text}</p></div>
      <div className="btns" style={{ position: 'relative' }}>
        <Link className="btn btn-primary" to="/admissions#enquire">Enquire Now</Link>
        <Link className="btn btn-light" to="/visit">Book a Campus Visit</Link>
      </div>
    </div>
  )
}
