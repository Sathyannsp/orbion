import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta } from '../components/sections'
import { IconBox, OrbitDeco, Ph } from '../components/ui'

export default function AfterSchool() {
  return (
    <>
      <Head><title>{"After-School & Weekend Classes | Orbion Prep School"}</title><meta name="description" content={"Tuition, communication, leadership and AI & STEM programmes for Classes 1–12 at Orbion."} /></Head>
<section className="page-hero c-violet" style={{ background: 'linear-gradient(180deg,#EDEBFF,#fff)' }}><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / After-School</div>
 <h1>After-School &amp; Weekend Classes</h1><p className="lead">For school students in Classes 1–12: skills, confidence and curiosity beyond the classroom.</p>
 <div className="btns"><Link className="btn btn-primary" to="/admissions#enquire">Enquire Now</Link></div></div></section>
<section className="mature"><div className="container"><div className="grid g2">
 <article className="card c-sky rv" style={{ padding: '34px' }}><div className="num">01</div><IconBox name="book" /><h3 style={{ marginTop: '14px' }}>Academic Excellence</h3><p>Tuition up to 10th standard with clear concepts, regular practice and personal support.</p>
  <ul className="tick"><li>Subject support up to Class 10</li><li>Concept clarity and exam confidence</li><li>Homework and revision help</li></ul><Link className="btn btn-secondary btn-sm" style={{ marginTop: '18px' }} to="/admissions#enquire">Enquire</Link></article>
 <article className="card c-coral rv d1" style={{ padding: '34px' }}><div className="num">02</div><IconBox name="mic" /><h3 style={{ marginTop: '14px' }}>Speak &amp; Shine</h3><p>Communication and spoken skills so students express themselves clearly and confidently.</p>
  <ul className="tick"><li>Spoken English and public speaking</li><li>Storytelling, debate and presentation</li><li>Listening and conversation skills</li></ul><Link className="btn btn-secondary btn-sm" style={{ marginTop: '18px' }} to="/admissions#enquire">Enquire</Link></article>
 <article className="card c-mint rv" style={{ padding: '34px' }}><div className="num">03</div><IconBox name="crown" /><h3 style={{ marginTop: '14px' }}>Young Leaders</h3><p>Leadership and personality development that builds character, teamwork and responsibility.</p>
  <ul className="tick"><li>Teamwork and decision-making</li><li>Confidence and etiquette</li><li>Projects and leadership roles</li></ul><Link className="btn btn-secondary btn-sm" style={{ marginTop: '18px' }} to="/admissions#enquire">Enquire</Link></article>
 <article className="card c-violet rv d1" style={{ padding: '34px' }}><div className="num">04</div><IconBox name="laptop" /><h3 style={{ marginTop: '14px' }}>AI &amp; STEM Lab</h3><p>An introduction to artificial intelligence and technology through projects and experiments.</p>
  <ul className="tick"><li>Hands-on STEM experiments</li><li>Introduction to AI and coding concepts</li><li>Build, test and present projects</li></ul><Link className="btn btn-secondary btn-sm" style={{ marginTop: '18px' }} to="/admissions#enquire">Enquire</Link></article>
 </div>
 <p className="journey-note"><span className="draft">To confirm</span> Batch timings, grouping by class and fees will be shared by the school. Please contact us for details.</p></div></section>
<section className="soft"><div className="container split"><div className="rv"><span className="eyebrow">Same Orbion spirit</span><h2>Mature in method, warm in approach</h2><p>Older students keep the Orbion sense of exploration, with project-led, goal-oriented sessions suited to their age.</p></div>
 <Ph className="c-violet wide rv d1" art="orbit" cap="Students in the AI &amp; STEM Lab" /></div></section>
<section><div className="container"><Cta title="Find the right programme for your child" /></div></section>
    </>
  )
}
