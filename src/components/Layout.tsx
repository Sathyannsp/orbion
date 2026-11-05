import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Icon, Logo } from './ui'
import { PHONE1, PHONE2, WA } from '../lib/config'

const NAV: [string, string][] = [['/', 'Home'], ['/about', 'About Us'], ['/programmes', 'Programmes'], ['/after-school', 'After-School'], ['/daycare', 'Daycare'], ['/facilities', 'Facilities'], ['/admissions', 'Admissions'], ['/contact', 'Contact']]
const MORE: [string, string][] = [['/team', 'Our Team'], ['/safety', 'Safety'], ['/gallery', 'Gallery'], ['/testimonials', 'Testimonials'], ['/faqs', 'FAQs'], ['/blog', 'Blog & Parenting Tips'], ['/events', 'Events & News'], ['/visit', 'Book a Campus Visit'], ['/campus', 'Campus Concepts'], ['/design-system', 'Design System']]

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="hdr"><div className="container">
        <Link className="logo" to="/" aria-label="Orbion Prep School home"><Logo /><span>Orbion<small>PREP SCHOOL</small></span></Link>
        <nav className="nav" aria-label="Main">
          {NAV.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'on' : '')}>{label}</NavLink>)}
        </nav>
        <Link className="btn btn-primary btn-sm hdr-cta" to="/admissions#enquire">Enquire Now</Link>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(o => !o)}><span /></button>
      </div></header>
      <div className={`drawer ${open ? 'open' : ''}`} id="drawer">
        {NAV.map(([to, label]) => <Link key={to} to={to}>{label}<span aria-hidden="true">›</span></Link>)}
        <div className="more">More</div>
        <div>{MORE.map(([to, label]) => <Link key={to} to={to}>{label}<span aria-hidden="true">›</span></Link>)}</div>
        <Link className="btn btn-primary" style={{ marginTop: 22, border: 0, color: '#fff' }} to="/admissions#enquire">Enquire Now</Link>
      </div>
    </>
  )
}

function Footer() {
  const col = (title: string, links: [string, string][]) => <div><h4>{title}</h4>{links.map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}</div>
  return (
    <footer className="ftr"><div className="container">
      <div className="cols">
        <div>
          <Link className="logo" to="/"><Logo /><span>Orbion<small>PREP SCHOOL</small></span></Link>
          <p style={{ marginTop: 14, maxWidth: '34ch' }}>Journey Beyond the Orbit. An activity-based preschool opening in Vilankurichi, Coimbatore for the June 2027 academic year.</p>
          <div className="soc" aria-label="Social media (links to be added)"><a href="#" aria-label="Instagram (placeholder)">IG</a><a href="#" aria-label="Facebook (placeholder)">FB</a><a href="#" aria-label="YouTube (placeholder)">YT</a></div>
        </div>
        {col('School', [['/about', 'About Us'], ['/team', 'Our Team'], ['/programmes', 'Programmes'], ['/daycare', 'Daycare'], ['/after-school', 'After-School']])}
        {col('Campus', [['/facilities', 'Facilities'], ['/safety', 'Safety'], ['/gallery', 'Gallery'], ['/campus', 'Campus Concepts']])}
        {col('Parents', [['/admissions', 'Admissions'], ['/visit', 'Book a Visit'], ['/faqs', 'FAQs'], ['/testimonials', 'Testimonials'], ['/blog', 'Blog'], ['/events', 'Events & News']])}
        <div><h4>Contact</h4><a href={`tel:${PHONE1}`}>{PHONE1}</a><a href={`tel:${PHONE2}`}>{PHONE2}</a><a href={WA}>WhatsApp enquiry</a>
          <Link to="/contact">Vilankurichi, Coimbatore, Tamil Nadu</Link><Link to="/contact#careers">Careers</Link></div>
      </div>
      <div className="brand-end"><b>ORBION PREP SCHOOL</b><i>JOURNEY BEYOND THE ORBIT · LEARN. LEAD. SHINE.</i><p>Little Explorers Today. Confident Leaders Tomorrow.</p></div>
      <p className="fine center">Design preview. Images are concept placeholders; fees, timings, ages and the final address are to be confirmed by the school. “Ready for Any Board” describes preparedness only; Orbion makes no claim of board affiliation or guaranteed admission.</p>
    </div></footer>
  )
}

function Floaters() {
  return (
    <>
      <a className="wa" href={WA} aria-label="Chat with us on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a13 13 0 00-11 19.7L3 29l6.5-1.7A13 13 0 1016 3zm0 2.4a10.6 10.6 0 11-5.4 19.7l-.4-.2-3.8 1 1-3.7-.3-.4A10.6 10.6 0 0116 5.4zm-4.2 5.3c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.6 4.2 6.5 5.7 3.2 1.2 3.9 1 4.6.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5s-2.3-1.1-2.6-1.2c-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.4-.7.1-.3.1-.5 0-.7l-1.2-2.9c-.3-.7-.6-.6-.9-.6z" /></svg>
      </a>
      <div className="mbar">
        <a href={`tel:${PHONE1}`}><span className="mi"><Icon name="phone" /></span> Call</a>
        <a className="wa-b" href={WA}>WhatsApp</a>
        <Link className="en" to="/admissions#enquire">Enquire</Link>
      </div>
    </>
  )
}

/** Scroll to top / hash target on navigation, plus reveal-on-scroll and timeline animation. */
function useRouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) { const t = document.getElementById(hash.slice(1)); if (t) { t.scrollIntoView(); return } }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.rv')
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in', 'go')); return }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); if (e.target.hasAttribute('data-journey')) e.target.classList.add('go'); io.unobserve(e.target) }
    }), { threshold: 0.15 })
    els.forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [pathname])
}

export default function Layout() {
  useRouteEffects()
  return (
    <>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
      <Floaters />
    </>
  )
}
