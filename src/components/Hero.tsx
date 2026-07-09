import { useRef } from 'react'
import { useHeroAnimation } from '../hooks/useHeroAnimation'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useHeroAnimation(canvasRef)

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-name">Yann Simon</span>
            <span className="hero-roles">Data Science & IA • Développement • Design</span>
          </h1>
          <p className="hero-description">
            ~10 ans d'expérience à la croisée de la tech, de la data et du design · Disponible
            septembre 2026
          </p>
          <p className="hero-expertise">
            Ingénieur Grenoble INP · Formation Data Science & IA — Le Wagon 2026
          </p>
          <div className="hero-location">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C5.2 0 3 2.2 3 5c0 3.5 5 11 5 11s5-7.5 5-11c0-2.8-2.2-5-5-5zm0 7.5c-1.4 0-2.5-1.1-2.5-2.5S6.6 2.5 8 2.5s2.5 1.1 2.5 2.5S9.4 7.5 8 7.5z" />
            </svg>
            Nantes, France
          </div>
          <div className="hero-cta">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
      <canvas className="hero-canvas" ref={canvasRef}></canvas>
    </section>
  )
}
