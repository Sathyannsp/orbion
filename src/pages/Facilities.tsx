import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta } from '../components/sections'
import { IconBox, OrbitDeco, Ph } from '../components/ui'

export default function Facilities() {
  return (
    <>
      <Head><title>{"Facilities | Orbion Prep School"}</title><meta name="description" content={"Air-conditioned classrooms, computer lab, healthy snacks, safe transport and CCTV for parents."} /></Head>
<section className="page-hero c-mint"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Facilities</div>
 <h1>Spaces made for little explorers</h1><p className="lead">Bright, clean, practical and designed with children in mind.</p></div></section>
<section><div className="container"><div className="notice" style={{ marginBottom: '24px' }}><b>Concept images.</b> Visuals are illustrative until actual campus photographs are available.</div>
 <div className="grid g3">
  <article className="card c-sky rv" style={{ padding: '0', overflow: 'hidden' }}><Ph className="wide" art="orbit" cap="Air-conditioned classrooms" style={{ borderRadius: '0', boxShadow: 'none' }} /><div style={{ padding: '22px' }}><IconBox name="ac" /><h3>Air-conditioned classrooms</h3><p>Comfortable, bright rooms with child-friendly furniture and learning boards.</p></div></article>
  <article className="card c-violet rv d1" style={{ padding: '0', overflow: 'hidden' }}><Ph className="wide" art="moon" cap="Computer lab" style={{ borderRadius: '0', boxShadow: 'none' }} /><div style={{ padding: '22px' }}><IconBox name="laptop" /><h3>Computer lab</h3><p>A friendly introduction to technology for older learners.</p></div></article>
  <article className="card c-sun rv d2" style={{ padding: '0', overflow: 'hidden' }}><Ph className="wide" art="star" cap="Healthy snack area" style={{ borderRadius: '0', boxShadow: 'none' }} /><div style={{ padding: '22px' }}><IconBox name="snack" /><h3>Healthy snacks</h3><p>Nutritious snacks served in a clean, dedicated area.</p></div></article>
  <article className="card c-coral rv" style={{ padding: '0', overflow: 'hidden' }}><Ph className="wide" art="launch" cap="Safe transport" style={{ borderRadius: '0', boxShadow: 'none' }} /><div style={{ padding: '22px' }}><IconBox name="bus" /><h3>Safe transport</h3><p>Transport options for families. <span className="draft">Details to confirm</span></p></div></article>
  <article className="card c-mint rv d1" style={{ padding: '0', overflow: 'hidden' }}><Ph className="wide" art="earth" cap="CCTV for parents" style={{ borderRadius: '0', boxShadow: 'none' }} /><div style={{ padding: '22px' }}><IconBox name="cam" /><h3>CCTV for parents</h3><p>Camera coverage that gives parents reassurance.</p></div></article>
  <article className="card c-pink rv d2" style={{ padding: '0', overflow: 'hidden' }}><Ph className="wide" art="station" cap="Daycare nap room" style={{ borderRadius: '0', boxShadow: 'none' }} /><div style={{ padding: '22px' }}><IconBox name="moon" /><h3>Daycare nap room</h3><p>A quiet, cosy space for children to rest.</p></div></article>
 </div>
 <div className="btns"><Link className="btn btn-secondary" to="/campus">See Campus &amp; Classroom Concepts</Link></div></div></section>
<section><div className="container"><Cta /></div></section>
    </>
  )
}
