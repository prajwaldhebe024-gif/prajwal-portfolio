import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [ ['About', '#about'], ['Expertise', '#expertise'], ['Projects', '#projects'], ['Certifications', '#certifications'], ['Contact', '#contact'] ]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" aria-label="Prajwal home">P<span>.</span></a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={15} /></a>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="mobile-links">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div>}
    </header>
  )
}
