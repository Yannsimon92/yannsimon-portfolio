import { useEffect, useRef } from 'react'

export default function Contact() {
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (linkRef.current) {
      const email = 'yannsimon92' + '@' + 'protonmail.com'
      linkRef.current.href = 'mailto:' + email
      linkRef.current.textContent = email
    }
  }, [])

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Travaillons ensemble</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <svg
                className="contact-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div className="contact-details">
                <h3>Email</h3>
                <a ref={linkRef} href="#" className="contact-link">
                  Afficher l'email
                </a>
              </div>
            </div>
            <div className="contact-item">
              <svg
                className="contact-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/yannsimon92/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Voir mon profil
                </a>
              </div>
            </div>
            <div className="contact-item">
              <svg
                className="contact-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div className="contact-details">
                <h3>Localisation</h3>
                <p className="contact-text">Nantes, France</p>
              </div>
            </div>
          </div>
          <div className="contact-cta">
            <p className="contact-cta-text">
              Je suis ouvert aux opportunités de collaboration, freelance ou CDI, dans les domaines
              de <strong>la data science & IA</strong>, du{' '}
              <strong>développement web créatif</strong> et du <strong>design UX/UI</strong>.
            </p>
            <a
              href="https://www.linkedin.com/in/yannsimon92/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gradient btn-large"
            >
              Me contacter sur LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
