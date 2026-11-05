import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta } from '../components/sections'
import { IconBox, OrbitDeco, Ph } from '../components/ui'

export default function Daycare() {
  return (
    <>
      <Head><title>{"Daycare · Space Station | Orbion Prep School"}</title><meta name="description" content={"A calm, cosy and caring daycare at Orbion Prep School, Coimbatore."} /></Head>
<section className="page-hero c-mint"><OrbitDeco /><div className="container split" style={{ alignItems: 'center' }}><div><div className="crumb"><Link to="/">Home</Link> / Daycare</div>
 <span className="eyebrow">Daycare · SPACE STATION</span><h1>A Little Home Away From Home.</h1>
 <p className="lead">A calm, cosy and caring place where children can rest, recharge and feel at home, so you can work with peace of mind.</p>
 <div className="btns"><Link className="btn btn-primary" to="/admissions#enquire">Enquire About Daycare</Link><Link className="btn btn-secondary" to="/visit">Book a Visit</Link></div></div>
 <Ph className="c-mint tall" art="station" cap="Space Station daycare" /></div></section>
<section><div className="container">
 <div className="sec-head center rv"><span className="eyebrow">Peace of mind</span><h2>Everything a working parent hopes for</h2></div>
 <div className="grid g3">
  <div className="card c-mint rv"><IconBox name="moon" /><h3>Calm &amp; cosy</h3><p>Soft lighting, quiet corners and a gentle rhythm to the day.</p></div>
  <div className="card c-violet rv d1"><IconBox name="moon" /><h3>Nap room</h3><p>A dedicated resting space where little ones recharge.</p></div>
  <div className="card c-sun rv d2"><IconBox name="snack" /><h3>Healthy snacks</h3><p>Nutritious snack times in a clean, dedicated snack area.</p></div>
  <div className="card c-coral rv"><IconBox name="heart" /><h3>Caring staff</h3><p>Trained women staff who treat every child with warmth.</p></div>
  <div className="card c-sky rv d1"><IconBox name="shield" /><h3>Safe &amp; hygienic</h3><p>Clean surroundings, child-friendly toilets and secure entry.</p></div>
  <div className="card c-pink rv d2"><IconBox name="play" /><h3>Rest &amp; play</h3><p>Age-appropriate activities, reading, art and play areas.</p></div>
 </div></div></section>
<section className="soft"><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-mint">A gentle day</span><h2>A sample rhythm <span className="draft">Sample</span></h2></div>
 <div className="steps">
  <div className="step c-sun rv"><h4>Arrive &amp; settle</h4><p>A warm welcome and quiet play.</p></div>
  <div className="step c-sky rv d1"><h4>Snack</h4><p>Healthy snack in the snack area.</p></div>
  <div className="step c-coral rv d2"><h4>Activities</h4><p>Age-appropriate creative play.</p></div>
  <div className="step c-violet rv d3"><h4>Rest</h4><p>Nap or quiet time.</p></div>
  <div className="step c-mint rv"><h4>Story &amp; go home</h4><p>Gentle wind-down, secure pickup.</p></div>
 </div>
 <p className="journey-note">Daycare hours, age eligibility and fees are to be confirmed. Please contact us.</p></div></section>
<section><div className="container grid g3"><Ph className="c-mint wide rv" art="moon" cap="Nap room" /><Ph className="c-sun wide rv d1" art="star" cap="Healthy snack area" /><Ph className="c-pink wide rv d2" art="earth" cap="Rest &amp; play corner" /></div></section>
<section><div className="container"><Cta title="A home away from home awaits" text="Talk to us about daycare for your child." /></div></section>
    </>
  )
}
