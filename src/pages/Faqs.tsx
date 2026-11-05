import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta } from '../components/sections'
import { OrbitDeco } from '../components/ui'

export default function Faqs() {
  return (
    <>
      <Head><title>{"FAQs | Orbion Prep School"}</title><meta name="description" content={"Answers to common questions about admissions, timings, safety, daycare and more at Orbion."} /></Head>
<section className="page-hero c-sky"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / FAQs</div>
 <h1>Questions, answered</h1><p className="lead">Can’t find what you need? Call or WhatsApp us.</p></div></section>
<section><div className="container" style={{ maxWidth: '820px' }}>
 <div className="notice" style={{ marginBottom: '28px' }}><b>To be confirmed.</b> Items marked “to be confirmed” will be updated by the school before launch.</div>
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
  <details className="faq"><summary>How do you keep children safe?</summary><div>CCTV, trained women staff, secure entry and pickup, child-safe furniture, child-friendly toilets, first aid and hygiene. See our <Link to="/safety" style={{ textDecoration: 'underline' }}>Safety page</Link>.</div></details>
  <details className="faq"><summary>Do you offer daycare?</summary><div>Yes, our Space Station daycare offers a calm, cosy place to rest and play. Hours and eligibility are to be confirmed.</div></details></div>
 <div className="faq-group c-violet"><h3>After-school</h3>
  <details className="faq"><summary>What after-school programmes are available?</summary><div>Academic Excellence (up to 10th), Speak &amp; Shine, Young Leaders and AI &amp; STEM Lab for Classes 1–12.</div></details>
  <details className="faq"><summary>What are the fees?</summary><div>Please contact us for fee details.</div></details></div>
</div></section>
<section><div className="container"><Cta title="Still have a question?" text="We’re happy to help." /></div></section>
    </>
  )
}
