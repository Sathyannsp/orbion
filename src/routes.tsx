import { Navigate, type RouteObject } from 'react-router-dom'
import type { RouteRecord } from 'vite-react-ssg'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Programmes from './pages/Programmes'
import AfterSchool from './pages/AfterSchool'
import Admissions from './pages/Admissions'
import Campus from './pages/Campus'
import Contact from './pages/Contact'

/** Old URLs from the earlier site structure. Hosting-level redirects live in public/_redirects. */
const OLD: [string, string][] = [
  ['team', '/about#team'], ['testimonials', '/about#voices'], ['facilities', '/campus#facilities'],
  ['safety', '/campus#safety'], ['gallery', '/campus#gallery'], ['events', '/#news'], ['blog', '/#tips'], ['news', '/#news'],
  ['daycare', '/programmes#daycare'], ['visit', '/admissions#visit'], ['faqs', '/admissions#faqs']
]

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'programmes', element: <Programmes /> },
      { path: 'after-school', element: <AfterSchool /> },
      { path: 'admissions', element: <Admissions /> },
      { path: 'campus', element: <Campus /> },
      { path: 'contact', element: <Contact /> },
      ...OLD.map(([from, to]): RouteObject => ({ path: from, element: <Navigate to={to} replace /> }))
    ]
  }
]
