import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <section className="not-found">
        <div className="container">
          <div className="not-found-content">
            <p className="not-found-code">404</p>
            <h1 className="not-found-title">Page introuvable</h1>
            <p className="not-found-text">
              La page que vous cherchez n'existe pas ou a été déplacée.
            </p>
            <Link to="/" className="btn btn-primary">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
