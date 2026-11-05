import type { RouteRecord } from 'vite-react-ssg'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Programmes from './pages/Programmes'
import AfterSchool from './pages/AfterSchool'
import Daycare from './pages/Daycare'
import Admissions from './pages/Admissions'
import Visit from './pages/Visit'
import Facilities from './pages/Facilities'
import Safety from './pages/Safety'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Faqs from './pages/Faqs'
import Blog from './pages/Blog'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Campus from './pages/Campus'
import DesignSystem from './pages/DesignSystem'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'team', element: <Team /> },
      { path: 'programmes', element: <Programmes /> },
      { path: 'after-school', element: <AfterSchool /> },
      { path: 'daycare', element: <Daycare /> },
      { path: 'admissions', element: <Admissions /> },
      { path: 'visit', element: <Visit /> },
      { path: 'facilities', element: <Facilities /> },
      { path: 'safety', element: <Safety /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'faqs', element: <Faqs /> },
      { path: 'blog', element: <Blog /> },
      { path: 'events', element: <Events /> },
      { path: 'contact', element: <Contact /> },
      { path: 'campus', element: <Campus /> },
      { path: 'design-system', element: <DesignSystem /> },
    ]
  }
]
