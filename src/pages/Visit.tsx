import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import Booking from '../components/Booking'
import { OrbitDeco } from '../components/ui'

export default function Visit() {
  return (
    <>
      <Head><title>{"Book a Campus Visit | Orbion Prep School"}</title><meta name="description" content={"Choose a date and time to visit Orbion Prep School."} /></Head>
<section className="page-hero c-sun"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Book a Campus Visit</div>
 <h1>Come and see Orbion</h1><p className="lead">Choose a date and time, and meet our team.</p></div></section>
<section><div className="container"><Booking /></div></section>
    </>
  )
}
