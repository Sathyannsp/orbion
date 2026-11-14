import { Head } from 'vite-react-ssg'
import { Cta } from '../components/sections'
import { GalleryGrid } from '../components/lists'
import { IconBox, OrbitDeco, Ph, RoomArt } from '../components/ui'

const CHIPS = ['Main entrance', 'Activity room', 'Reading & storytelling corner', 'Computer lab', 'Indoor play area', 'Outdoor play area', 'Art & creativity zone', 'Healthy snack area', 'Washrooms', 'Corridors & common spaces']

export default function Campus() {
  return (
    <>
      <Head><title>{"Campus & Safety | Orbion Prep School"}</title><meta name="description" content={"Safety provisions, facilities, classrooms and gallery at Orbion Prep School, Coimbatore."} /></Head>
<section className="page-hero c-mint"><OrbitDeco /><div className="container">
 <h1>A campus built around your child’s safety</h1><p className="lead">Safe, bright and calm. What we provide, the spaces your child will use, and how they will look.</p>
 <div className="btns"><a className="btn btn-secondary btn-sm" href="#safety">Safety</a><a className="btn btn-secondary btn-sm" href="#facilities">Facilities</a><a className="btn btn-secondary btn-sm" href="#classrooms">Classrooms</a><a className="btn btn-secondary btn-sm" href="#gallery">Gallery</a></div></div></section>

<section id="safety"><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-mint">Safe hands, safe spaces</span><h2>How we keep children safe</h2></div>
 <div className="grid g3">
  <div className="card c-sky rv"><IconBox name="cam" /><h3>CCTV</h3><p>Camera coverage across the campus, with parent viewing.</p></div>
  <div className="card c-coral rv d1"><IconBox name="heart" /><h3>Trained women staff</h3><p>Caring, trained women staff look after every child.</p></div>
  <div className="card c-violet rv d2"><IconBox name="lock" /><h3>Secure entry &amp; pickup</h3><p>Controlled entry and authorised pickup only.</p></div>
  <div className="card c-sun rv"><IconBox name="sparkle" /><h3>Child-safe furniture</h3><p>Rounded edges and age-appropriate sizes.</p></div>
  <div className="card c-mint rv d1"><IconBox name="toilet" /><h3>Child-friendly toilets</h3><p>Sized, clean and easy for little ones to use.</p></div>
  <div className="card c-pink rv d2"><IconBox name="aid" /><h3>First aid</h3><p>First-aid provisions kept ready on campus.</p></div>
  <div className="card c-sky rv"><IconBox name="leaf" /><h3>Hygiene &amp; cleanliness</h3><p>Regular cleaning of classrooms, toys and washrooms.</p></div>
 </div>
</div></section>

<section className="soft" id="facilities"><div className="container">
 <div className="sec-head rv"><span className="eyebrow">Facilities</span><h2>Spaces made for little explorers</h2><p>Concept images until real campus photographs are available.</p></div>
 <div className="grid g3">
  <article className="card c-sky rv" style={{ padding: 0, overflow: 'hidden' }}><Ph className="wide" art="orbit" cap="Air-conditioned classrooms" /><div style={{ padding: 22 }}><IconBox name="ac" /><h3>Air-conditioned classrooms</h3><p>Comfortable, bright rooms with child-friendly furniture and learning boards.</p></div></article>
  <article className="card c-violet rv d1" style={{ padding: 0, overflow: 'hidden' }}><Ph className="wide" art="moon" cap="Computer lab" /><div style={{ padding: 22 }}><IconBox name="laptop" /><h3>Computer lab</h3><p>A friendly introduction to technology for older learners.</p></div></article>
  <article className="card c-sun rv d2" style={{ padding: 0, overflow: 'hidden' }}><Ph className="wide" art="star" cap="Healthy snack area" /><div style={{ padding: 22 }}><IconBox name="snack" /><h3>Healthy snacks</h3><p>Nutritious snacks served in a clean, dedicated area.</p></div></article>
  <article className="card c-coral rv" style={{ padding: 0, overflow: 'hidden' }}><Ph className="wide" art="launch" cap="Safe transport" /><div style={{ padding: 22 }}><IconBox name="bus" /><h3>Safe transport</h3><p>Transport options for families.</p></div></article>
  <article className="card c-mint rv d1" style={{ padding: 0, overflow: 'hidden' }}><Ph className="wide" art="station" cap="Daycare nap room" /><div style={{ padding: 22 }}><IconBox name="moon" /><h3>Daycare nap room</h3><p>A quiet, cosy space for children to rest.</p></div></article>
 </div>
 <p className="rv" style={{ marginTop: 26, color: 'var(--muted)' }}><b style={{ color: 'var(--navy)' }}>Also planned:</b> {CHIPS.join(' · ')}.</p>
</div></section>

<section><div className="container split">
 <div className="rv"><span className="eyebrow c-coral">Reception &amp; Entrance</span><h2>A warm, premium welcome</h2>
  <ul className="tick c-coral"><li>Orbion Prep School logo on a warm timber feature wall</li><li>Large tagline: <b>Journey Beyond the Orbit</b></li><li>Motto prominently displayed: <b>Learn. Lead. Shine.</b></li><li>Elegant planetary and orbit line wall graphics, restrained and tasteful</li><li>Soft lighting, comfortable seating, a small planet-themed display of children’s work</li></ul></div>
 <Ph className="c-coral tall rv d1" art="orbit" cap="Reception concept" /></div></section>


<section className="soft" id="classrooms"><div className="container">
 <div className="sec-head rv"><span className="eyebrow">Classrooms</span><h2>Five rooms, five accent colours</h2><p>Each has age-appropriate rounded furniture, child-height storage, an interactive learning board, a reading corner, an activity area and soft lighting. One subtle wall graphic per room, never crowded.</p></div>
 <div className="grid g3">
  <article className="room c-sun rv"><RoomArt color="sun" planetKind="launch" label="Launch Room" /><div className="in"><span className="tag">Playgroup</span><h3 style={{ marginTop: '8px' }}>Launch Room</h3><p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Sunshine yellow. Soft floor play, sensory trays, low shelves.</p></div></article>
  <article className="room c-sky rv d1"><RoomArt color="sky" planetKind="orbit" label="Orbit Room" /><div className="in"><span className="tag">Pre-KG</span><h3 style={{ marginTop: '8px' }}>Orbit Room</h3><p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Sky blue. Circle rug, role-play corner, picture-book wall.</p></div></article>
  <article className="room c-violet rv d2"><RoomArt color="violet" planetKind="moon" label="Moon Room" /><div className="in"><span className="tag">LKG</span><h3 style={{ marginTop: '8px' }}>Moon Room</h3><p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Lavender. Craft table, building zone, cosy reading nook.</p></div></article>
  <article className="room c-coral rv"><RoomArt color="coral" planetKind="mars" label="Mars Room" /><div className="in"><span className="tag">UKG</span><h3 style={{ marginTop: '8px' }}>Mars Room</h3><p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Warm coral. Project tables, presentation corner, mini library.</p></div></article>
  <article className="room c-mint rv d1"><RoomArt color="mint" planetKind="station" label="Space Station" /><div className="in"><span className="tag">Daycare</span><h3 style={{ marginTop: '8px' }}>Space Station</h3><p style={{ color: 'var(--muted)', fontSize: '.95rem' }}>Soft mint. Nap beds, dim lighting, quiet play and snack area.</p></div></article>
 </div></div></section>


<section className="soft"><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-coral">Uniform &amp; Badge</span><h2>Simple, comfortable, professional</h2><p>Minimal space graphics: just the school logo and a small orbit mark.</p></div>
 <div className="badge-uni">
  <div className="card c-sky center rv"><svg viewBox="0 0 240 260" style={{ margin: 'auto', maxWidth: '260px' }} role="img" aria-label="Uniform concept"><path d="M70 40l30-14c6 12 34 12 40 0l30 14 36 40-26 20-14-14v130H74V86L60 100 34 80z" fill="#fff" stroke="#1B2A5C" strokeWidth="3" strokeLinejoin="round"/><path d="M100 26c6 12 34 12 40 0" fill="none" stroke="#3DA9FC" strokeWidth="5"/><g transform="translate(130 70) scale(.5)"><circle cx="24" cy="24" r="21" fill="#1B2A5C"/><ellipse cx="24" cy="24" rx="19" ry="7" fill="none" stroke="#FFB62E" strokeWidth="2.200" transform="rotate(-25 24 24)"/><circle cx="24" cy="24" r="9" fill="#fff"/><circle cx="24" cy="24" r="4.500" fill="#FF6B5E"/></g><rect x="74" y="200" width="92" height="14" fill="#1B2A5C" opacity=".12"/></svg>
   <h4>Polo + navy bottoms</h4><p style={{ color: 'var(--muted)' }}>White polo with a small chest logo and sky-blue collar trim.</p></div>
  <div className="card c-coral center rv d1"><svg viewBox="0 0 200 240" style={{ margin: 'auto', maxWidth: '200px' }} role="img" aria-label="School badge"><path d="M100 10l80 28v72c0 56-36 96-80 112-44-16-80-56-80-112V38z" fill="#1B2A5C"/><path d="M100 22l68 24v64c0 48-30 82-68 97-38-15-68-49-68-97V46z" fill="none" stroke="#FFB62E" strokeWidth="2"/><ellipse cx="100" cy="76" rx="44" ry="14" fill="none" stroke="#FFB62E" strokeWidth="3" transform="rotate(-20 100 76)"/><circle cx="100" cy="76" r="21" fill="#fff"/><circle cx="100" cy="76" r="10.5" fill="#FF6B5E"/><path d="M144 44l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#FFB62E"/><text x="100" y="140" textAnchor="middle" fontFamily="Fredoka,sans-serif" fontSize="22" fontWeight="600" fill="#fff" letterSpacing="2">ORBION</text><path d="M78 156h44" stroke="#FFB62E" strokeWidth="2" strokeLinecap="round"/></svg>
   <h4>School badge</h4><p style={{ color: 'var(--muted)' }}>Navy shield, orbit ring and a single star.</p></div>
 </div></div></section>

<section id="gallery"><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-pink">Gallery</span><h2>A peek into Orbion</h2><p>Concept images for now; real campus photographs will replace them.</p></div>
 <GalleryGrid />
</div></section>
<section className="soft"><div className="container"><Cta title="See it for yourself" text="Book a visit and walk through the campus with us." /></div></section>
    </>
  )
}
