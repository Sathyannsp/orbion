import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Cta } from '../components/sections'
import { ContentList, SampleNote } from '../components/lists'
import { OrbitDeco } from '../components/ui'

export default function Testimonials() {
  return (
    <>
      <Head><title>{"Testimonials | Orbion Prep School"}</title><meta name="description" content={"Parent, student and teacher experiences at Orbion Prep School."} /></Head>
<section className="page-hero c-pink"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Testimonials</div>
 <h1>Voices from our community</h1><p className="lead">Real stories from families and staff will appear here after we open.</p></div></section>
<section><div className="container">
 <SampleNote />
 <h3 style={{ marginBottom: '16px' }}>Parents</h3>
 <ContentList name="testimonials" group="parent" className="grid g3" style={{ marginBottom: '40px' }} />
 <h3 style={{ marginBottom: '16px' }}>Students</h3>
 <ContentList name="testimonials" group="student" className="grid g3" style={{ marginBottom: '40px' }} />
 <h3 style={{ marginBottom: '16px' }}>Teachers</h3>
 <ContentList name="testimonials" group="teacher" className="grid g3" style={{ marginBottom: '40px' }} />
</div></section>
<section className="soft"><div className="container"><Cta /></div></section>
    </>
  )
}
