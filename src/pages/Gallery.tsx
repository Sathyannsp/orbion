import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { GalleryGrid } from '../components/lists'
import { OrbitDeco } from '../components/ui'

export default function Gallery() {
  return (
    <>
      <Head><title>{"Gallery | Orbion Prep School"}</title><meta name="description" content={"Campus, classrooms, learning activities, events and celebrations at Orbion."} /></Head>
<section className="page-hero c-pink"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Gallery</div>
 <h1>A peek into Orbion</h1><p className="lead">Concept images for now; real campus photographs will replace them.</p></div></section>
<section><div className="container">
 <GalleryGrid /></div></section>
    </>
  )
}
