import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta } from '../components/sections'
import { ContentList, SampleNote } from '../components/lists'
import { IconBox, OrbitDeco, Ph } from '../components/ui'

export default function About() {
  return (
    <>
      <Head><title>{"About Us | Orbion Prep School"}</title><meta name="description" content={"The story, philosophy, team and vision behind Orbion Prep School, Coimbatore."} /></Head>
<section className="page-hero c-coral"><OrbitDeco /><div className="container">
 <h1>Every child’s journey begins with a small step.</h1>
 <p className="lead">At Orbion, we help them explore, discover, grow and shine.</p></div></section>

<section><div className="container split">
 <div className="rv"><span className="eyebrow">Welcome to Orbion</span><h2>A preschool built around curiosity</h2>
  <p>Orbion Prep School is a new preschool in Vilankurichi, Coimbatore, opening for the June 2027 academic year. We offer Playgroup, Pre-KG, LKG, UKG and Daycare, plus after-school programmes for students in Classes 1–12.</p>
  <p>We chose space exploration as our story because every child is an explorer: curious, brave and full of questions. Our job is to give them a safe launch pad.</p>
  <p style={{ marginTop: 14 }}><Link className="btn btn-ghost" to="/programmes">See the learning journey →</Link></p></div>
 <Ph className="c-sky tall rv d1" art="orbit" cap="Teacher and children in conversation" /></div></section>

<section className="soft"><div className="container split rev">
 <div className="rv"><span className="eyebrow c-violet">Founder’s vision</span><h2>Why Orbion was established</h2>
  <p style={{ fontSize: '1.1rem' }}>“Every child confident, curious and ready to go beyond.”</p>
  <div className="notice" style={{ marginTop: 18 }}><b>Draft.</b> A personal note from founder Soniya will be added here once approved.</div></div>
 <Ph className="c-coral wide rv d1" art="star" cap="Founder portrait" /></div></section>

<section className="soft"><div className="container">
 <div className="sec-head center rv"><span className="eyebrow c-mint">Learning philosophy</span><h2>Learning that children can touch, say and do</h2></div>
 <div className="grid g3">
  <div className="card c-sun rv"><IconBox name="sparkle" /><h3>Activity-based education</h3><p>Hands-on play, art, music, stories and movement turn ideas into experiences.</p></div>
  <div className="card c-sky rv d1"><IconBox name="clock" /><h3>A new theme every week</h3><p>Each week explores one idea, such as animals, transport, our planet or festivals, across language, number, art and play.</p></div>
  <div className="card c-violet rv d2"><IconBox name="book" /><h3>National foundational-stage framework</h3><p>Our curriculum follows the national foundational-stage framework for early learning.</p></div>
 </div>
</div></section>

<section id="team"><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-sky">Our team</span><h2>The people behind the mission</h2><p>Caring teachers, clear communication and personal attention for every child. Photos and bios are pending approval from each team member.</p></div>
 <ContentList name="team" className="grid g4" />
</div></section>

<section className="soft" id="voices"><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-pink">Kind words</span><h2>Voices from our community</h2></div>
 <SampleNote />
 <ContentList name="testimonials" className="grid g3" />
</div></section>
<section><div className="container"><Cta /></div></section>
    </>
  )
}
