import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta, Graduation, Journey } from '../components/sections'
import { OrbitDeco, Ph } from '../components/ui'

export default function Programmes() {
  return (
    <>
      <Head><title>{"Programmes | Orbion Prep School"}</title><meta name="description" content={"Playgroup, Pre-KG, LKG and UKG at Orbion: Launch, Orbit, Moon and Mars."} /></Head>
<section className="page-hero c-violet"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Programmes</div>
 <h1>One journey. Four worlds.</h1><p className="lead">From Playgroup to UKG, a clear progression that builds skills step by step.</p>
 <div className="btns"><a className="btn btn-secondary btn-sm" href="#launch">Launch</a><a className="btn btn-secondary btn-sm" href="#orbit">Orbit</a><a className="btn btn-secondary btn-sm" href="#moon">Moon</a><a className="btn btn-secondary btn-sm" href="#mars">Mars</a></div></div></section>
<section><div className="container"><Journey />
 <p className="journey-note"><span className="draft">To confirm</span> Age bands, daily timings and class sizes will be confirmed by the school before launch.</p></div></section>

{/* Programme details */}
<section id="launch" className="c-sun soft"><div className="container split"><div className="rv"><span className="eyebrow">Playgroup · LAUNCH</span><h2>The beginning of curiosity and discovery</h2>
 <p><span className="tag">Age group: to be confirmed</span></p>
 <h4 style={{ marginTop: '20px' }}>Learning objectives</h4><ul className="tick"><li>Feel safe and happy away from home</li><li>Explore through senses, movement and play</li><li>Begin to listen, follow simple routines and express needs</li></ul>
 <h4 style={{ marginTop: '20px' }}>Skills developed</h4><p>Sensory exploration, early language, motor skills, social play.</p>
 <h4 style={{ marginTop: '20px' }}>Typical day <span className="draft">Sample</span></h4><p>Welcome circle · sensory play · story time · snack · music &amp; movement · goodbye song.</p>
 <h4 style={{ marginTop: '20px' }}>Activity-based learning</h4><p>Water play, clay, colours, rhymes and nature walks tied to the week’s theme.</p>
 <h4 style={{ marginTop: '20px' }}>Expected outcomes</h4><p>A child who is curious, comfortable at school and eager to join in.</p>
 <div className="btns"><Link className="btn btn-primary" to="/admissions#enquire">Enquire about Playgroup</Link></div></div>
 <Ph className="c-sun tall rv d1" art="launch" cap="Launch Room · Playgroup" /></div></section>

<section id="orbit" className="c-sky"><div className="container split rev"><div className="rv"><span className="eyebrow">Pre-KG · ORBIT</span><h2>Building routines, communication and early learning skills</h2>
 <p><span className="tag">Age group: to be confirmed</span></p>
 <h4 style={{ marginTop: '20px' }}>Learning objectives</h4><ul className="tick"><li>Settle into a daily rhythm</li><li>Speak in short sentences and ask questions</li><li>Recognise letters, shapes, colours and numbers</li></ul>
 <h4 style={{ marginTop: '20px' }}>Skills developed</h4><p>Listening, vocabulary, early numeracy, fine motor and teamwork.</p>
 <h4 style={{ marginTop: '20px' }}>Typical day <span className="draft">Sample</span></h4><p>Circle time · themed activity · phonics play · snack · art · outdoor play.</p>
 <h4 style={{ marginTop: '20px' }}>Activity-based learning</h4><p>Sorting games, role-play corners, story acting and simple experiments.</p>
 <h4 style={{ marginTop: '20px' }}>Expected outcomes</h4><p>A child who communicates clearly and follows routines with confidence.</p>
 <div className="btns"><Link className="btn btn-primary" to="/admissions#enquire">Enquire about Pre-KG</Link></div></div>
 <Ph className="c-sky tall rv d1" art="orbit" cap="Orbit Room · Pre-KG" /></div></section>

<section id="moon" className="c-violet soft"><div className="container split"><div className="rv"><span className="eyebrow">LKG · MOON</span><h2>Developing independence, creativity and foundational knowledge</h2>
 <p><span className="tag">Age group: to be confirmed</span></p>
 <h4 style={{ marginTop: '20px' }}>Learning objectives</h4><ul className="tick"><li>Take care of belongings and simple tasks</li><li>Blend sounds, begin reading and writing strokes</li><li>Count, compare and recognise patterns</li></ul>
 <h4 style={{ marginTop: '20px' }}>Skills developed</h4><p>Pre-reading, number sense, creativity, problem-solving, public speaking.</p>
 <h4 style={{ marginTop: '20px' }}>Typical day <span className="draft">Sample</span></h4><p>Show &amp; tell · language block · number play · snack · art &amp; craft · stories.</p>
 <h4 style={{ marginTop: '20px' }}>Activity-based learning</h4><p>Mini projects, building blocks, music, drama and basic STEM play.</p>
 <h4 style={{ marginTop: '20px' }}>Expected outcomes</h4><p>An independent, imaginative child with strong foundations.</p>
 <div className="btns"><Link className="btn btn-primary" to="/admissions#enquire">Enquire about LKG</Link></div></div>
 <Ph className="c-violet tall rv d1" art="moon" cap="Moon Room · LKG" /></div></section>

<section id="mars" className="c-coral"><div className="container split rev"><div className="rv"><span className="eyebrow">UKG · MARS</span><h2>Building confidence, readiness and school-transition skills</h2>
 <p><span className="tag">Age group: to be confirmed</span></p>
 <h4 style={{ marginTop: '20px' }}>Learning objectives</h4><ul className="tick"><li>Read and write simple words and sentences</li><li>Work with numbers and basic operations through play</li><li>Present ideas with confidence</li></ul>
 <h4 style={{ marginTop: '20px' }}>Skills developed</h4><p>Literacy, numeracy, reasoning, leadership, self-management.</p>
 <h4 style={{ marginTop: '20px' }}>Typical day <span className="draft">Sample</span></h4><p>Morning circle · literacy · maths games · snack · project time · presentation.</p>
 <h4 style={{ marginTop: '20px' }}>Activity-based learning</h4><p>Group projects, class presentations, simple coding-style puzzles and science play.</p>
 <h4 style={{ marginTop: '20px' }}>Expected outcomes</h4><p>A confident, school-ready child. Graduates celebrate <b>Mission Mars Complete</b>.</p>
 <div className="btns"><Link className="btn btn-primary" to="/admissions#enquire">Enquire about UKG</Link></div></div>
 <Ph className="c-coral tall rv d1" art="mars" cap="Mars Room · UKG" /></div></section>

<section className="navy-bg"><div className="container"><Graduation /></div></section>
<section><div className="container"><Cta /></div></section>
    </>
  )
}
