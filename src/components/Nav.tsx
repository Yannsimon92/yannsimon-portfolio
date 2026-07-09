import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const anchorLink = (id: string, label: string) =>
    isHome ? (
      <a
        href={`#${id}`}
        className="nav-link"
        onClick={(e) => {
          e.preventDefault()
          scrollTo(id)
        }}
      >
        {label}
      </a>
    ) : (
      <Link to={`/#${id}`} className="nav-link">
        {label}
      </Link>
    )

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo-yann-simon.svg" alt="Yann Simon" className="nav-logo-img" />
        </Link>
        <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
          <li>{anchorLink('about', 'À propos')}</li>
          <li>{anchorLink('skills', 'Compétences')}</li>
          <li>{anchorLink('experience', 'Expérience')}</li>
          <li>
            <Link to="/projets" className="nav-link" onClick={() => setMenuOpen(false)}>
              Projets
            </Link>
          </li>
          <li>{anchorLink('contact', 'Contact')}</li>
        </ul>
        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
