import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { BlogList } from '../components/lists'
import { OrbitDeco } from '../components/ui'

export default function Blog() {
  return (
    <>
      <Head><title>{"Blog & Parenting Tips | Orbion Prep School"}</title><meta name="description" content={"Parenting, early childhood development, learning activities and more."} /></Head>
<section className="page-hero c-violet"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Blog</div>
 <h1>Parenting tips &amp; learning ideas</h1><p className="lead">Practical, friendly reads for curious parents.</p></div></section>
<section><div className="container">
 <div className="notice" style={{ marginBottom: '24px' }}><b>Sample article titles.</b> Articles will be written and approved by the school.</div>
 <BlogList /></div></section>
    </>
  )
}
