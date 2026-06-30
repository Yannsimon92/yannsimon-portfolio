# yannsimon.com — Portfolio

Portfolio personnel de Yann Simon — Ingénieur Grenoble INP, Data Science & IA, Développement Web, Design.

## Stack

- **React 18** + **TypeScript** — composants et pages
- **Vite 6** — bundler et serveur de développement
- **React Router v6** — routing client-side (`/` et `/projets`)
- **Three.js** — animation WebGL du hero (particules + formes géométriques)
- **CSS custom** — design system existant (variables, composants, pages)
- **Vercel** — déploiement continu depuis la branche `main`

## Structure

```
src/
  App.tsx                   — Router (BrowserRouter)
  main.tsx                  — Point d'entrée, import CSS
  hooks/
    useHeroAnimation.ts     — Animation Three.js (cleanup au démontage)
  components/
    Nav.tsx                 — Navigation + menu mobile + scroll effect
    Hero.tsx                — Section hero avec canvas WebGL
    About.tsx               — Section à propos
    Skills.tsx              — Grille de compétences
    Experience.tsx          — Timeline parcours professionnel
    Projects.tsx            — Projets sélectionnés (page d'accueil)
    Contact.tsx             — Section contact (email obfusqué)
    Footer.tsx              — Pied de page
  pages/
    Home.tsx                — Page d'accueil (assemble les composants)
    Projets.tsx             — Page portfolio complet avec filtres
public/
  images/                   — Visuels des projets (.webp)
  favicon/                  — Icônes du site
  logo-yann-simon.svg
```

## Développement local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Build de production (tsc + vite build)
npm run preview    # Prévisualisation du build
```

## Déploiement

Push sur `main` → déploiement automatique sur Vercel.
Le domaine `yannsimon.com` est géré sur OVH (DNS pointant vers Vercel).

## Sécurité

- Aucune clé API ni secret dans le code source
- Email obfusqué côté client pour éviter le scraping (`Contact.tsx`)
- Headers HTTP configurés dans `vercel.json` :
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- Aucun `dangerouslySetInnerHTML` ni `eval()` dans le code React
- `node_modules/` et `dist/` exclus du dépôt via `.gitignore`
