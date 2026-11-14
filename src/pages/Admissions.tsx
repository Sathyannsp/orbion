import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import Booking from '../components/Booking'
import { EnquiryForm } from '../components/forms'
import { OrbitDeco } from '../components/ui'

export default function Admissions() {
  return (
    <>
      <Head><title>{"Admissions | Orbion Prep School"}</title><meta name="description" content={"Admission process, enquiry form, campus visit booking and FAQs for Orbion Prep School, academic year 2027."} /></Head>
<section className="page-hero c-coral"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Admissions</div>
 <h1>Begin your child’s journey</h1><p className="lead">Admissions are open for enquiries for the June 2027 academic year.</p>
 <div className="btns"><a className="btn btn-secondary btn-sm" href="#enquire">Enquire</a><a className="btn btn-secondary btn-sm" href="#visit">Book a visit</a><a className="btn btn-secondary btn-sm" href="#faqs">FAQs</a></div></div></section>
<section><div className="container"><div className="sec-head rv"><span className="eyebrow">How it works</span><h2>Five simple steps</h2></div>
 <div className="steps">
  <div className="step c-coral rv"><h4>Submit an enquiry</h4><p>Share a few details below.</p></div>
  <div className="step c-sun rv d1"><h4>Schedule a campus visit</h4><p>Pick a date <a href="#visit" style={{ textDecoration: 'underline' }}>below</a>.</p></div>
  <div className="step c-mint rv d2"><h4>Meet our teachers</h4><p>Talk to the people who’ll teach your child.</p></div>
  <div className="step c-sky rv d3"><h4>Understand the programmes</h4><p>Find the right stage and schedule.</p></div>
  <div className="step c-violet rv"><h4>Complete admission</h4><p>We’ll guide you through the paperwork.</p></div>
 </div></div></section>
<section className="soft" id="enquire"><div className="container book" style={{ gridTemplateColumns: '1fr', maxWidth: '1180px' }}>
 <div className="grid" style={{ gap: '36px', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', alignItems: 'start' }}>
  <div className="rv"><span className="eyebrow">Admission Enquiry</span><h2>Tell us about your child</h2>
   <p style={{ marginTop: '12px' }} className="lead">Fields marked <span style={{ color: 'var(--coral)' }}>*</span> are required.</p>
   <div className="card flat c-sky tint" style={{ marginTop: '24px' }}><h4>Fees &amp; details</h4><p style={{ color: 'var(--navy)' }}>Please contact us for fee details. We’ll share everything transparently on a call or visit.</p>
    <div className="btns" style={{ marginTop: '12px' }}><a className="btn btn-secondary btn-sm" href="tel:8531908868">Call 8531908868</a><a className="btn btn-secondary btn-sm" href="tel:8148756418">Call 8148756418</a></div></div>
   <div className="card flat c-violet tint" id="brochure" style={{ marginTop: '16px' }}><h4>Brochure</h4><p style={{ color: 'var(--navy)' }}>Download our prospectus for programmes, philosophy and campus plans.</p><a className="btn btn-primary btn-sm" style={{ marginTop: '12px' }} href="#brochure">Download Brochure (PDF)</a><p className="mock-note" style={{ textAlign: 'left' }}>PDF to be supplied by the school.</p></div></div>
  <div className="rv d1"><EnquiryForm /></div>
 </div></div></section>
<section id="visit"><div className="container">
 <div className="sec-head rv"><span className="eyebrow c-sun">Campus visit</span><h2>Come and see Orbion</h2><p>Choose a date and time, and meet our team.</p></div>
 <Booking /></div></section>
<section className="soft" id="faqs"><div className="container" style={{ maxWidth: '820px' }}>
 <div className="sec-head rv"><span className="eyebrow c-sky">FAQs</span><h2>Questions, answered</h2><p>Items marked “to be confirmed” will be updated by the school before launch. Can’t find what you need? WhatsApp us.</p></div>
 <div className="faq-group c-coral"><h3>Admissions</h3>
  <details className="faq" open><summary>Who can apply?</summary><div>Children entering Playgroup, Pre-KG, LKG, UKG or Daycare for the June 2027 academic year. Exact eligibility is to be confirmed.</div></details>
  <details className="faq"><summary>What are the age criteria?</summary><div>Age bands for each programme are to be confirmed. Please contact us and we’ll guide you.</div></details>
  <details className="faq"><summary>What is the academic year?</summary><div>Orbion opens for the June 2027 academic year.</div></details></div>
 <div className="faq-group c-sky"><h3>Daily life</h3>
  <details className="faq"><summary>What are the school timings?</summary><div>Timings are to be confirmed and will be shared with enquiring families.</div></details>
  <details className="faq"><summary>How big are the classes?</summary><div>We keep classes small for personal attention. Exact numbers are to be confirmed.</div></details>
  <details className="faq"><summary>Is food provided?</summary><div>Healthy snacks are planned. Meal arrangements are to be confirmed.</div></details>
  <details className="faq"><summary>Is transportation available?</summary><div>Safe transport is planned. Routes and details are to be confirmed.</div></details></div>
 <div className="faq-group c-mint"><h3>Safety &amp; care</h3>
  <details className="faq"><summary>How do you keep children safe?</summary><div>CCTV, trained women staff, secure entry and pickup, child-safe furniture, child-friendly toilets, first aid and hygiene. See <Link to="/campus#safety" style={{ textDecoration: 'underline' }}>Campus &amp; Safety</Link>.</div></details>
  <details className="faq"><summary>Do you offer daycare?</summary><div>Yes, our <Link to="/programmes#daycare" style={{ textDecoration: 'underline' }}>Space Station daycare</Link> offers a calm, cosy place to rest and play. Hours and eligibility are to be confirmed.</div></details></div>
 <div className="faq-group c-violet"><h3>After-school</h3>
  <details className="faq"><summary>What after-school programmes are available?</summary><div>Academic Excellence (up to 10th), Speak &amp; Shine, Young Leaders and AI &amp; STEM Lab for Classes 1–12.</div></details>
  <details className="faq"><summary>What are the fees?</summary><div>Please contact us for fee details.</div></details></div>
</div></section>
    </>
  )
}
