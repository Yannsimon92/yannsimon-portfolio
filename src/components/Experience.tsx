export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Parcours professionnel</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Avr. 2026 - Juin 2026 (3 mois)</div>
              <h3 className="timeline-title">Formation Data Science & IA</h3>
              <h4 className="timeline-company">Le Wagon · Nantes</h4>
              <p className="timeline-description">
                Titre RNCP niveau 6 « Concepteur développeur en intelligence artificielle et analyse
                big data ». Projet final : HydroSense — prévision des niveaux de nappes phréatiques
                (ML, déploiement cloud, Streamlit).
              </p>
              <ul className="timeline-tasks">
                <li>Machine Learning & Deep Learning (Scikit-Learn, TensorFlow)</li>
                <li>Séries temporelles (Darts, Prophet)</li>
                <li>
                  Déploiement et mise en production de modèles (FastAPI, Docker, Google Cloud)
                </li>
                <li>Python avancé : Pandas, NumPy, visualisation de données</li>
              </ul>
              <div className="timeline-tags">
                {['Python', 'Machine Learning', 'Deep Learning', 'Google Cloud', 'Docker'].map(
                  (t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Juil. 2025 - Présent</div>
              <h3 className="timeline-title">Consultant Indépendant</h3>
              <h4 className="timeline-company">Yann Simon Studio</h4>
              <p className="timeline-description">
                Conseil et développement web pour clients indépendants. Conception UI/UX,
                intégration technique et direction de projet.
              </p>
              <div className="timeline-tags">
                {['Conseil', 'UI/UX Design', 'Développement Web', 'Freelance'].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Mai 2018 - Sept. 2021 (3 ans 4 mois)</div>
              <h3 className="timeline-title">Designer Créatif & Artiste Visuel Indépendant</h3>
              <h4 className="timeline-company">Yann Simon Studio</h4>
              <p className="timeline-description">
                Activité indépendante mêlant développement de sites web sur-mesure, design
                graphique, direction artistique et pratique artistique personnelle (expositions et
                tatouages).
              </p>
              <ul className="timeline-tasks">
                <li>Conception UI/UX pour interfaces digitales et supports print</li>
                <li>Développement et intégration de solutions web complètes (WordPress)</li>
                <li>Création d'identités visuelles et supports de communication</li>
                <li>
                  Résidences créatives à l'international (Taïwan, Allemagne, Suisse, Portugal)
                </li>
              </ul>
              <div className="timeline-tags">
                {['UI/UX Design', 'WordPress', 'Direction Artistique', 'Freelance'].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Mars 2023 - Mai 2025 (2 ans 3 mois)</div>
              <h3 className="timeline-title">Ingénieur R&D | Développeur Web & Designer UX/UI</h3>
              <h4 className="timeline-company">Jurisoft Applications · Nantes</h4>
              <p className="timeline-description">
                Conception et développement de sites web pour avocats et commissaires de justice,
                mêlant design, intégration technique et animations interactives.
              </p>
              <ul className="timeline-tasks">
                <li>UI/UX design avec Figma et After Effects, focalisé sur accessibilité</li>
                <li>Développement front-end : HTML, CSS, JavaScript, optimisation performance</li>
                <li>Intégration back-end et gestion bases de données SQL</li>
                <li>Analyse et traitement de données via Python</li>
                <li>Animations interactives en WebGL (Three.js)</li>
              </ul>
              <div className="timeline-tags">
                {['Figma', 'JavaScript', 'Three.js', 'SQL', 'Python'].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Sept. 2021 - Oct. 2022 (1 an 2 mois)</div>
              <h3 className="timeline-title">Designer / Concepteur Pédagogique E-Learning</h3>
              <h4 className="timeline-company">Nantes Université · Nantes</h4>
              <p className="timeline-description">
                Transformation numérique des formations en médecine et pharmacie, conception de
                parcours d'apprentissage innovants et interactifs.
              </p>
              <ul className="timeline-tasks">
                <li>Conception de modules e-learning (Storyline, MOOC)</li>
                <li>UX/UI design centré utilisateur, création multimédia</li>
                <li>Élaboration de mécaniques de game design</li>
                <li>Collaboration avec équipes pédagogiques</li>
              </ul>
              <div className="timeline-tags">
                {['E-learning', 'Storyline', 'Game Design', 'MOOC'].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item featured">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Sept. 2016 - Nov. 2017 (1 an 3 mois)</div>
              <h3 className="timeline-title">Développeur Frontend - Hermès</h3>
              <h4 className="timeline-company">Capgemini · Nantes</h4>
              <p className="timeline-description">
                Refonte front-end des sites e-commerce Hermès, développement technique et design
                centré utilisateur.
              </p>
              <ul className="timeline-tasks">
                <li>Conception, validation et intégration des maquettes UI</li>
                <li>Développement HTML, CSS, JavaScript dans environnement Drupal (Acquia), PHP</li>
                <li>Gestion des flux produits via Magento (OMS) et PIM Akeneo</li>
                <li>Méthodologie agile avec gestion de versions Git</li>
              </ul>
              <div className="timeline-tags">
                <span className="tag tag-featured">Hermès</span>
                {['Drupal', 'Magento', 'Agile'].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Mai 2016 (1 mois)</div>
              <h3 className="timeline-title">UI Designer - SNCF</h3>
              <h4 className="timeline-company">Capgemini · Nantes</h4>
              <p className="timeline-description">
                Design UI/UX et prototypage front-end pour la refonte mobile du site Thalys.
              </p>
              <ul className="timeline-tasks">
                <li>Création de maquettes interactives HTML/CSS centrées utilisateur</li>
              </ul>
              <div className="timeline-tags">
                <span className="tag tag-featured">SNCF Thalys</span>
                <span className="tag">Mobile Design</span>
              </div>
            </div>
          </div>

          <div className="timeline-item timeline-item-compact">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">2015 - 2016</div>
              <h3 className="timeline-title">Développeur Web - Capgemini</h3>
              <div className="timeline-compact-list">
                {[
                  { client: 'Humanis', desc: 'Intégrateur Web (8 mois) - Drupal, Bootstrap' },
                  {
                    client: 'CCI Paris',
                    desc: 'Développeur Front-end (6 mois) - Drupal, Material Design',
                  },
                  { client: 'Sodexo', desc: 'Développeur Front-end (1 mois) - Jahia, Bootstrap' },
                  { client: 'Angers Métropole', desc: 'Développeur Web (2 mois) - Drupal' },
                  {
                    client: 'République Française',
                    desc: 'Développeur Web (2 mois) - PHP/Drupal, MySQL',
                  },
                ].map(({ client, desc }) => (
                  <div key={client} className="compact-item">
                    <strong>{client}</strong> - {desc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item timeline-item-compact">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Fév. 2014 - Juil. 2014 (6 mois)</div>
              <h3 className="timeline-title">Ingénieur Informatique Industrielle</h3>
              <h4 className="timeline-company">Sercel</h4>
              <p className="timeline-description">
                Conception et développement d'un banc de tests pour récepteurs GPS (hardware,
                software, IHM).
              </p>
              <ul className="timeline-tasks">
                <li>Analyse et spécification des besoins techniques</li>
                <li>Montage et configuration du banc de test matériel</li>
                <li>
                  Développement des logiciels de contrôle et d'acquisition en Langage C et LabVIEW
                </li>
                <li>Réalisation des tests fonctionnels et validation des performances</li>
                <li>
                  Conception et design ergonomique de l'interface homme-machine (IHM) sous LabVIEW
                </li>
                <li>Formation des utilisateurs finaux et support technique</li>
              </ul>
              <div className="timeline-tags">
                {['LabVIEW', 'C', 'IHM'].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item timeline-item-compact">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Juin 2013 - Août 2013 (3 mois)</div>
              <h3 className="timeline-title">Assistant Ingénieur R&D</h3>
              <h4 className="timeline-company">Laboratoire Chi Nan · Taïwan</h4>
              <p className="timeline-description">
                Projet R&D innovant : conception d'un système de vision informatique pour la
                navigation autonome d'un drone.
              </p>
              <ul className="timeline-tasks">
                <li>Conception et développement du système de vision embarqué</li>
                <li>Programmation en langage C sur microcontrôleur Arduino</li>
                <li>
                  Analyse et traitement numérique des images pour la reconnaissance et la navigation
                </li>
              </ul>
              <div className="timeline-tags">
                {['Vision Informatique', 'Arduino (C)', 'R&D'].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item timeline-item-compact">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-date">Juin 2011 - Août 2011 (3 mois)</div>
              <h3 className="timeline-title">Technicien Recherche & Développement</h3>
              <h4 className="timeline-company">Fives · Nantes</h4>
              <p className="timeline-description">
                Étude expérimentale d'un système de chauffage photovoltaïque. Mise en place et tests
                d'un banc de mesure thermique.
              </p>
              <div className="timeline-tags">
                {['Métrologie', 'Thermique', 'Tests Mécaniques'].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
