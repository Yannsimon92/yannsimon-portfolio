import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'hydrosense',
    className: 'project-card project-featured',
    image: '/images/project-hydrosense.webp',
    alt: 'HydroSense — Prévision des nappes phréatiques',
    category: 'Data Science • IA',
    title: 'HydroSense — Prévision des nappes phréatiques',
    description: 'Outil de suivi et de prévision des niveaux piézométriques en France. Séries temporelles par station (base ADES), modélisation prédictive à horizon 90 jours (Darts, Prophet), classification réglementaire automatique. Pipeline de données et API conteneurisée sur Google Cloud, tableau de bord cartographique (Streamlit).',
    tech: ['Python', 'Scikit-Learn', 'Darts', 'Prophet', 'FastAPI', 'Docker', 'Google Cloud', 'Streamlit'],
    client: 'Le Wagon Nantes · équipe de 3',
    year: '2026',
    demo: 'https://hydro-sense.streamlit.app',
    github: 'https://github.com/charourou/Projet_Hydrosense',
  },
  {
    id: 'hermes',
    className: 'project-card project-featured',
    image: '/images/project-hermes.webp',
    alt: 'Refonte E-commerce Hermès',
    category: 'E-commerce • Luxe',
    title: 'Refonte E-commerce Hermès',
    description: "Participation à la refonte front-end complète des sites e-commerce de la maison Hermès. Conception et intégration d'interfaces élégantes, optimisées pour l'expérience client haut de gamme.",
    tech: ['Drupal', 'JavaScript', 'Magento', 'Akeneo PIM', 'Agile'],
    client: 'Hermès (via Capgemini)',
    year: '2016-2017',
  },
  {
    id: 'jurisoft',
    className: 'project-card',
    image: '/images/project-jurisoft.webp',
    alt: 'Sites web pour professionnels du droit',
    category: 'Web Design • Justice',
    title: 'Plateformes Web pour Avocats',
    description: 'Conception et développement de sites web professionnels pour avocats et commissaires de justice. Interface moderne, accessible et performante avec animations WebGL personnalisées.',
    tech: ['Figma', 'Three.js', 'SQL', 'Python', 'After Effects'],
    client: 'Jurisoft Applications',
    year: '2023-2025',
  },
  {
    id: 'elearning',
    className: 'project-card',
    image: '/images/project-elearning.webp',
    alt: 'Modules E-learning médecine',
    category: 'E-learning • Santé',
    title: 'Modules E-learning Médecine',
    description: "Conception de parcours pédagogiques interactifs pour les formations en médecine et pharmacie. Gamification et design UX pour améliorer l'engagement et la rétention d'apprentissage.",
    tech: ['Storyline', 'Game Design', 'UX Design', 'MOOC', 'Vidéo'],
    client: 'Nantes Université',
    year: '2021-2022',
  },
  {
    id: 'thalys',
    className: 'project-card',
    image: '/images/project-thalys.webp',
    alt: 'Refonte mobile Thalys',
    category: 'Mobile • Transport',
    title: 'Refonte Mobile Thalys',
    description: "Design UI/UX et prototypage front-end pour la refonte mobile du site Thalys. Maquettes interactives centrées sur l'expérience utilisateur mobile-first.",
    tech: ['UI Design', 'Mobile-First', 'Prototypage', 'HTML/CSS'],
    client: 'SNCF (via Capgemini)',
    year: '2016',
  },
  {
    id: 'studio',
    className: 'project-card',
    image: '/images/project-studio.webp',
    alt: 'Projets artistiques personnels',
    category: 'Art • Design',
    title: 'Yann Simon Studio - Projets Créatifs',
    description: "Direction artistique et design pour divers clients indépendants. Identités visuelles, sites web sur-mesure, expositions artistiques et résidences créatives internationales.",
    tech: ['WordPress', 'Direction Artistique', 'Identité Visuelle', 'Design Print'],
    client: 'Projets personnels & clients',
    year: '2018-présent',
  },
  {
    id: 'drone',
    className: 'project-card project-rd',
    image: '/images/project-drone.webp',
    alt: 'Système de vision pour drone autonome',
    category: 'R&D • Vision Informatique',
    title: 'Système de Vision pour Drone Autonome',
    description: "Projet R&D pour la conception d'un système de vision informatique destiné à la navigation autonome d'un drone. Instrumentation, programmation embarquée et traitement d'images.",
    tech: ['Vision Informatique', 'Arduino (C)', "Traitement d'Images", 'Instrumentation', 'Systèmes Embarqués'],
    client: 'Laboratoire Chi Nan (Taïwan)',
    year: '2013',
  },
  {
    id: 'gps',
    className: 'project-card project-rd',
    image: '/images/project-gps.webp',
    alt: 'Banc de tests GPS',
    category: 'R&D • Industriel',
    title: 'Banc de Tests Récepteurs GPS',
    description: "Conception complète d'un système de tests pour récepteurs GPS : montage hardware, développement software de contrôle et acquisition de données, design d'interface ergonomique (IHM).",
    tech: ['LabVIEW', 'C', 'IHM', 'Hardware', 'Tests & Validation'],
    client: 'Sercel',
    year: '2014',
  },
  {
    id: 'thermal',
    className: 'project-card project-rd',
    image: '/images/project-thermal.webp',
    alt: 'Système de chauffage photovoltaïque',
    category: 'R&D • Thermique',
    title: 'Étude Système Chauffage Photovoltaïque',
    description: "Étude expérimentale d'un système innovant de chauffage par fluide caloporteur. Mise en place et tests d'un banc de mesure thermique, instrumentation et acquisition de données.",
    tech: ['Métrologie', 'Thermique', 'Capteurs', "Acquisition de Données", 'Tests Mécaniques'],
    client: 'Fives',
    year: '2011',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projets sélectionnés</h2>
        <p className="section-subtitle">Quelques réalisations représentatives de mon expertise technique et créative</p>
        <div className="projects-grid">
          {projects.map(p => (
            <article key={p.id} className={p.className}>
              <div className="project-image">
                <div className="project-image-placeholder">
                  <img src={p.image} alt={p.alt} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                </div>
                <div className="project-overlay">
                  <span className="project-category">{p.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-description">{p.description}</p>
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
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/projets" className="btn btn-primary">Voir tous les projets</Link>
        </div>
      </div>
    </section>
  )
}
