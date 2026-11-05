import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { CareerForm } from '../components/forms'
import { IconBox, OrbitDeco, Ph } from '../components/ui'

export default function Contact() {
  return (
    <>
      <Head><title>{"Careers & Contact | Orbion Prep School"}</title><meta name="description" content={"Contact Orbion Prep School in Vilankurichi, Coimbatore, and explore careers."} /></Head>
<section className="page-hero c-sky"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Contact</div>
 <h1>Let’s talk</h1><p className="lead">We’d love to hear from you.</p></div></section>
<section><div className="container split" style={{ alignItems: 'start' }}>
 <div className="rv"><h2>Contact us</h2>
  <div className="grid" style={{ gap: '14px', marginTop: '22px' }}>
   <a className="card flat c-sky" href="tel:8531908868" style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '18px' }}><IconBox name="phone" /><div><b style={{ color: 'var(--navy)' }}>8531908868</b><br /><small>Call</small></div></a>
   <a className="card flat c-sky" href="tel:8148756418" style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '18px' }}><IconBox name="phone" /><div><b style={{ color: 'var(--navy)' }}>8148756418</b><br /><small>Call</small></div></a>
   <a className="card flat c-mint" href="https://wa.me/918531908868" style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '18px' }}><IconBox name="chat" /><div><b style={{ color: 'var(--navy)' }}>WhatsApp enquiry</b><br /><small>8531908868</small></div></a>
   <div className="card flat c-coral" style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '18px' }}><IconBox name="pin" /><div><b style={{ color: 'var(--navy)' }}>Vilankurichi, Coimbatore, Tamil Nadu</b><br /><small>Full address to be confirmed</small></div></div>
  </div>
  <div className="soc" style={{ marginTop: '20px' }}><a href="#" style={{ background: 'var(--navy)', color: '#fff' }} aria-label="Instagram (placeholder)">IG</a><a href="#" style={{ background: 'var(--navy)', color: '#fff' }} aria-label="Facebook (placeholder)">FB</a><a href="#" style={{ background: 'var(--navy)', color: '#fff' }} aria-label="YouTube (placeholder)">YT</a></div></div>
 <Ph className="c-sky tall rv d1" art="earth" cap="Google Map placeholder · address pending" />
</div></section>

<section className="soft" id="careers"><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-mint">Careers</span><h2>Join the Orbion crew</h2><p>We’re building a caring, skilled team.</p></div>
 <div className="grid g3" style={{ marginBottom: '34px' }}>
  <div className="card c-coral rv"><IconBox name="cap" /><h3>Teaching opportunities</h3><p>Playgroup to UKG educators who love activity-based learning.</p></div>
  <div className="card c-sky rv d1"><IconBox name="heart" /><h3>Helpers &amp; support staff</h3><p>Caring support for classrooms, daycare and campus.</p></div>
  <div className="card c-violet rv d2"><IconBox name="laptop" /><h3>After-school trainers</h3><p>Tuition, communication, leadership and AI &amp; STEM trainers.</p></div></div>
 <CareerForm />
</div></section>
    </>
  )
}
