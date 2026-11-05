import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta, Journey } from '../components/sections'
import { IconBox, OrbitDeco, Ph } from '../components/ui'

export default function About() {
  return (
    <>
      <Head><title>{"About Us | Orbion Prep School"}</title><meta name="description" content={"The story, philosophy and vision behind Orbion Prep School, Coimbatore."} /></Head>
<section className="page-hero c-coral"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Our Story</div>
 <h1>Every child’s journey begins with a small step.</h1>
 <p className="lead">At Orbion, we help them explore, discover, grow and shine.</p></div></section>

<section><div className="container split">
 <div className="rv"><span className="eyebrow">Welcome to Orbion</span><h2>A preschool built around curiosity</h2>
  <p>Orbion Prep School is a new preschool in Vilankurichi, Coimbatore, opening for the June 2027 academic year. We offer Playgroup, Pre-KG, LKG, UKG and Daycare, plus after-school programmes for students in Classes 1–12.</p>
  <p>We chose space exploration as our story because every child is an explorer: curious, brave and full of questions. Our job is to give them a safe launch pad.</p></div>
 <Ph className="c-sky tall rv d1" art="orbit" cap="Teacher and children in conversation" />
</div></section>

<section className="soft"><div className="container split rev">
 <div className="rv"><span className="eyebrow c-violet">Founder’s Vision</span><h2>Why Orbion was established</h2>
  <p style={{ fontSize: '1.1rem' }}>“Every child confident, curious and ready to go beyond.”</p>
  <div className="notice" style={{ marginTop: '18px' }}><b>Draft.</b> A personal note from founder Soniya will be added here once approved.</div></div>
 <Ph className="c-coral wide rv d1" art="star" cap="Founder portrait · placeholder" />
</div></section>

<section><div className="container">
 <div className="grid g2"><div className="card c-sky tint rv"><span className="eyebrow">Vision</span><h3>Every child confident, curious and ready to go beyond.</h3></div>
 <div className="card c-coral tint rv d1"><span className="eyebrow">Mission</span><h3>Nurture each child through an activity-based curriculum with a new theme every week, following the national foundational-stage framework.</h3></div></div>
</div></section>

<section className="soft"><div className="container">
 <div className="sec-head center rv"><span className="eyebrow c-mint">Learning Philosophy</span><h2>Learning that children can touch, say and do</h2></div>
 <div className="grid g3">
  <div className="card c-sun rv"><IconBox name="sparkle" /><h3>Activity-based education</h3><p>Hands-on play, art, music, stories and movement turn ideas into experiences.</p></div>
  <div className="card c-sky rv d1"><IconBox name="clock" /><h3>A new theme every week</h3><p>Each week explores one idea, such as animals, transport, our planet or festivals, across language, number, art and play.</p></div>
  <div className="card c-violet rv d2"><IconBox name="book" /><h3>National foundational-stage framework</h3><p>Our curriculum follows the national foundational-stage framework for early learning.</p></div>
 </div>
 <div className="grid g4" style={{ marginTop: '22px' }}>
  <div className="card flat c-coral rv"><IconBox name="mic" /><h4 style={{ marginTop: '12px' }}>Communication</h4></div>
  <div className="card flat c-mint rv d1"><IconBox name="crown" /><h4 style={{ marginTop: '12px' }}>Leadership</h4></div>
  <div className="card flat c-sun rv d2"><IconBox name="brush" /><h4 style={{ marginTop: '12px' }}>Imagination</h4></div>
  <div className="card flat c-violet rv d3"><IconBox name="heart" /><h4 style={{ marginTop: '12px' }}>Independence</h4></div>
 </div>
</div></section>

<section><div className="container">
 <div className="sec-head center rv"><span className="eyebrow">Our Educational Journey</span><h2>Launch. Orbit. Moon. Mars.</h2></div>
 <Journey /></div></section>
<section><div className="container"><Cta /></div></section>
    </>
  )
}
