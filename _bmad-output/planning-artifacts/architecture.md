---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
lastStep: 8
status: 'complete'
completedAt: '2026-03-22'
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/product-brief-appvise_consulting-2026-03-21.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
  - _bmad-output/planning-artifacts/prd-validation-report.md
workflowType: 'architecture'
project_name: 'appvise_consulting'
user_name: 'Onizuka'
date: '2026-03-22'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
27 FRs réparties en 7 catégories :
- Conversion & Acquisition de leads (FR1-FR5) — embeds Zcal/Tally, quiz Tally, diagnostic email via n8n
- Contenu de conviction (FR6-FR11) — page d'accueil entonnoir, études de cas narratives, frise méthode, badges, garantie, à propos
- Navigation & Structure (FR12-FR15) — menu navigation, pages contact et études de cas individuelles
- SEO & Découvrabilité (FR16-FR19) — meta, sitemap XML, données structurées, Open Graph
- Intégrations & Automatisation (FR20-FR23) — n8n webhooks vers Airtable, notifications, diagnostic quiz email
- Analytics & Suivi (FR24-FR25) — tracking événements de conversion, métriques trafic
- Gestion de contenu (FR26-FR27) — ajout études de cas en markdown, redéploiement < 5 min

**Implications architecturales :** Le site ne contient aucune logique métier côté serveur. Les intégrations (Airtable, n8n) sont gérées par des webhooks déclenchés par les services tiers (Tally, Zcal). L'architecture est purement frontend statique.

**Non-Functional Requirements:**
18 NFRs qui imposent les choix architecturaux :
- Performance (NFR1-7) : LCP < 2.5s, FID < 100ms, CLS < 0.1, TTFB < 800ms, Lighthouse > 90, poids < 500KB, embeds asynchrones
- Accessibilité (NFR8-12) : WCAG AA, contraste 4.5:1, navigation clavier, hiérarchie titres, alt images
- Intégrations (NFR13-16) : cross-browser embeds, fallback service indisponible, webhooks < 30s, Airtable sync < 5 min
- Maintenabilité (NFR17-18) : ajout étude de cas < 15 min, déploiement contenu < 5 min

**Scale & Complexity:**
- Domaine principal : Web frontend statique (SSG)
- Niveau de complexité : Faible
- Composants architecturaux estimés : ~12 composants UI + 3 pages + layout + CMS markdown
- Pas de base de données, pas d'API custom, pas d'authentification

### Technical Constraints & Dependencies

- **Embeds tiers** : Tally (quiz + formulaires) et Zcal (booking) sont des iframes — pas de contrôle sur leur performance ou style interne
- **n8n** : Toute l'automatisation (notifications, Airtable, diagnostic email) est gérée par n8n en dehors du périmètre du site
- **Contenu markdown/MDX** : Les études de cas doivent être des fichiers modifiables par Guillaume sans connaissances dev
- **Déploiement automatique** : Le pipeline build → deploy doit être automatique sur push git (< 5 min)
- **Budget ressource** : Guillaume seul, MVP livrable en un weekend — l'architecture doit privilégier la simplicité maximale

### Cross-Cutting Concerns Identified

- **Performance** : Impacte chaque décision — SSG obligatoire, lazy loading embeds, optimisation images, CSS minimal
- **SEO** : Meta par page, sitemap, données structurées, Open Graph — doit être intégré dans le framework dès le départ
- **Accessibilité WCAG AA** : HTML sémantique, contraste, navigation clavier, aria-labels — concerne tous les composants
- **Responsive mobile-first** : Breakpoints 320/768/1024px, chaque composant doit être conçu mobile d'abord
- **UX direction hybrid dark/light** : L'alternance de fonds dark/light structure visuellement le site et impacte le design system (tokens couleurs, classes sections)

## Starter Template Evaluation

### Primary Technology Domain

Web frontend statique (SSG) — site multi-pages de contenu/conversion avec embeds tiers et contenu MDX.

### Starter Options Considered

| Starter | Type | Verdict |
|---|---|---|
| `create-next-app` (officiel) | Starter minimal Next.js | **Retenu** — léger, adapté au projet, inclut TypeScript + Tailwind v4 |
| `next-forge` (Vercel) | Monorepo SaaS production-grade | Écarté — surdimensionné (auth, DB, paiements, feature flags non nécessaires) |
| Starter custom from scratch | Config manuelle | Écarté — aucun avantage vs create-next-app qui couvre déjà les besoins |

### Selected Starter: create-next-app (Next.js 16)

**Rationale for Selection:**
Le projet est un site statique de contenu/conversion avec embeds tiers. Aucune logique métier serveur, aucune base de données, aucune authentification. `create-next-app` fournit exactement la fondation nécessaire (App Router + Tailwind + TypeScript) sans surcharge. Les dépendances additionnelles (MDX, fonts, icônes) sont ajoutées manuellement — 3 packages, pas 30.

**Initialization Command:**

```bash
pnpm create next-app@latest appvise-consulting --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
```

**Architectural Decisions Provided by Starter:**

**Language & Runtime:**
- TypeScript strict mode
- Next.js 16.x (App Router)
- Node.js runtime

**Styling Solution:**
- Tailwind CSS v4.2 (intégré par défaut)
- PostCSS configuré automatiquement
- Design tokens via CSS variables (approche Tailwind v4)

**Build Tooling:**
- Turbopack (dev server, activé par défaut dans Next.js 16)
- SWC (compilation TypeScript/JSX)
- Génération statique (SSG) via `output: 'export'` ou déploiement Vercel

**Testing Framework:**
- Non inclus — à ajouter si nécessaire (Vitest recommandé)

**Code Organization:**
- `src/` directory (--src-dir)
- App Router (`src/app/`)
- Import alias `@/*` pour imports propres

**Development Experience:**
- Hot reload via Turbopack
- TypeScript checking intégré
- ESLint configuré
- Vercel CLI pour preview deployments

**Dépendances additionnelles à installer (post-init) :**

| Package | Usage |
|---|---|
| `@next/mdx` + `@mdx-js/loader` + `@mdx-js/react` | Rendu MDX pour les études de cas |
| `next/font` (intégré) | Google Fonts (Space Grotesk + Inter) optimisées |
| `lucide-react` | Icônes (badges trust bar, frise méthode, garantie) |
| `gray-matter` | Parsing frontmatter des fichiers MDX études de cas |

**Note:** L'initialisation du projet avec cette commande sera la première story d'implémentation.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Gestion du contenu MDX : @next/mdx natif + gray-matter
- Stratégie de rendu : Vercel standard (SSG + edge)
- SEO : Sitemap natif Next.js + JSON-LD inline

**Important Decisions (Shape Architecture):**
- Analytics : Vercel Analytics + Speed Insights

**Deferred Decisions (Post-MVP):**
- Blog CMS (V2) — réévaluer si MDX suffit ou si un headless CMS est nécessaire
- Tests automatisés — Vitest si les composants se complexifient
- Monitoring/logging avancé — à évaluer après le lancement

### Data Architecture

**Décision : @next/mdx natif + gray-matter (pas de base de données)**

| Aspect | Choix | Rationale |
|---|---|---|
| Stockage contenu | Fichiers MDX locaux (`src/content/case-studies/`) | 3 études de cas, pas besoin de CMS complexe |
| Parsing frontmatter | `gray-matter` | Extraction des métadonnées (titre, secteur, chiffres) |
| Typing | Interface TypeScript manuelle (`CaseStudy`) | 3 fichiers = typing manuel suffit |
| Chargement | `fs` + `gray-matter` dans `generateStaticParams` | Rendu statique au build |
| Validation données | Zod schema optionnel sur le frontmatter | Garantit la cohérence des études de cas |

**Affects :** Pages études de cas, composant CaseStudyCard, page d'accueil (liste des cas)

### Authentication & Security

**Non applicable** — Pas d'authentification, pas d'espace privé, pas de données utilisateur stockées côté site. Les données de leads sont gérées par Tally/Zcal/Airtable/n8n hors périmètre.

**Sécurité minimale :**
- Headers de sécurité via `next.config.ts` (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)
- CSP (Content Security Policy) autorisant les iframes Tally et Zcal
- `rel="noopener noreferrer"` sur tous les liens externes

### API & Communication Patterns

**Non applicable** — Pas d'API custom. Toutes les communications sont gérées par les services tiers :
- Tally → n8n (webhook) → Airtable + email
- Zcal → n8n (webhook) → Airtable + notification
- Le site ne fait qu'afficher des iframes et du contenu statique

### Frontend Architecture

| Aspect | Décision | Rationale |
|---|---|---|
| State management | Aucun (pas de state global) | Site de contenu statique, pas d'interactions complexes |
| Component architecture | Composants React fonctionnels, colocation par feature | ~12 composants simples, pas besoin d'abstraction lourde |
| Routing | App Router Next.js 16 (file-based) | 3 routes : `/`, `/contact`, `/cas-clients/[slug]` |
| Performance | SSG + lazy loading iframes + next/font + next/image | Cibles Core Web Vitals (LCP < 2.5s, CLS < 0.1) |
| Bundle optimization | Turbopack (dev) + SWC (prod), tree-shaking automatique | Tailwind CSS v4 purge < 10KB en production |

### Infrastructure & Deployment

| Aspect | Décision | Rationale |
|---|---|---|
| Hébergement | Vercel (standard, pas d'export statique) | SSG natif + ISR possible en V2 + preview branches |
| CI/CD | Vercel Git Integration (push → build → deploy) | Automatique, < 5 min (NFR18), zéro config |
| Environnements | Production (main) + Preview (branches) | Preview automatique par Vercel sur chaque PR |
| Analytics | Vercel Analytics + Speed Insights | Gratuit, privacy-first, zéro impact perf, events custom |
| SEO | `app/sitemap.ts` natif + `app/robots.ts` + JSON-LD inline | Zéro dépendance supplémentaire |
| Monitoring | Vercel Logs + Speed Insights | Suffisant pour le MVP, monitoring avancé en V2 |

### Decision Impact Analysis

**Implementation Sequence:**
1. Init projet (`create-next-app`) + config Tailwind tokens + fonts
2. Layout (Navbar, Footer, StickyCTA) + design system (Button, Badge)
3. Page d'accueil (sections séquentielles)
4. Contenu MDX (études de cas) + pages dynamiques `[slug]`
5. Page Contact (embeds Zcal + Tally)
6. SEO (sitemap, robots, JSON-LD, meta, Open Graph)
7. Analytics (Vercel Analytics events)
8. Headers sécurité + CSP
9. Tests manuels (responsive, accessibilité, Lighthouse)

**Cross-Component Dependencies:**
- Le design system (tokens couleurs, typographie, spacing) impacte tous les composants — doit être défini en premier
- Les fichiers MDX études de cas alimentent à la fois la page d'accueil (CaseStudyCard) et les pages détaillées (`/cas-clients/[slug]`)
- La CSP doit autoriser les domaines Tally et Zcal pour que les embeds fonctionnent
- Vercel Analytics doit être initialisé dans le layout racine pour capturer tous les events

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:**
6 domaines où les agents IA pourraient faire des choix divergents.

### Naming Patterns

**File & Directory Naming:**

| Type | Convention | Exemple |
|---|---|---|
| Composants React | PascalCase | `HeroSection.tsx`, `CaseStudyCard.tsx` |
| Pages (App Router) | kebab-case (imposé par Next.js) | `cas-clients/[slug]/page.tsx` |
| Fichiers utilitaires | camelCase | `getCaseStudies.ts`, `formatDate.ts` |
| Fichiers de contenu MDX | kebab-case | `addotour-229.mdx`, `sidecare.mdx` |
| Fichiers de config | kebab-case ou convention du tool | `tailwind.config.ts`, `next.config.ts` |
| Dossiers | kebab-case | `case-studies/`, `trust-bar/` |

**Component & Function Naming:**

| Type | Convention | Exemple |
|---|---|---|
| Composants React | PascalCase | `TrustBar`, `GuaranteeBlock` |
| Fonctions | camelCase | `getCaseStudies()`, `formatPhoneNumber()` |
| Variables | camelCase | `caseStudies`, `isMenuOpen` |
| Constantes | UPPER_SNAKE_CASE | `SITE_URL`, `TALLY_QUIZ_URL` |
| Types/Interfaces | PascalCase, préfixe-free | `CaseStudy`, `SiteConfig` (pas `ICaseStudy`) |
| Props types | PascalCase + Props | `HeroSectionProps`, `CaseStudyCardProps` |

**Route Naming:**

| Route | URL | Fichier |
|---|---|---|
| Accueil | `/` | `src/app/page.tsx` |
| Contact | `/contact` | `src/app/contact/page.tsx` |
| Étude de cas | `/cas-clients/[slug]` | `src/app/cas-clients/[slug]/page.tsx` |

Convention : URLs en français kebab-case (le site cible un public francophone).

### Structure Patterns

**Project Organization — Colocation par type :**

```
src/
  app/                          # Routes (App Router)
    page.tsx                    # Page d'accueil
    layout.tsx                  # Layout racine
    contact/page.tsx            # Page contact
    cas-clients/[slug]/page.tsx # Pages études de cas
    sitemap.ts                  # Sitemap dynamique
    robots.ts                   # Robots.txt
  components/
    layout/                     # Composants structurels
      Navbar.tsx
      Footer.tsx
      StickyCTA.tsx
    sections/                   # Sections de la page d'accueil
      HeroSection.tsx
      TrustBar.tsx
      CaseStudyCards.tsx
      HonestySection.tsx
      MethodTimeline.tsx
      GuaranteeBlock.tsx
      CTASection.tsx
      AboutSection.tsx
    ui/                         # Primitifs UI réutilisables
      Button.tsx
      Badge.tsx
      CheckItem.tsx
  content/
    case-studies/               # Fichiers MDX études de cas
      addotour-229.mdx
      sidecare.mdx
      mhd-assur.mdx
  lib/                          # Utilitaires et helpers
    case-studies.ts             # Chargement et parsing des MDX
    metadata.ts                 # Helpers SEO (generateMetadata)
    constants.ts                # URLs, config site, textes réutilisés
  types/                        # Types TypeScript partagés
    case-study.ts               # Interface CaseStudy
    site.ts                     # Types de configuration site
```

**Règles de colocation :**
- Un composant = un fichier (pas de barrel exports `index.ts` sauf nécessité)
- Les styles sont inline (classes Tailwind), pas de fichiers CSS séparés par composant
- Les types partagés vont dans `src/types/`, les types locaux restent dans le fichier du composant

### Format Patterns

**MDX Frontmatter Structure (études de cas) :**

```yaml
---
title: "Addotour 229"
slug: "addotour-229"
sector: "Tourisme"
sectorTag: "tourisme"
problem: "Gestion manuelle des workflows — 12h/semaine perdues"
solution: "Automatisation n8n des workflows récurrents"
statValue: "12h"
statLabel: "économisées par semaine"
excerpt: "Description courte pour la card sur la page d'accueil"
order: 1
---
```

Tous les champs sont obligatoires. L'interface TypeScript `CaseStudy` dans `src/types/case-study.ts` doit correspondre exactement.

**SEO Metadata Pattern :**
Chaque page exporte un `generateMetadata` ou un objet `metadata` statique. Pattern uniforme :

```typescript
export const metadata: Metadata = {
  title: "Titre de la page | Appvise Consulting",
  description: "Description pour les moteurs de recherche",
  openGraph: {
    title: "Titre pour LinkedIn",
    description: "Description pour le partage",
    type: "website",
  },
};
```

### Process Patterns

**Embed Loading (Tally, Zcal) :**
Pattern uniforme pour tous les embeds tiers :
1. Skeleton placeholder (hauteur fixe, animation pulse)
2. Iframe en `loading="lazy"`
3. Détection `onLoad` → masquer le skeleton
4. Timeout 10s → afficher message fallback avec lien email/LinkedIn
5. CSP configurée pour autoriser `tally.so` et `zcal.co`

**Error Handling :**
- Pas de try/catch complexe — le site est statique
- Erreurs de build (MDX malformé) : laissées remonter naturellement
- Embeds indisponibles : fallback UI (voir pattern ci-dessus)
- Image manquante : `next/image` placeholder blur ou fallback gradient
- 404 : page `not-found.tsx` avec CTA retour accueil

**Tailwind CSS Patterns :**
- Ordre des classes : layout → spacing → sizing → typography → colors → effects → responsive
- Pas d'extraction en `@apply` (sauf pour `prose` dans le contenu MDX)
- Responsive : toujours mobile-first (`text-sm md:text-base lg:text-lg`)
- Dark/light sections : classes sur la `<section>` parente (`bg-dark text-white` ou `bg-light text-dark`)
- Design tokens : via CSS variables dans `app/globals.css`, référencés par Tailwind v4

### Enforcement Guidelines

**All AI Agents MUST:**
1. Suivre les conventions de nommage ci-dessus sans exception (PascalCase composants, camelCase fonctions, kebab-case fichiers contenu)
2. Placer les fichiers dans la structure définie — ne jamais créer de nouveaux dossiers sans justification
3. Utiliser les design tokens (CSS variables) pour les couleurs et l'espacement — jamais de valeurs hex hardcodées dans les composants
4. Exporter un `generateMetadata` ou `metadata` pour chaque page
5. Utiliser le pattern skeleton + fallback pour tout embed tiers

**Anti-Patterns à éviter :**
- Ne pas créer de fichiers `styles.css` ou `styles.module.css` — tout est en Tailwind utility classes
- Ne pas utiliser `useEffect` pour du contenu qui peut être statique (SSG)
- Ne pas créer de contextes React ou de stores — pas de state global nécessaire
- Ne pas installer de dépendances non listées dans l'architecture sans validation
- Ne pas utiliser `"use client"` sauf pour les composants qui en ont strictement besoin (StickyCTA, Navbar mobile drawer)

## Project Structure & Boundaries

### Complete Project Directory Structure

```
appvise-consulting/
├── .env.local                    # Variables d'env locales (URLs Tally, Zcal)
├── .env.example                  # Template des variables d'env
├── .gitignore
├── next.config.ts                # Config Next.js (MDX, headers sécurité, CSP)
├── package.json
├── pnpm-lock.yaml
├── postcss.config.ts             # Config PostCSS (Tailwind v4)
├── tsconfig.json                 # TypeScript strict
├── public/
│   ├── fonts/                    # Fallback fonts si nécessaire
│   ├── images/
│   │   ├── guillaume.webp        # Photo Guillaume (About section)
│   │   ├── logo-appvise.svg      # Logo monogramme + texte
│   │   └── og-image.jpg          # Image Open Graph par défaut (1200x630)
│   ├── favicon.ico
│   └── apple-touch-icon.png
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens CSS variables + Tailwind base
│   │   ├── layout.tsx            # Layout racine (fonts, Navbar, Footer, StickyCTA, Analytics)
│   │   ├── page.tsx              # Page d'accueil (assemblage des sections)
│   │   ├── not-found.tsx         # Page 404 custom avec CTA retour accueil
│   │   ├── sitemap.ts            # Génération sitemap XML dynamique
│   │   ├── robots.ts             # Génération robots.txt
│   │   ├── contact/
│   │   │   └── page.tsx          # Page contact (embeds Zcal + Tally)
│   │   └── cas-clients/
│   │       └── [slug]/
│   │           └── page.tsx      # Page étude de cas dynamique (MDX)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Navigation sticky + menu mobile drawer
│   │   │   ├── Footer.tsx        # Pied de page (liens, social, mentions)
│   │   │   └── StickyCTA.tsx     # Barre CTA fixe mobile (intersection observer)
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx   # Hero dark : headline + double CTA
│   │   │   ├── TrustBar.tsx      # Bande badges de crédibilité
│   │   │   ├── CaseStudyCards.tsx # Grille des 3 études de cas (cards)
│   │   │   ├── HonestySection.tsx # "Ce que je ne ferai pas" (désarme méfiance)
│   │   │   ├── MethodTimeline.tsx # Frise "Ma méthode" 4 étapes
│   │   │   ├── GuaranteeBlock.tsx # Bloc garantie paiement à la satisfaction
│   │   │   ├── CTASection.tsx    # Section CTA fond primary
│   │   │   └── AboutSection.tsx  # Photo Guillaume + bio + lien YouTube
│   │   ├── ui/
│   │   │   ├── Button.tsx        # Bouton (primary, secondary, ghost, inversé)
│   │   │   ├── Badge.tsx         # Badge trust bar (icône + texte)
│   │   │   ├── CheckItem.tsx     # Item checklist (check vert + texte)
│   │   │   └── EmbedWrapper.tsx  # Wrapper iframe (skeleton + fallback + lazy)
│   │   └── seo/
│   │       └── JsonLd.tsx        # Composant JSON-LD (Organization, LocalBusiness)
│   ├── content/
│   │   └── case-studies/
│   │       ├── addotour-229.mdx  # Étude de cas Addotour 229
│   │       ├── sidecare.mdx      # Étude de cas SideCare
│   │       └── mhd-assur.mdx    # Étude de cas MH'D ASSUR & CONSEIL
│   ├── lib/
│   │   ├── case-studies.ts       # getCaseStudies(), getCaseStudyBySlug()
│   │   ├── metadata.ts           # Helpers generateMetadata par page
│   │   └── constants.ts          # SITE_URL, TALLY_QUIZ_URL, ZCAL_URL, etc.
│   └── types/
│       └── case-study.ts         # Interface CaseStudy + frontmatter schema
```

### Architectural Boundaries

**Component Boundaries:**

| Boundary | Règle |
|---|---|
| Server Components (défaut) | Toutes les pages et sections de la page d'accueil — rendu statique SSG |
| Client Components (`"use client"`) | Uniquement : `Navbar.tsx` (drawer mobile), `StickyCTA.tsx` (intersection observer), `EmbedWrapper.tsx` (onLoad iframe) |
| Pas de boundary API | Aucune API route — le site est 100% statique |

**Data Boundaries:**

| Source | Accès | Consommateur |
|---|---|---|
| Fichiers MDX (`src/content/`) | `fs` + `gray-matter` au build time | `page.tsx` (accueil), `[slug]/page.tsx` (détail) |
| Variables d'env (`.env.local`) | `process.env` côté serveur uniquement | `constants.ts`, `EmbedWrapper.tsx`, `sitemap.ts` |
| Services tiers (Tally, Zcal) | Iframes côté client | `EmbedWrapper.tsx` → `ContactPage`, `HeroSection` (lien quiz) |

**External Integration Points:**

| Service | Type d'intégration | Point d'entrée |
|---|---|---|
| Tally (formulaire contact) | Iframe embed sur `/contact` | `EmbedWrapper.tsx` |
| Tally (quiz) | Lien externe `target="_blank"` | CTA secondaire (HeroSection, StickyCTA, CTASection) |
| Zcal (booking) | Iframe embed sur `/contact` | `EmbedWrapper.tsx` |
| Vercel Analytics | SDK intégré dans `layout.tsx` | `<Analytics />` composant Vercel |
| Vercel Speed Insights | SDK intégré dans `layout.tsx` | `<SpeedInsights />` composant Vercel |
| Google Fonts | `next/font/google` dans `layout.tsx` | Space Grotesk + Inter |

### Requirements to Structure Mapping

**FR Categories → Fichiers :**

| Catégorie FR | Fichiers principaux |
|---|---|
| Conversion (FR1-FR5) | `contact/page.tsx`, `EmbedWrapper.tsx`, `CTASection.tsx`, `StickyCTA.tsx` |
| Contenu conviction (FR6-FR11) | `page.tsx`, `HeroSection.tsx`, `CaseStudyCards.tsx`, `MethodTimeline.tsx`, `GuaranteeBlock.tsx`, `AboutSection.tsx` |
| Navigation (FR12-FR15) | `Navbar.tsx`, `Footer.tsx`, `layout.tsx` |
| SEO (FR16-FR19) | `metadata.ts`, `sitemap.ts`, `robots.ts`, `JsonLd.tsx`, `layout.tsx` (Open Graph) |
| Intégrations (FR20-FR23) | Hors périmètre site (n8n/Airtable) — le site fournit uniquement les embeds |
| Analytics (FR24-FR25) | `layout.tsx` (Vercel Analytics + Speed Insights) |
| Gestion contenu (FR26-FR27) | `content/case-studies/*.mdx`, `lib/case-studies.ts` |

**Cross-Cutting Concerns → Fichiers :**

| Concern | Fichiers |
|---|---|
| Design tokens (couleurs, typo, spacing) | `globals.css` |
| SEO metadata | `metadata.ts` + `generateMetadata` dans chaque `page.tsx` |
| Responsive mobile-first | Classes Tailwind dans chaque composant |
| Accessibilité | Aria-labels dans chaque composant, structure sémantique dans `layout.tsx` |
| Headers sécurité + CSP | `next.config.ts` |

### Data Flow

```
[Build Time]
  src/content/case-studies/*.mdx
    → fs.readdir + gray-matter (lib/case-studies.ts)
    → generateStaticParams (cas-clients/[slug]/page.tsx)
    → Pages HTML statiques

[Runtime Client]
  Visiteur scroll page d'accueil
    → Sections rendues statiquement (Server Components)
    → StickyCTA apparaît (Client Component, intersection observer)
    → Clic CTA → /contact ou lien Tally externe

  Page /contact
    → EmbedWrapper charge iframe Zcal (lazy)
    → EmbedWrapper charge iframe Tally (lazy)
    → Soumission → Tally/Zcal gèrent → n8n webhook → Airtable

[Vercel]
  git push → Vercel build (< 5 min) → Deploy CDN global
  Analytics + Speed Insights collectent les métriques
```

### Development Workflow

| Action | Commande | Résultat |
|---|---|---|
| Dev local | `pnpm dev` | Turbopack, hot reload, localhost:3000 |
| Build production | `pnpm build` | SSG, optimisation, vérification types |
| Deploy | `git push origin main` | Vercel auto-deploy < 5 min |
| Preview branch | `git push origin feature/xxx` | Vercel preview URL automatique |
| Ajout étude de cas | Créer `src/content/case-studies/nom.mdx` + push | Rebuild automatique |

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
Toutes les technologies sont compatibles et forment un stack natif cohérent : Next.js 16 + Tailwind CSS v4.2 + TypeScript + Vercel. Aucun conflit de version ou d'incompatibilité détecté. Les packages additionnels (@next/mdx, gray-matter, lucide-react) sont tous compatibles avec l'écosystème.

**Pattern Consistency:**
Les conventions de nommage (PascalCase composants, camelCase fonctions, kebab-case fichiers contenu) sont standards dans l'écosystème React/Next.js. Les patterns Tailwind mobile-first et le découpage Server/Client Components sont cohérents avec l'approche SSG.

**Structure Alignment:**
La structure de fichiers respecte les conventions App Router Next.js. Les boundaries Server/Client sont clairement définies (3 Client Components uniquement). Le data flow MDX → build → pages statiques est linéaire et sans ambiguïté.

### Requirements Coverage Validation ✅

**Functional Requirements Coverage:** 27/27 FRs couvertes
- Conversion (FR1-FR5) : embeds Tally/Zcal via EmbedWrapper
- Contenu (FR6-FR11) : 7 composants de sections dédiés
- Navigation (FR12-FR15) : Navbar, Footer, App Router
- SEO (FR16-FR19) : sitemap.ts, robots.ts, JsonLd.tsx, metadata helpers
- Intégrations (FR20-FR23) : hors périmètre site (n8n), embeds fournis
- Analytics (FR24-FR25) : Vercel Analytics + Speed Insights
- Contenu (FR26-FR27) : MDX + Vercel auto-deploy

**Non-Functional Requirements Coverage:** 18/18 NFRs couvertes
- Performance (NFR1-7) : SSG + Tailwind purge + lazy loading + next/image + next/font
- Accessibilité (NFR8-12) : HTML sémantique, patterns aria documentés, contraste validé
- Intégrations (NFR13-16) : fallback pattern, cross-browser embeds
- Maintenabilité (NFR17-18) : MDX files + Vercel deploy < 5 min

### Implementation Readiness Validation ✅

**Decision Completeness:** Toutes les décisions critiques et importantes sont documentées avec versions vérifiées. Les décisions différées (tests, monitoring avancé, blog CMS) sont explicitement listées avec leur horizon.

**Structure Completeness:** Arbre de fichiers complet avec 100% des fichiers et répertoires listés. Chaque fichier a un commentaire décrivant son rôle.

**Pattern Completeness:** Conventions de nommage, structure de fichiers, format MDX frontmatter, patterns SEO metadata, patterns embed (skeleton + fallback), patterns Tailwind CSS, et gestion d'erreurs sont tous documentés avec exemples.

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Contexte projet analysé en profondeur
- [x] Complexité évaluée (faible)
- [x] Contraintes techniques identifiées (embeds, n8n, MDX, budget weekend)
- [x] Préoccupations transversales cartographiées (perf, SEO, a11y, responsive)

**✅ Architectural Decisions**
- [x] Décisions critiques documentées avec versions (Next.js 16, Tailwind v4.2, TypeScript)
- [x] Stack technologique entièrement spécifié
- [x] Patterns d'intégration définis (embeds, liens externes, webhooks hors périmètre)
- [x] Considérations de performance adressées (SSG, lazy loading, Core Web Vitals)

**✅ Implementation Patterns**
- [x] Conventions de nommage établies (fichiers, composants, fonctions, routes)
- [x] Patterns de structure définis (colocation par type, un composant = un fichier)
- [x] Patterns de format spécifiés (MDX frontmatter, SEO metadata)
- [x] Patterns de process documentés (embeds, erreurs, Tailwind CSS)

**✅ Project Structure**
- [x] Structure de répertoires complète définie
- [x] Boundaries composants établies (Server vs Client)
- [x] Points d'intégration cartographiés (Tally, Zcal, Vercel Analytics)
- [x] Mapping exigences → structure complet

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High — L'architecture est simple, les décisions sont peu nombreuses et cohérentes, le stack est mature et bien documenté.

**Key Strengths:**
- Simplicité maximale — aucune sur-architecture pour un site statique
- Stack natif et intégré — Next.js + Tailwind + Vercel = zéro friction
- Boundaries claires — 3 Client Components, tout le reste est statique
- Couverture complète — 27 FRs et 18 NFRs toutes adressées

**Areas for Future Enhancement:**
- Tests automatisés (Vitest + Playwright) si le projet se complexifie en V2
- Monitoring avancé (Sentry ou similaire) si le trafic croît significativement
- Blog CMS headless si le volume de contenu dépasse les capacités du MDX
- Stratégie de cache CDN fine-tuning si les Core Web Vitals nécessitent des ajustements

### Implementation Handoff

**AI Agent Guidelines:**
- Suivre toutes les décisions architecturales exactement comme documentées
- Utiliser les patterns d'implémentation de manière cohérente sur tous les composants
- Respecter la structure projet et les boundaries (notamment Server vs Client Components)
- Se référer à ce document pour toute question architecturale

**First Implementation Priority:**
```bash
pnpm create next-app@latest appvise-consulting --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
```
Puis : installer les dépendances additionnelles, configurer les design tokens dans `globals.css`, et implémenter le layout racine.
