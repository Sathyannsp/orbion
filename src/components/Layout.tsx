import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Icon, Logo, Social } from './ui'
import { PHONE1, WA } from '../lib/config'
import { announcement } from '../data/content'

const NAV: [string, string][] = [['/', 'Home'], ['/about', 'About Us'], ['/programmes', 'Programmes'], ['/after-school', 'After School'], ['/campus', 'Campus & Safety'], ['/admissions', 'Admissions'], ['/contact', 'Contact']]

function AnnouncementBar() {
  const [show, setShow] = useState(announcement.active)
  useEffect(() => {
    try { if (localStorage.getItem('orbion-ann') === announcement.id) setShow(false) } catch { /* storage unavailable */ }
  }, [])
  if (!show) return null
  const close = () => { setShow(false); try { localStorage.setItem('orbion-ann', announcement.id) } catch { /* ignore */ } }
  return (
    <div className="annc" role="region" aria-label="Announcement">
      <p>{announcement.text} <Link to={announcement.to}>{announcement.linkText} →</Link></p>
      <button type="button" aria-label="Dismiss announcement" onClick={close}>×</button>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const [top, setTop] = useState(74)
  useEffect(() => setOpen(false), [pathname])
  const toggle = () => { setTop(Math.max(0, Math.round(document.querySelector('.hdr')!.getBoundingClientRect().bottom))); setOpen(o => !o) }
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <AnnouncementBar />
      <header className="hdr"><div className="container">
        <Link className="logo" to="/" aria-label="Orbion Prep School home"><Logo /><span>Orbion<small>PREP SCHOOL</small></span></Link>
        <nav className="nav" aria-label="Main">
          {NAV.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'on' : '')}>{label}</NavLink>)}
        </nav>
        <Link className="btn btn-primary btn-sm hdr-cta" to="/admissions#enquire">Enquire Now</Link>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="drawer" onClick={toggle}><span /></button>
      </div></header>
      <div className={`drawer ${open ? 'open' : ''}`} id="drawer" style={{ top }}>
        {NAV.map(([to, label]) => <Link key={to} to={to}>{label}<span aria-hidden="true">›</span></Link>)}
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
          <Social />
        </div>
        {col('School', [['/about', 'About Us'], ['/about#team', 'Our Team'], ['/programmes', 'Programmes'], ['/programmes#daycare', 'Daycare'], ['/after-school', 'After School']])}
        {col('Campus', [['/campus#safety', 'Safety'], ['/campus#facilities', 'Facilities'], ['/campus#gallery', 'Gallery']])}
        {col('Parents', [['/admissions', 'Admissions'], ['/admissions#visit', 'Book a Visit'], ['/admissions#faqs', 'FAQs'], ['/#news', 'News & Tips']])}
        <div><h4>Contact</h4><a href={WA}>WhatsApp enquiry</a>
          <Link to="/contact">Vilankurichi, Coimbatore, Tamil Nadu</Link><Link to="/contact#careers">Careers</Link></div>
      </div>
      <div className="brand-end"><b>ORBION PREP SCHOOL</b><i>JOURNEY BEYOND THE ORBIT · LEARN. LEAD. SHINE.</i><p>Little Explorers Today. Confident Leaders Tomorrow.</p></div>
    </div></footer>
  )
}

function Floaters() {
  return (
    <>
      <a className="wa" href={WA} aria-label="Chat with us on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.7.63.72.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.12-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z" /></svg>
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
