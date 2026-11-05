import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta, Graduation, Journey } from '../components/sections'
import { Instagram, ContentList } from '../components/lists'
import { Icon, IconBox, Ph, Planet } from '../components/ui'
import HeroScene from '../components/HeroScene'

export default function Home() {
  return (
    <>
      <Head><title>{"Orbion Prep School | Journey Beyond the Orbit"}</title><meta name="description" content={"Orbion Prep School, Vilankurichi, Coimbatore: joyful, activity-based preschool learning from Playgroup to UKG. Opening June 2027."} /></Head>
<section className="hero">
 <div className="container">
  <div>
   <div className="brandline"><b>Orbion Prep School</b> · Journey Beyond the Orbit · Learn. Lead. Shine.</div>
   <h1>Every Great Journey Begins with a <em>Little Curiosity.</em></h1>
   <p className="lead">Where little explorers discover their potential through joyful, activity-based learning and meaningful experiences.</p>
   <div className="btns"><Link className="btn btn-primary" to="/admissions#enquire">Enquire Now</Link><Link className="btn btn-secondary" to="/visit">Book a Campus Visit</Link></div>
   <p style={{ marginTop: '22px', fontSize: '.95rem', color: 'var(--muted)' }}>Vilankurichi, Coimbatore · Now taking enquiries for the June 2027 academic year</p>
  </div>
  <div className="hero-vis">
   <HeroScene />
   <p className="hand-note n1">a new theme<br />every week</p>
   <div className="planet float d2" style={{ left: '-6px', top: '4px' }}><Planet kind="moon" size={56} /></div>
  </div>
 </div>
</section>

<section className="trust"><div className="container"><div className="grid rv">
 <div className="it c-coral"><IconBox name="cap" />Ready for Any Board</div>
 <div className="it c-sky"><IconBox name="mic" />Confident Speakers</div>
 <div className="it c-violet"><IconBox name="users" />Small Classes</div>
 <div className="it c-mint"><IconBox name="shield" />Safe &amp; Caring Environment</div>
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
  <Journey />
 </div>
</section>

<section>
 <div className="container grid g2">
  <div className="card c-sky tint rv"><span className="eyebrow">Vision</span><h3 style={{ fontSize: '1.6rem' }}>Every child confident, curious and ready to go beyond.</h3></div>
  <div className="card c-coral tint rv d1"><span className="eyebrow">Mission</span><h3 style={{ fontSize: '1.25rem' }}>Nurture each child through an activity-based curriculum with a new theme every week, following the national foundational-stage framework.</h3></div>
 </div>
</section>

<section className="soft">
 <div className="container">
  <div className="sec-head rv"><span className="eyebrow c-violet">Our Programmes</span><h2>Where every little explorer fits in</h2></div>
  <div className="grid g4">
   <article className="card c-sun rv"><span className="ico"><Planet kind="launch" size={34} /></span><h3>Playgroup · Launch</h3><p>Gentle first steps into school, built on play, senses and stories.</p><Link className="btn btn-ghost" to="/programmes#launch">Explore →</Link></article>
   <article className="card c-sky rv d1"><span className="ico"><Planet kind="orbit" size={34} /></span><h3>Pre-KG · Orbit</h3><p>Routines, conversation and early learning skills take shape.</p><Link className="btn btn-ghost" to="/programmes#orbit">Explore →</Link></article>
   <article className="card c-violet rv d2"><span className="ico"><Planet kind="moon" size={34} /></span><h3>LKG · Moon</h3><p>Independence, creativity and foundational knowledge grow.</p><Link className="btn btn-ghost" to="/programmes#moon">Explore →</Link></article>
   <article className="card c-coral rv d3"><span className="ico"><Planet kind="mars" size={34} /></span><h3>UKG · Mars</h3><p>Confidence, readiness and a smooth move to big school.</p><Link className="btn btn-ghost" to="/programmes#mars">Explore →</Link></article>
  </div>
 </div>
</section>

<section>
 <div className="container">
  <div className="sec-head center rv"><span className="eyebrow c-coral">Why Orbion</span><h2>Why families feel at home here</h2></div>
  <div className="grid g3">
   <div className="card c-coral rv"><IconBox name="sparkle" /><h3>Activity-based learning</h3><p>Children learn by doing, with a new theme every week.</p></div>
   <div className="card c-sky rv d1"><IconBox name="mic" /><h3>Confident speakers</h3><p>Conversation, storytelling and expression woven into every day.</p></div>
   <div className="card c-violet rv d2"><IconBox name="users" /><h3>Small classes</h3><p>Personal attention so every child is seen and heard.</p></div>
   <div className="card c-mint rv"><IconBox name="shield" /><h3>Safe &amp; caring</h3><p>Trained women staff, secure entry and child-safe spaces.</p></div>
   <div className="card c-sun rv d1"><IconBox name="cap" /><h3>Ready for any board</h3><p>A foundation that prepares children for CBSE, ICSE, IGCSE and Cambridge pathways.</p></div>
   <div className="card c-pink rv d2"><IconBox name="heart" /><h3>Caring teachers</h3><p>Warm, patient educators who know each child by name.</p></div>
  </div>
 </div>
</section>

<section className="soft">
 <div className="container">
  <div className="sec-head rv"><span className="eyebrow c-mint">Campus &amp; Facilities</span><h2>Bright, calm, and designed for little ones</h2><p>Concept visuals until final campus photographs are available.</p></div>
  <div className="grid g3">
   <Ph className="c-sky wide rv" art="orbit" cap="Air-conditioned classrooms" />
   <Ph className="c-violet wide rv d1" art="moon" cap="Reading &amp; storytelling corner" />
   <Ph className="c-mint wide rv d2" art="station" cap="Daycare nap room" />
  </div>
  <div className="btns"><Link className="btn btn-secondary" to="/facilities">See All Facilities</Link><Link className="btn btn-ghost" to="/campus">Campus concepts →</Link></div>
 </div>
</section>

<section>
 <div className="container grid g2">
  <div className="card c-violet tint rv" style={{ padding: '34px' }}><span className="eyebrow">After-School · Classes 1–12</span><h3 style={{ fontSize: '1.5rem' }}>Tuition, communication, leadership and AI &amp; STEM</h3><p style={{ color: 'var(--navy)' }}>Academic Excellence, Speak &amp; Shine, Young Leaders and AI &amp; STEM Lab for school students.</p><Link className="btn btn-secondary btn-sm" style={{ marginTop: '16px' }} to="/after-school">Explore After-School</Link></div>
  <div className="card c-mint tint rv d1" style={{ padding: '34px' }}><span className="eyebrow">Daycare · Space Station</span><h3 style={{ fontSize: '1.5rem' }}>A Little Home Away From Home.</h3><p style={{ color: 'var(--navy)' }}>A calm, cosy and caring place where children rest, recharge and feel at home.</p><Link className="btn btn-secondary btn-sm" style={{ marginTop: '16px' }} to="/daycare">Visit the Space Station</Link></div>
 </div>
</section>

<section className="navy-bg"><div className="container"><Graduation /></div></section>

<section>
 <div className="container">
  <div className="sec-head rv"><span className="eyebrow c-sky">Our Teachers</span><h2>People who make every day special</h2></div>
  <div className="grid g4">
   <div className="card person c-coral rv"><div className="avatar"><Icon name="users" /></div><h4>Soniya</h4><div className="role">Founder</div></div>
   <div className="card person c-sky rv d1"><div className="avatar"><Icon name="users" /></div><h4>Ranjini</h4><div className="role">Principal</div></div>
   <div className="card person c-mint rv d2"><div className="avatar"><Icon name="users" /></div><h4>Sowmya</h4><div className="role">Teacher</div></div>
   <div className="card person c-violet rv d3"><div className="avatar"><Icon name="users" /></div><h4>Tanu</h4><div className="role">Teacher</div></div>
  </div>
  <div className="btns"><Link className="btn btn-secondary" to="/team">Meet the Team</Link></div>
 </div>
</section>

<section className="soft">
 <div className="container">
  <div className="sec-head center rv"><span className="eyebrow">Parent Voices</span><h2>Kind words from families</h2></div>
  <div className="notice rv" style={{ marginBottom: '22px' }}><b>Sample placeholders.</b> Genuine testimonials will replace these once the school has parent feedback and written permissions.</div>
  <div className="grid g3">
   <div className="card quote c-coral rv"><p>“[Sample placeholder] A warm place where my child looks forward to every morning.”</p><div className="by"><span className="avatar" style={{ width: '44px', height: '44px', margin: '0', boxShadow: 'none' }}></span><div><b>Parent name</b><small>Sample · Pending permission</small></div></div></div>
   <div className="card quote c-sky rv d1"><p>“[Sample placeholder] The teachers know every child personally.”</p><div className="by"><span className="avatar" style={{ width: '44px', height: '44px', margin: '0', boxShadow: 'none' }}></span><div><b>Parent name</b><small>Sample · Pending permission</small></div></div></div>
   <div className="card quote c-mint rv d2"><p>“[Sample placeholder] I feel at ease leaving my child here while I work.”</p><div className="by"><span className="avatar" style={{ width: '44px', height: '44px', margin: '0', boxShadow: 'none' }}></span><div><b>Parent name</b><small>Sample · Pending permission</small></div></div></div>
  </div>
 </div>
</section>

<section>
 <div className="container">
  <div className="sec-head rv"><span className="eyebrow c-sun">Events &amp; News</span><h2>What’s coming up</h2></div>
  <ContentList name="events" limit={3} className="grid g3" />
  <div className="btns"><Link className="btn btn-secondary" to="/events">All Events &amp; News</Link></div>
 </div>
</section>

<section>
 <div className="container">
  <div className="sec-head center rv"><span className="eyebrow c-pink">Follow Along</span><h2>Life at Orbion on Instagram</h2></div>
  <Instagram />
 </div>
</section>

<section className="soft">
 <div className="container split">
  <div className="rv"><span className="eyebrow c-violet">Brochure</span><h2>Take the Orbion story home</h2><p className="lead" style={{ marginTop: '12px' }}>Our programmes, philosophy and campus plans in one easy read. Share it with the family.</p>
   <div className="btns"><Link className="btn btn-primary" to="/admissions#brochure">Download Brochure</Link></div><p className="mock-note" style={{ textAlign: 'left' }}>Brochure PDF to be supplied by the school.</p></div>
  <Ph className="c-violet tall rv d1" art="star" cap="Brochure cover preview" />
 </div>
</section>

<section><div className="container"><Cta /></div></section>
    </>
  )
}
