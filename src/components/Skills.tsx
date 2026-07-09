const skills = [
  {
    title: 'Data Science & IA',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    items: [
      'Python (Pandas, NumPy, Scikit-Learn)',
      'Machine Learning · Deep Learning',
      'Séries temporelles (Darts, Prophet)',
      'Analyse statistique · Data viz',
      'SQL · BigQuery',
      'FastAPI · Docker · Google Cloud',
      'Streamlit · Git',
    ],
  },
  {
    title: 'R&D & Ingénierie',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    ),
    items: [
      'Recherche & Développement',
      'Essais & Tests',
      'Métrologie & Mesures Physiques',
      'Instrumentation',
      'Conception de Bancs de Tests',
      'Informatique Industrielle',
      'Analyse de Données (Python)',
      'LabVIEW / Arduino (C)',
    ],
  },
  {
    title: 'Développement Front-end',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    items: [
      'HTML5 / CSS3',
      'JavaScript (ES6+)',
      'Three.js / WebGL',
      'React',
      'Bootstrap / Responsive',
      'jQuery',
      'LESS / SASS',
    ],
  },
  {
    title: 'Développement Back-end',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    items: ['PHP', 'Drupal', 'WordPress', 'MySQL / SQL', 'Python', 'API REST', 'Magento / Akeneo'],
  },
  {
    title: 'Design & Créativité',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    items: [
      'UI/UX Design',
      'Direction Artistique',
      'Figma',
      'After Effects',
      'Design Graphique',
      'Identité Visuelle',
      'Game Design',
    ],
  },
  {
    title: 'Outils & Méthodologies',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    items: [
      'Git / GitHub',
      'Agile / Scrum',
      'Gulp / Grunt',
      'Storyline (E-learning)',
      'Montage Vidéo',
      'Tests & Validation',
      'Documentation Technique',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        <div className="skills-grid">
          {skills.map(({ title, icon, items }) => (
            <div key={title} className="skill-category">
              <div className="skill-icon">{icon}</div>
              <h3>{title}</h3>
              <ul className="skill-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
