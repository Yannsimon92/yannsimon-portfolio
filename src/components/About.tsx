export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">À propos</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              <strong>Ingénieur Grenoble INP</strong> avec près de 10 ans d'expérience à l'intersection de la technique, du design et du produit numérique.
            </p>
            <p>
              Mon parcours mêle <strong>R&D</strong> (instrumentation, vision embarquée), <strong>développement web full-stack</strong> (Capgemini, Jurisoft), <strong>design UX/UI</strong> (Figma, e-learning, multimédia) et analyse de données Python.
            </p>
            <p>
              Je viens de compléter une <strong>formation Data Science & IA au Wagon</strong> (avril–juin 2026, titre RNCP niveau 6) : Machine Learning, Deep Learning, déploiement et mise en production de modèles.
            </p>
            <p>
              Ce qui me différencie : je comprends les données, je sais coder, et je sais rendre les résultats lisibles et utiles — pour les équipes comme pour les utilisateurs.
            </p>
            <p>
              Bilingue français-chinois. Expérience internationale (Taïwan, Portugal, Allemagne).
            </p>
            <div className="about-highlights">
              {[
                { number: 'Data', label: 'Data Science & IA' },
                { number: 'R&D', label: 'Ingénierie & Innovation' },
                { number: 'Web', label: 'Développement Créatif' },
                { number: 'Design', label: 'UX/UI & Direction Artistique' },
              ].map(({ number, label }) => (
                <div key={label} className="highlight-item">
                  <span className="highlight-number">{number}</span>
                  <span className="highlight-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-logo">
            <div className="about-logo-container">
              <img src="/logo-yann-simon.svg" alt="Yann Simon Logo" className="about-logo-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
