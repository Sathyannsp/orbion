import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta } from '../components/sections'
import { ContentList } from '../components/lists'
import { OrbitDeco } from '../components/ui'

export default function Events() {
  return (
    <>
      <Head><title>{"Events & News | Orbion Prep School"}</title><meta name="description" content={"Open houses, admission announcements and celebrations at Orbion."} /></Head>
<section className="page-hero c-sun"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Events &amp; News</div>
 <h1>What’s happening at Orbion</h1><p className="lead">Open houses, announcements and celebrations.</p></div></section>
<section><div className="container">
 <div className="notice" style={{ marginBottom: '24px' }}><b>Dates to be announced.</b> Confirmed events will be added here. No achievements are listed until they happen.</div>
 <ContentList name="events" className="grid g2" /></div></section>
<section className="soft"><div className="container"><Cta title="Don’t miss an update" text="Message us on WhatsApp to hear about events and admissions first." /></div></section>
    </>
  )
}
