import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Journey } from '../components/sections'
import { Icon, IconBox, OrbitDeco, Planet } from '../components/ui'

export default function DesignSystem() {
  return (
    <>
      <Head><title>{"Design System | Orbion Prep School"}</title><meta name="description" content={"Colours, typography and components for the Orbion Prep School website."} /></Head>
<section className="page-hero c-sky"><OrbitDeco /><div className="container"><div className="crumb"><Link to="/">Home</Link> / Design System</div>
 <h1>Orbion design system</h1><p className="lead">Navy for trust. Colour for joy. Used one or two at a time.</p></div></section>
<section><div className="container spec">
 <div><h3>Colour</h3><div className="swatches">
  <div className="sw"><i style={{ background: '#1B2A5C' }}></i><div><b>Navy</b>#1B2A5C · text, trust</div></div>
  <div className="sw"><i style={{ background: '#FFB62E' }}></i><div><b>Sun</b>#FFB62E · Launch</div></div>
  <div className="sw"><i style={{ background: '#3DA9FC' }}></i><div><b>Sky</b>#3DA9FC · Orbit</div></div>
  <div className="sw"><i style={{ background: '#7B61FF' }}></i><div><b>Violet</b>#7B61FF · Moon</div></div>
  <div className="sw"><i style={{ background: '#FF6B5E' }}></i><div><b>Coral</b>#FF6B5E · Mars, CTA</div></div>
  <div className="sw"><i style={{ background: '#2BC48A' }}></i><div><b>Mint</b>#2BC48A · Space Station</div></div>
  <div className="sw"><i style={{ background: '#FF7AB6' }}></i><div><b>Pink</b>#FF7AB6 · highlights</div></div></div></div>
 <div><h3>Typography</h3><h1>Fredoka — Headings</h1><p style={{ marginTop: '12px', fontSize: '1.1rem' }}><b>Nunito</b> — body text that is clean, warm and highly readable on every screen.</p></div>
 <div><h3>Buttons &amp; tags</h3><div className="btns" style={{ margin: '0' }}><button className="btn btn-primary">Primary</button><button className="btn btn-secondary">Secondary</button><button className="btn btn-ghost">Ghost →</button><button className="btn btn-primary" disabled>Disabled</button></div>
  <p style={{ marginTop: '16px' }}><span className="tag">Tag</span> <span className="draft">Draft / to confirm</span></p></div>
 <div><h3>Programme card &amp; timeline stop</h3><div className="grid g3"><article className="card c-sun"><span className="ico"><Planet kind="launch" size={34} /></span><h3>Playgroup · Launch</h3><p>Programme card.</p><a className="btn btn-ghost" href="#">Explore →</a></article>
  <div className="card c-sky tint"><IconBox name="shield" /><h3>Facility card</h3><p style={{ color: 'var(--navy)' }}>Icon, title, short text.</p></div>
  <div className="card person c-mint"><div className="avatar"><Icon name="users" /></div><h4>Teacher card</h4><div className="role">ROLE</div></div></div></div>
 <div><h3>Form states</h3><div className="grid g3"><div className="field"><label>Default</label><input placeholder="Text" /></div><div className="field bad"><label>Error</label><input defaultValue="abc" /><span className="msg">Please enter a valid value.</span></div><div className="field ok"><label>Valid</label><input defaultValue="Looks good" /></div></div></div>
 <div><h3>FAQ accordion</h3><details className="faq" open><summary>Question text</summary><div>Answer text.</div></details></div>
 <div><h3>Radius, shadow &amp; spacing</h3><p>Radius 12 / 20 / 28 · soft navy shadows · 8-pt spacing · 1180px container · 48px minimum tap targets.</p></div>
 <div><h3>Motion &amp; accessibility</h3><p>Slow orbit rotation, gentle float, soft twinkle, reveal on scroll, line-draw timeline. All motion is disabled under <code>prefers-reduced-motion</code>. Visible focus rings, skip link, ARIA labels.</p></div>
 <div><h3>Journey timeline</h3><Journey /></div>
</div></section>
    </>
  )
}
