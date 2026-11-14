import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { IconBox, OrbitDeco } from '../components/ui'

export default function AfterSchool() {
  return (
    <>
      <Head><title>{"After School | Orbion Prep School"}</title><meta name="description" content={"After-school and weekend programmes for Classes 1–12 at Orbion: Academic Excellence, Speak & Shine, Young Leaders and AI & STEM Lab."} /></Head>
<section className="page-hero c-violet"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / After School</div>
 <h1>After School for Classes 1–12</h1><p className="lead">Tuition, communication, leadership and AI &amp; STEM for school students, after school and on weekends.</p>
 <div className="btns"><Link className="btn btn-primary btn-sm" to="/admissions#enquire">Enquire Now</Link><Link className="btn btn-secondary btn-sm" to="/programmes">Preschool programmes →</Link></div></div></section>

<section id="programmes" className="mature soft"><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-violet">After-School &amp; Weekend · Classes 1–12</span><h2>Skills and confidence beyond the classroom</h2><p>Project-led, goal-oriented sessions with the same Orbion spirit of exploration.</p></div>
 <div className="grid g2">
 <article className="card c-sky rv" style={{ padding: '34px' }}><div className="num">01</div><IconBox name="book" /><h3 style={{ marginTop: '14px' }}>Academic Excellence</h3><p>Tuition up to 10th standard with clear concepts, regular practice and personal support.</p>
  <ul className="tick"><li>Subject support up to Class 10</li><li>Concept clarity and exam confidence</li><li>Homework and revision help</li></ul><Link className="btn btn-secondary btn-sm" style={{ marginTop: '18px' }} to="/admissions#enquire">Enquire</Link></article>
 <article className="card c-coral rv d1" style={{ padding: '34px' }}><div className="num">02</div><IconBox name="mic" /><h3 style={{ marginTop: '14px' }}>Speak &amp; Shine</h3><p>Communication and spoken skills so students express themselves clearly and confidently.</p>
  <ul className="tick"><li>Spoken English and public speaking</li><li>Storytelling, debate and presentation</li><li>Listening and conversation skills</li></ul><Link className="btn btn-secondary btn-sm" style={{ marginTop: '18px' }} to="/admissions#enquire">Enquire</Link></article>
 <article className="card c-mint rv" style={{ padding: '34px' }}><div className="num">03</div><IconBox name="crown" /><h3 style={{ marginTop: '14px' }}>Young Leaders</h3><p>Leadership and personality development that builds character, teamwork and responsibility.</p>
  <ul className="tick"><li>Teamwork and decision-making</li><li>Confidence and etiquette</li><li>Projects and leadership roles</li></ul><Link className="btn btn-secondary btn-sm" style={{ marginTop: '18px' }} to="/admissions#enquire">Enquire</Link></article>
 <article className="card c-violet rv d1" style={{ padding: '34px' }}><div className="num">04</div><IconBox name="laptop" /><h3 style={{ marginTop: '14px' }}>AI &amp; STEM Lab</h3><p>An introduction to artificial intelligence and technology through projects and experiments.</p>
  <ul className="tick"><li>Hands-on STEM experiments</li><li>Introduction to AI and coding concepts</li><li>Build, test and present projects</li></ul><Link className="btn btn-secondary btn-sm" style={{ marginTop: '18px' }} to="/admissions#enquire">Enquire</Link></article>
 </div></div></section>
    </>
  )
}
