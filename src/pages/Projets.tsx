import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

type Category = 'all' | 'web' | 'rd' | 'design' | 'data'

const projects = [
  {
    id: 'hydrosense',
    category: 'data' as Category,
    title: 'HydroSense — Prévision des niveaux de nappes phréatiques',
    description: "Outil de suivi et de prévision des niveaux piézométriques en France, conçu pour rendre la donnée hydrologique accessible aux acteurs de la gestion de l'eau.",
    bullets: [
      'Collecte et traitement de données piézométriques (base ADES) : séries temporelles par station',
      'Modélisation prédictive à horizon 90 jours (Machine Learning, Darts, Prophet)',
      'Classification automatique selon les seuils réglementaires (de « normal » à « crise »)',
      'Pipeline de données et API de prédiction conteneurisée, déployées sur Google Cloud',
      'Tableau de bord interactif et cartographique (Streamlit)',
    ],
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Darts', 'Prophet', 'FastAPI', 'Docker', 'Google Cloud', 'Streamlit', 'Git'],
    client: 'Le Wagon Nantes · équipe de 3',
    year: '2026',
    demo: 'https://hydro-sense.streamlit.app',
    github: 'https://github.com/charourou/Projet_Hydrosense',
    image: '/images/project-hydrosense.webp',
    overlay: 'Data Science • IA',
    featured: true,
  },
  {
    id: 'hermes',
    category: 'web' as Category,
    title: 'Refonte E-commerce Hermès',
    description: "Participation à la refonte front-end complète des sites e-commerce de la maison Hermès. Conception et intégration d'interfaces élégantes, optimisées pour l'expérience client haut de gamme.",
    tech: ['Drupal', 'JavaScript', 'Magento', 'Akeneo PIM', 'Agile'],
    client: 'Hermès (via Capgemini)',
    year: '2016-2017',
    image: '/images/project-hermes.webp',
    overlay: 'E-commerce • Luxe',
    featured: true,
  },
  { id: 'jurisoft1', category: 'web' as Category, title: 'Site Web Cabinet d\'Avocats', description: "Conception et développement d'un site vitrine pour un cabinet d'avocats. Design moderne et élégant, animations Three.js subtiles, optimisé pour l'accessibilité.", tech: ['Figma', 'Three.js', 'HTML/CSS/JS', 'SQL'], client: 'Jurisoft Applications', year: '2024', image: '/images/project-jurisoft.webp', overlay: 'Web Design • Justice' },
  { id: 'jurisoft2', category: 'web' as Category, title: 'Plateforme Web Avocat Spécialisé', description: "Site web pour avocat avec système de prise de rendez-vous en ligne. Interface intuitive, back-office personnalisé, animations WebGL pour un rendu premium.", tech: ['UX Design', 'WebGL', 'Python', 'After Effects'], client: 'Jurisoft Applications', year: '2024', image: '/images/project-jurisoft.webp', overlay: 'Web Design • Justice' },
  { id: 'jurisoft3', category: 'web' as Category, title: 'Site Web Étude d\'Avocats', description: "Plateforme web pour étude regroupant plusieurs avocats. Pages individuelles par professionnel, blog juridique intégré, formulaire de contact sécurisé.", tech: ['Figma', 'JavaScript', 'SQL', 'Responsive'], client: 'Jurisoft Applications', year: '2023', image: '/images/project-jurisoft.webp', overlay: 'Web Design • Justice' },
  { id: 'jurisoft4', category: 'web' as Category, title: 'Site Web Commissaire de Justice', description: "Site vitrine pour commissaire de justice. Présentation des services, FAQ interactive, design sobre et professionnel adapté au secteur.", tech: ['UI/UX', 'HTML/CSS', 'Three.js', 'Accessibilité'], client: 'Jurisoft Applications', year: '2024', image: '/images/project-jurisoft.webp', overlay: 'Web Design • Justice' },
  { id: 'jurisoft5', category: 'web' as Category, title: 'Plateforme Office de Commissaire', description: "Site complet pour office regroupant plusieurs commissaires de justice. Espace client sécurisé, suivi de dossiers, design moderne avec animations subtiles.", tech: ['Figma', 'JavaScript', 'SQL', 'Python'], client: 'Jurisoft Applications', year: '2023', image: '/images/project-jurisoft.webp', overlay: 'Web Design • Justice' },
  { id: 'elearning', category: 'design' as Category, title: 'Modules E-learning Médecine', description: "Conception de parcours pédagogiques interactifs pour les formations en médecine et pharmacie. Gamification et design UX pour améliorer l'engagement et la rétention.", tech: ['Storyline', 'Game Design', 'UX Design', 'MOOC', 'Vidéo'], client: 'Nantes Université', year: '2021-2022', image: '/images/project-elearning.webp', overlay: 'E-learning • Santé' },
  { id: 'thalys', category: 'web' as Category, title: 'Refonte Mobile Thalys', description: "Design UI/UX et prototypage front-end pour la refonte mobile du site Thalys. Maquettes interactives centrées sur l'expérience utilisateur mobile-first.", tech: ['UI Design', 'Mobile-First', 'Prototypage', 'HTML/CSS'], client: 'SNCF (via Capgemini)', year: '2016', image: '/images/project-thalys.webp', overlay: 'Mobile • Transport' },
  { id: 'studio', category: 'design' as Category, title: 'Yann Simon Studio - Projets Créatifs', description: "Direction artistique et design pour divers clients indépendants. Identités visuelles, sites web sur-mesure, expositions artistiques et résidences créatives.", tech: ['WordPress', 'Direction Artistique', 'Identité Visuelle', 'Design Print'], client: 'Projets personnels & clients', year: '2018-présent', image: '/images/project-studio.webp', overlay: 'Art • Design' },
  { id: 'drone', category: 'rd' as Category, title: 'Système de Vision pour Drone Autonome', description: "Projet R&D pour la conception d'un système de vision informatique destiné à la navigation autonome d'un drone.", tech: ['Vision Informatique', 'Arduino (C)', "Traitement d'Images", 'Instrumentation', 'Systèmes Embarqués'], client: 'Laboratoire Chi Nan (Taïwan)', year: '2013', image: '/images/project-drone.webp', overlay: 'R&D • Vision Informatique' },
  { id: 'gps', category: 'rd' as Category, title: 'Banc de Tests Récepteurs GPS', description: "Conception complète d'un système de tests pour récepteurs GPS : montage hardware, développement software et design d'interface ergonomique (IHM).", tech: ['LabVIEW', 'C', 'IHM', 'Hardware', 'Tests & Validation'], client: 'Sercel', year: '2014', image: '/images/project-gps.webp', overlay: 'R&D • Industriel' },
  { id: 'thermal', category: 'rd' as Category, title: 'Étude Système Chauffage Photovoltaïque', description: "Étude expérimentale d'un système innovant de chauffage par fluide caloporteur. Mise en place et tests d'un banc de mesure thermique.", tech: ['Métrologie', 'Thermique', 'Capteurs', "Acquisition de Données", 'Tests Mécaniques'], client: 'Fives', year: '2011', image: '/images/project-thermal.webp', overlay: 'R&D • Thermique' },
]

const filters: { key: Category; label: string; icon: string }[] = [
  { key: 'all', label: 'Tous les projets', icon: '🎯' },
  { key: 'data', label: 'Data Science & IA', icon: '📊' },
  { key: 'web', label: 'Développement Web', icon: '💻' },
  { key: 'rd', label: 'R&D & Ingénierie', icon: '🔬' },
  { key: 'design', label: 'Design & Créativité', icon: '🎨' },
]

export default function Projets() {
  const [active, setActive] = useState<Category>('all')
  const visible = projects.filter(p => active === 'all' || p.category === active)

  return (
    <>
      <Nav />

      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1 className="projects-hero-title">Portfolio Complet</h1>
            <p className="projects-hero-description">
              Plus de 15 projets réalisés dans le <strong>développement web</strong>,{' '}
              la <strong>data science & IA</strong>, la <strong>recherche & développement</strong> et le <strong>design</strong>.
            </p>
            <div className="projects-stats">
              <div className="stat-item"><span className="stat-number">15+</span><span className="stat-label">Projets réalisés</span></div>
              <div className="stat-item"><span className="stat-number">10+</span><span className="stat-label">Clients</span></div>
              <div className="stat-item"><span className="stat-number">4</span><span className="stat-label">Domaines d'expertise</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects-page">
        <div className="container">
          <div className="projects-filters">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn${active === f.key ? ' active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                <span className="filter-icon">{f.icon}</span>
                {f.label}
              </button>
            ))}
          </div>

          <div className="projects-grid" id="projects-container">
            {visible.map(p => (
              <article
                key={p.id}
                className={`project-card-horizontal${p.featured ? ' project-featured' : ''}`}
                data-category={p.category}
              >
                {p.featured ? (
                  <>
                    <div className="project-content">
                      <h3 className="project-title">{p.title}</h3>
                      <p className="project-description">{p.description}</p>
                      {p.bullets && (
                        <ul className="timeline-tasks">
                          {p.bullets.map(b => <li key={b}>{b}</li>)}
                        </ul>
                      )}
                      <div className="project-tech">
                        {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                      </div>
                      <div className="project-meta">
                        <span className="project-client">{p.client}</span>
                        <span className="project-year">
                          {p.demo && <><a href={p.demo} target="_blank" rel="noopener noreferrer">Démo</a> · </>}
                          {p.github && <><a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a> · </>}
                          {p.year}
                        </span>
                      </div>
                    </div>
                    <div className="project-image">
                      <div className="project-image-placeholder">
                        <img src={p.image} alt={p.title} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                      </div>
                      <div className="project-overlay"><span className="project-category">{p.overlay}</span></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="project-image">
                      <div className="project-image-placeholder">
                        <img src={p.image} alt={p.title} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                      </div>
                      <div className="project-overlay"><span className="project-category">{p.overlay}</span></div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{p.title}</h3>
                      <p className="project-description">{p.description}</p>
                      <div className="project-tech">
                        {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                      </div>
                      <div className="project-meta">
                        <span className="project-client">{p.client}</span>
                        <span className="project-year">{p.year}</span>
                      </div>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>

          <div className="projects-bottom-cta">
            <h2>Un projet en tête ?</h2>
            <p>Discutons de comment je peux vous aider à le concrétiser</p>
            <Link to="/#contact" className="btn btn-primary btn-large">Me contacter</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
