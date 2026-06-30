import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()
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
      <a href={`#${id}`} className="nav-link" onClick={e => { e.preventDefault(); scrollTo(id) }}>{label}</a>
    ) : (
      <Link to={`/#${id}`} className="nav-link">{label}</Link>
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
            <Link to="/projets" className="nav-link" onClick={() => setMenuOpen(false)}>Projets</Link>
          </li>
          <li>{anchorLink('contact', 'Contact')}</li>
        </ul>
        <button
          className={`theme-toggle ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}
          type="button"
          aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
          onClick={toggle}
        >
          <span className="theme-toggle-inner">
            <span className="theme-toggle-icon theme-toggle-icon-sun" aria-hidden="true">
              <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="12" y1="3" x2="12" y2="5"></line>
                <line x1="12" y1="19" x2="12" y2="21"></line>
                <line x1="3" y1="12" x2="5" y2="12"></line>
                <line x1="19" y1="12" x2="21" y2="12"></line>
                <line x1="5.6" y1="5.6" x2="7" y2="7"></line>
                <line x1="17" y1="17" x2="18.4" y2="18.4"></line>
                <line x1="5.6" y1="18.4" x2="7" y2="17"></line>
                <line x1="17" y1="7" x2="18.4" y2="5.6"></line>
              </svg>
            </span>
            <span className="theme-toggle-icon theme-toggle-icon-moon" aria-hidden="true">
              <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13.5A7.5 7.5 0 0 1 11.5 5 6 6 0 1 0 20 13.5z"></path>
              </svg>
            </span>
            <span className="theme-toggle-knob" aria-hidden="true"></span>
          </span>
        </button>
        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
