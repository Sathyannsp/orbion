import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta } from '../components/sections'
import { ContentList } from '../components/lists'
import { IconBox, OrbitDeco } from '../components/ui'

export default function Team() {
  return (
    <>
      <Head><title>{"Our Team | Orbion Prep School"}</title><meta name="description" content={"Meet the founder, principal and teachers of Orbion Prep School."} /></Head>
<section className="page-hero c-sky"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Our Team</div>
 <h1>The people behind the mission</h1><p className="lead">Caring teachers, strong communication and personalised attention for every child.</p></div></section>
<section><div className="container">
 <div className="notice" style={{ marginBottom: '26px' }}><b>Placeholders.</b> Profile photos and bios are pending; replace once approved by each team member.</div>
 <ContentList name="team" className="grid g4" /></div></section>
<section className="soft"><div className="container">
 <div className="sec-head center rv"><span className="eyebrow">What we stand for</span><h2>Why our teachers matter most</h2></div>
 <div className="grid g3">
  <div className="card c-coral rv"><IconBox name="heart" /><h3>Caring first</h3><p>A child learns best when they feel safe, known and valued.</p></div>
  <div className="card c-sky rv d1"><IconBox name="mic" /><h3>Communication skills</h3><p>Teachers model clear, confident speech and encourage children to share ideas.</p></div>
  <div className="card c-mint rv d2"><IconBox name="users" /><h3>Personalised attention</h3><p>Small classes let teachers notice and nurture each child’s strengths.</p></div>
 </div></div></section>
<section><div className="container"><Cta title="Want to meet us in person?" text="Book a campus visit and chat with our teachers." /></div></section>
    </>
  )
}
