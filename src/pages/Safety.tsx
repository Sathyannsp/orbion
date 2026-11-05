import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta } from '../components/sections'
import { IconBox, OrbitDeco } from '../components/ui'

export default function Safety() {
  return (
    <>
      <Head><title>{"Safety | Orbion Prep School"}</title><meta name="description" content={"How Orbion Prep School keeps children safe: CCTV, trained women staff, secure entry and pickup, hygiene."} /></Head>
<section className="page-hero c-mint"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Safety</div>
 <h1>Safe hands. Safe spaces.</h1><p className="lead">Your child’s safety is the foundation of everything we do.</p></div></section>
<section><div className="container"><div className="grid g3">
 <div className="card c-sky rv"><IconBox name="cam" /><h3>CCTV</h3><p>Camera coverage across the campus, with parent viewing.</p></div>
 <div className="card c-coral rv d1"><IconBox name="heart" /><h3>Trained women staff</h3><p>Caring, trained women staff look after every child.</p></div>
 <div className="card c-violet rv d2"><IconBox name="lock" /><h3>Secure entry &amp; pickup</h3><p>Controlled entry and authorised pickup only.</p></div>
 <div className="card c-sun rv"><IconBox name="sparkle" /><h3>Child-safe furniture</h3><p>Rounded edges and age-appropriate sizes.</p></div>
 <div className="card c-mint rv d1"><IconBox name="toilet" /><h3>Child-friendly toilets</h3><p>Sized, clean and easy for little ones to use.</p></div>
 <div className="card c-pink rv d2"><IconBox name="aid" /><h3>First aid</h3><p>First-aid provisions kept ready on campus.</p></div>
 <div className="card c-sky rv"><IconBox name="leaf" /><h3>Hygiene &amp; cleanliness</h3><p>Regular cleaning of classrooms, toys and washrooms.</p></div>
</div>
<div className="notice" style={{ marginTop: '28px' }}><b>For owner review.</b> The campus is not yet operating. Before launch, please confirm each provision above is in place and update wording if any differs. Details such as staff training and safety procedures can be added then.</div></div></section>
<section><div className="container"><Cta title="Questions about safety?" text="Visit our campus and see for yourself." /></div></section>
    </>
  )
}
