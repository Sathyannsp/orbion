import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { EnquiryForm } from '../components/forms'
import { OrbitDeco } from '../components/ui'

export default function Admissions() {
  return (
    <>
      <Head><title>{"Admissions | Orbion Prep School"}</title><meta name="description" content={"Admission process and enquiry form for Orbion Prep School, academic year 2027."} /></Head>
<section className="page-hero c-coral"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Admissions</div>
 <h1>Begin your child’s journey</h1><p className="lead">Admissions are open for enquiries for the June 2027 academic year.</p></div></section>
<section><div className="container"><div className="sec-head rv"><span className="eyebrow">How it works</span><h2>Five simple steps</h2></div>
 <div className="steps">
  <div className="step c-coral rv"><h4>Submit an enquiry</h4><p>Share a few details below.</p></div>
  <div className="step c-sun rv d1"><h4>Schedule a campus visit</h4><p>Pick a date that suits you.</p></div>
  <div className="step c-mint rv d2"><h4>Meet our teachers</h4><p>Talk to the people who’ll teach your child.</p></div>
  <div className="step c-sky rv d3"><h4>Understand the programmes</h4><p>Find the right stage and schedule.</p></div>
  <div className="step c-violet rv"><h4>Complete admission</h4><p>We’ll guide you through the paperwork.</p></div>
 </div></div></section>
<section className="soft"><div className="container book" style={{ gridTemplateColumns: '1fr', maxWidth: '1180px' }}>
 <div className="grid" style={{ gap: '36px', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', alignItems: 'start' }}>
  <div className="rv"><span className="eyebrow">Admission Enquiry</span><h2>Tell us about your child</h2>
   <p style={{ marginTop: '12px' }} className="lead">Fields marked <span style={{ color: 'var(--coral)' }}>*</span> are required.</p>
   <div className="card flat c-sky tint" style={{ marginTop: '24px' }}><h4>Fees &amp; details</h4><p style={{ color: 'var(--navy)' }}>Please contact us for fee details. We’ll share everything transparently on a call or visit.</p>
    <div className="btns" style={{ marginTop: '12px' }}><a className="btn btn-secondary btn-sm" href="tel:8531908868">Call 8531908868</a><a className="btn btn-secondary btn-sm" href="tel:8148756418">Call 8148756418</a></div></div>
   <div className="card flat c-violet tint" id="brochure" style={{ marginTop: '16px' }}><h4>Brochure</h4><p style={{ color: 'var(--navy)' }}>Download our prospectus for programmes, philosophy and campus plans.</p><a className="btn btn-primary btn-sm" style={{ marginTop: '12px' }} href="#brochure">Download Brochure (PDF)</a><p className="mock-note" style={{ textAlign: 'left' }}>PDF to be supplied by the school.</p></div></div>
  <div className="rv d1"><EnquiryForm /></div>
 </div></div></section>
    </>
  )
}
