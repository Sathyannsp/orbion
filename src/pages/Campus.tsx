import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta } from '../components/sections'
import { OrbitDeco, Ph, RoomArt } from '../components/ui'

export default function Campus() {
  return (
    <>
      <Head><title>{"Campus Concepts | Orbion Prep School"}</title><meta name="description" content={"Campus, reception, classroom, uniform and badge concepts for Orbion Prep School."} /></Head>
<section className="page-hero c-violet"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Campus Concepts</div>
 <h1>The mission, made physical</h1><p className="lead">One brand language from website to wall: calm, bright and uncluttered. Concept only; final design subject to the school’s approval.</p></div></section>

<section><div className="container split">
 <div className="rv"><span className="eyebrow c-coral">Reception &amp; Entrance</span><h2>A warm, premium welcome</h2>
  <ul className="tick c-coral"><li>Orbion Prep School logo on a warm timber feature wall</li><li>Large tagline: <b>Journey Beyond the Orbit</b></li><li>Motto prominently displayed: <b>Learn. Lead. Shine.</b></li><li>Elegant planetary and orbit line wall graphics, restrained and tasteful</li><li>Soft lighting, comfortable seating, a small planet-themed display of children’s work</li></ul></div>
 <Ph className="c-coral tall rv d1" art="orbit" cap="Reception concept" /></div></section>

<section className="soft"><div className="container">
 <div className="sec-head rv"><span className="eyebrow">Classrooms</span><h2>Five rooms, five accent colours</h2><p>Each has age-appropriate rounded furniture, child-height storage, an interactive learning board, a reading corner, an activity area and soft lighting. One subtle wall graphic per room, never crowded.</p></div>
 <div className="grid g3">
  <article className="room c-sun rv"><RoomArt color="sun" planetKind="launch" label="Launch Room" /><div className="in"><span className="tag">Playgroup</span><h3 style={{ marginTop: '8px' }}>Launch Room</h3><p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Sunshine yellow. Soft floor play, sensory trays, low shelves.</p></div></article>
  <article className="room c-sky rv d1"><RoomArt color="sky" planetKind="orbit" label="Orbit Room" /><div className="in"><span className="tag">Pre-KG</span><h3 style={{ marginTop: '8px' }}>Orbit Room</h3><p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Sky blue. Circle rug, role-play corner, picture-book wall.</p></div></article>
  <article className="room c-violet rv d2"><RoomArt color="violet" planetKind="moon" label="Moon Room" /><div className="in"><span className="tag">LKG</span><h3 style={{ marginTop: '8px' }}>Moon Room</h3><p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Lavender. Craft table, building zone, cosy reading nook.</p></div></article>
  <article className="room c-coral rv"><RoomArt color="coral" planetKind="mars" label="Mars Room" /><div className="in"><span className="tag">UKG</span><h3 style={{ marginTop: '8px' }}>Mars Room</h3><p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Warm coral. Project tables, presentation corner, mini library.</p></div></article>
  <article className="room c-mint rv d1"><RoomArt color="mint" planetKind="station" label="Space Station" /><div className="in"><span className="tag">Daycare</span><h3 style={{ marginTop: '8px' }}>Space Station</h3><p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Soft mint. Nap beds, dim lighting, quiet play and snack area.</p></div></article>
 </div></div></section>

<section><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-mint">Campus Areas</span><h2>Twelve spaces, one language</h2></div>
 <div className="grid g4">
  <div className="card flat c-sky rv"><h4>Main entrance</h4><p>Secure, welcoming arrival with signage.</p></div>
  <div className="card flat c-coral rv"><h4>Reception</h4><p>Feature wall, tagline and seating.</p></div>
  <div className="card flat c-sun rv"><h4>Activity room</h4><p>Open floor for movement and group play.</p></div>
  <div className="card flat c-violet rv"><h4>Reading &amp; storytelling</h4><p>Low shelves, floor cushions, warm light.</p></div>
  <div className="card flat c-sky rv"><h4>Computer lab</h4><p>Child-height stations for older learners.</p></div>
  <div className="card flat c-mint rv"><h4>Indoor play</h4><p>Soft, safe, rainy-day play.</p></div>
  <div className="card flat c-sun rv"><h4>Outdoor play</h4><p>Shaded, secure play area.</p></div>
  <div className="card flat c-pink rv"><h4>Art &amp; creativity zone</h4><p>Washable surfaces and display walls.</p></div>
  <div className="card flat c-mint rv"><h4>Daycare nap room</h4><p>Quiet, dim, cosy.</p></div>
  <div className="card flat c-sun rv"><h4>Healthy snack area</h4><p>Clean, bright and easy to supervise.</p></div>
  <div className="card flat c-sky rv"><h4>Washrooms</h4><p>Child-sized, bright, hygienic.</p></div>
  <div className="card flat c-violet rv"><h4>Corridors &amp; common spaces</h4><p>Gentle orbit lines guide the way.</p></div>
 </div></div></section>

<section className="soft"><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-coral">Uniform &amp; Badge</span><h2>Simple, comfortable, professional</h2><p>Minimal space graphics: just the school logo and a small orbit mark.</p></div>
 <div className="badge-uni">
  <div className="card c-sky center rv"><svg viewBox="0 0 240 260" style={{ margin: 'auto', maxWidth: '260px' }} role="img" aria-label="Uniform concept"><path d="M70 40l30-14c6 12 34 12 40 0l30 14 36 40-26 20-14-14v130H74V86L60 100 34 80z" fill="#fff" stroke="#1B2A5C" strokeWidth="3" strokeLinejoin="round"/><path d="M100 26c6 12 34 12 40 0" fill="none" stroke="#3DA9FC" strokeWidth="5"/><g transform="translate(130 70) scale(.5)"><circle cx="24" cy="24" r="21" fill="#1B2A5C"/><ellipse cx="24" cy="24" rx="19" ry="7" fill="none" stroke="#FFB62E" strokeWidth="2.200" transform="rotate(-25 24 24)"/><circle cx="24" cy="24" r="9" fill="#fff"/><circle cx="24" cy="24" r="4.500" fill="#FF6B5E"/></g><rect x="74" y="200" width="92" height="14" fill="#1B2A5C" opacity=".12"/></svg>
   <h4>Polo + navy bottoms</h4><p style={{ color: 'var(--muted)' }}>White polo with a small chest logo and sky-blue collar trim.</p></div>
  <div className="card c-coral center rv d1"><svg viewBox="0 0 200 220" style={{ margin: 'auto', maxWidth: '200px' }} role="img" aria-label="School badge"><path d="M100 10l80 28v62c0 50-36 86-80 106C56 186 20 150 20 100V38z" fill="#1B2A5C"/><path d="M100 22l68 24v54c0 42-30 74-68 91-38-17-68-49-68-91V46z" fill="none" stroke="#FFB62E" strokeWidth="2"/><ellipse cx="100" cy="86" rx="46" ry="15" fill="none" stroke="#FFB62E" strokeWidth="3" transform="rotate(-20 100 86)"/><circle cx="100" cy="86" r="22" fill="#fff"/><circle cx="100" cy="86" r="11" fill="#FF6B5E"/><path d="M146 52l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#FFB62E"/><text x="100" y="146" textAnchor="middle" fontFamily="Fredoka,sans-serif" fontSize="19" fontWeight="600" fill="#fff">ORBION</text><text x="100" y="166" textAnchor="middle" fontFamily="Fredoka,sans-serif" fontSize="9" letterSpacing="3" fill="#FFB62E">LEARN · LEAD · SHINE</text></svg>
   <h4>School badge</h4><p style={{ color: 'var(--muted)' }}>Navy shield, orbit ring and a single star.</p></div>
 </div></div></section>
<section><div className="container"><Cta title="See it for yourself" text="Book a visit and walk through the Orbion plan." /></div></section>
    </>
  )
}
