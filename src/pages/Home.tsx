import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import HeroToys from '../components/HeroToys'
import { Cta, JourneyCompact } from '../components/sections'
import { BlogList, ContentList, Instagram } from '../components/lists'
import { Icon, IconBox } from '../components/ui'

export default function Home() {
  return (
    <>
      <Head><title>{"Orbion Prep School | Journey Beyond the Orbit"}</title><meta name="description" content={"Orbion Prep School, Vilankurichi, Coimbatore: joyful, activity-based preschool learning from Playgroup to UKG. Opening June 2027."} /></Head>
<section className="hero">
 <HeroToys />
 <div className="container">
  <div className="hero-copy">
   <div className="brandline">Journey Beyond the Orbit · Learn. Lead. Shine.</div>
   <h1>Every Great Journey Begins with a <em>Little Curiosity.</em></h1>
   <p className="lead">Where little explorers discover their potential through joyful, activity-based learning and meaningful experiences.</p>
   <div className="btns"><Link className="btn btn-primary" to="/admissions#enquire">Enquire Now</Link><Link className="btn btn-secondary" to="/admissions#visit">Book a Campus Visit</Link></div>
   <Link className="loc" to="/contact"><span className="loc-ico"><Icon name="pin" /></span>Vilankurichi, Coimbatore</Link>
  </div>
 </div>
</section>

<section className="trust"><div className="container"><div className="grid rv">
 <div className="it c-mint"><IconBox name="shield" />Safe &amp; Caring Environment</div>
 <div className="it c-coral"><IconBox name="cap" />Ready for Any Board</div>
 <div className="it c-sky"><IconBox name="rocket" />Activity-Based Learning</div>
 <div className="it c-violet"><IconBox name="users" />Small Classes</div>
</div></div></section>

<section>
 <div className="container split">
  <div className="rv"><span className="eyebrow c-coral">Our Promise</span>
   <h2>One Strong Start. Every Path Open.</h2>
   <p className="lead" style={{ marginTop: '14px' }}>From Playgroup to UKG, we nurture confident learners who are ready for their next educational journey.</p>
   <p style={{ marginTop: '14px', color: 'var(--muted)' }}>“Every child's journey begins with a small step. At Orbion, we help them explore, discover, grow and shine.”</p>
   <div className="btns"><Link className="btn btn-secondary" to="/about">Read Our Story</Link></div></div>
  <div className="rv d1 promise">
   <p className="hand-note n2">here’s what we mean</p>
   <ul className="tick c-coral">
    <li><b>A new theme each week.</b> Animals one week, our planet the next, always learned by doing.</li>
    <li><b>Four stages, one story.</b> Playgroup to UKG, each a step the child is ready for.</li>
    <li><b>Small classes.</b> So your child is known by name, not by number.</li>
   </ul>
  </div>
 </div>
</section>


<section className="soft">
 <div className="container">
  <div className="sec-head center rv"><span className="eyebrow">the journey</span><h2>One mission, four stops</h2><p>Every stage has its own room, its own colour and its own little goals. This is how a child grows through Orbion.</p></div>
  <JourneyCompact />
 </div>
</section>

<section>
 <div className="container grid g2">
  <div className="card c-violet tint rv" style={{ padding: '34px' }}><span className="eyebrow">After-School · Classes 1–12</span><h3 style={{ fontSize: '1.5rem' }}>Tuition, communication, leadership and AI &amp; STEM</h3><p style={{ color: 'var(--navy)' }}>Academic Excellence, Speak &amp; Shine, Young Leaders and AI &amp; STEM Lab for school students.</p><Link className="btn btn-secondary btn-sm" style={{ marginTop: '16px' }} to="/after-school">Explore After School</Link></div>
  <div className="card c-mint tint rv d1" style={{ padding: '34px' }}><span className="eyebrow">Daycare · Space Station</span><h3 style={{ fontSize: '1.5rem' }}>A Little Home Away From Home.</h3><p style={{ color: 'var(--navy)' }}>A calm, cosy and caring place where children rest, recharge and feel at home.</p><Link className="btn btn-secondary btn-sm" style={{ marginTop: '16px' }} to="/programmes#daycare">Visit the Space Station</Link></div>
 </div>
</section>

<section className="soft" id="news">
 <div className="container">
  <div className="sec-head rv"><span className="eyebrow c-sun">What’s on</span><h2>News &amp; events</h2></div>
  <ContentList name="events" className="grid g3" />
  <h3 id="tips" className="rv" style={{ margin: '48px 0 18px' }}>Reads for curious parents</h3>
  <BlogList />
 </div>
</section>

<section>
 <div className="container">
  <div className="sec-head center rv"><span className="eyebrow c-pink">Follow along</span><h2>Life at Orbion on Instagram</h2></div>
  <Instagram />
 </div>
</section>

<section className="soft"><div className="container"><Cta /></div></section>
    </>
  )
}
