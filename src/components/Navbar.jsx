import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Menú', href: '#menu' },
  { label: 'Reseñas', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo">
        <span className="navbar__logo-icon">🍰</span>
        <span className="navbar__logo-text">Dulce Encanto</span>
      </a>

      <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="navbar__link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary navbar__cta" onClick={() => setOpen(false)}>
          Ordenar
        </a>
      </nav>

      <button className="navbar__burger" onClick={() => setOpen(o => !o)} aria-label="Menú">
        <span className={`burger-line ${open ? 'open' : ''}`} />
        <span className={`burger-line ${open ? 'open' : ''}`} />
        <span className={`burger-line ${open ? 'open' : ''}`} />
      </button>
    </header>
  )
}
