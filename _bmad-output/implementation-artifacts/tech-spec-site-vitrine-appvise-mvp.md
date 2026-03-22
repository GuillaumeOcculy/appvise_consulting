---
title: 'Site vitrine Appvise Consulting — MVP complet'
slug: 'site-vitrine-appvise-mvp'
created: '2026-03-22'
status: 'ready-for-dev'
stepsCompleted: [1, 2, 3, 4]
tech_stack:
  - Next.js 16 (App Router, SSG)
  - TypeScript strict
  - Tailwind CSS v4.2
  - pnpm
  - Vercel (hosting + analytics)
  - MDX (@next/mdx + gray-matter)
  - lucide-react (icônes)
files_to_modify:
  - src/app/globals.css
  - src/app/layout.tsx
  - src/app/page.tsx
  - src/app/not-found.tsx
  - src/app/sitemap.ts
  - src/app/robots.ts
  - src/app/contact/page.tsx
  - src/app/cas-clients/[slug]/page.tsx
  - src/components/layout/Navbar.tsx
  - src/components/layout/Footer.tsx
  - src/components/layout/StickyCTA.tsx
  - src/components/sections/HeroSection.tsx
  - src/components/sections/TrustBar.tsx
  - src/components/sections/CaseStudyCards.tsx
  - src/components/sections/HonestySection.tsx
  - src/components/sections/MethodTimeline.tsx
  - src/components/sections/GuaranteeBlock.tsx
  - src/components/sections/CTASection.tsx
  - src/components/sections/AboutSection.tsx
  - src/components/ui/Button.tsx
  - src/components/ui/Badge.tsx
  - src/components/ui/CheckItem.tsx
  - src/components/ui/EmbedWrapper.tsx
  - src/components/seo/JsonLd.tsx
  - src/content/case-studies/addotour-229.mdx
  - src/content/case-studies/sidecare.mdx
  - src/content/case-studies/mhd-assur.mdx
  - src/lib/case-studies.ts
  - src/lib/metadata.ts
  - src/lib/constants.ts
  - src/types/case-study.ts
  - next.config.ts
  - .env.local
  - .env.example
code_patterns:
  - PascalCase composants React
  - camelCase fonctions et variables
  - kebab-case fichiers contenu MDX et dossiers
  - Mobile-first Tailwind (défaut → md: → lg:)
  - Server Components par défaut, "use client" uniquement pour Navbar, StickyCTA, EmbedWrapper
test_patterns: []
---

# Tech-Spec: Site vitrine Appvise Consulting — MVP complet

**Created:** 2026-03-22

## Overview

### Problem Statement

Guillaume Occuly (Appvise Consulting) n'a aucune présence web au-delà de LinkedIn. Il a besoin d'un site vitrine/conversion qui transforme les visiteurs (majoritairement mobiles depuis LinkedIn) en demandes d'audit gratuit de 30 minutes. Le mécanisme de conversion repose sur l'identification : le visiteur se reconnaît dans un cas client concret et comprend que son problème a déjà été résolu.

### Solution

Site statique Next.js 16 + Tailwind CSS v4 + Vercel structuré en entonnoir de conviction (Pain point → Preuves chiffrées → Garantie paiement à la satisfaction). Le site comprend une page d'accueil one-page avec 9 sections séquentielles, 3 études de cas MDX, une page contact avec embeds Zcal (booking) et Tally (formulaire), un quiz de qualification Tally (lien externe), et les fondations SEO/analytics.

### Scope

**In Scope:**
- Initialisation projet Next.js 16 + config Tailwind tokens + fonts (Space Grotesk + Inter)
- Layout racine (Navbar sticky, Footer, StickyCTA mobile)
- Page d'accueil 9 sections : Hero → TrustBar → CaseStudyCards → HonestySection → MethodTimeline → GuaranteeBlock → CTASection → QuizCTA → AboutSection
- 3 études de cas MDX (Addotour 229, SideCare, MH'D ASSUR & CONSEIL)
- Pages études de cas dynamiques `/cas-clients/[slug]`
- Page Contact `/contact` (embed Zcal + embed Tally https://tally.so/r/7RXkg6)
- Composants UI primitifs (Button, Badge, CheckItem, EmbedWrapper)
- SEO (sitemap.ts, robots.ts, JsonLd.tsx, generateMetadata par page, Open Graph)
- Analytics (Vercel Analytics + Speed Insights)
- Headers sécurité + CSP (next.config.ts)
- Responsive mobile-first (320px → 768px → 1024px)
- Accessibilité WCAG AA
- Page 404 custom

**Out of Scope:**
- Blog / pages secteur SEO (V2)
- Lead magnet téléchargeable (V2)
- Scoring automatique du quiz (V2)
- Vidéos YouTube intégrées aux cas clients (V2)
- Page "À propos" dédiée (V2 — section intégrée à l'accueil suffit)
- Tests automatisés (Vitest/Playwright — V2 si complexité croît)
- Multi-langue (V3+)

## Context for Development

### Codebase Patterns

**Projet greenfield** — aucun code existant. Les patterns sont définis par l'architecture :

- **Server Components par défaut** — seuls Navbar (drawer mobile), StickyCTA (intersection observer) et EmbedWrapper (onLoad iframe) sont des Client Components (`"use client"`)
- **Tailwind utility-first** — pas de fichiers CSS séparés, pas de `@apply` (sauf `prose` pour MDX)
- **Design tokens via CSS variables** dans `globals.css`, référencés par Tailwind v4
- **Colocation par type** — `components/layout/`, `components/sections/`, `components/ui/`, `components/seo/`
- **Un composant = un fichier** — pas de barrel exports `index.ts`
- **MDX pour le contenu** — fichiers dans `src/content/case-studies/`, parsés avec `gray-matter` au build time
- **Import alias** `@/*` → `src/*`

### Files to Reference

| File | Purpose |
| ---- | ------- |
| `_bmad-output/planning-artifacts/prd.md` | 27 FRs, 18 NFRs, parcours utilisateurs, scoping |
| `_bmad-output/planning-artifacts/architecture.md` | Stack technique, structure fichiers, patterns, boundaries |
| `_bmad-output/planning-artifacts/ux-design-specification.md` | Design system, couleurs, typo, composants, responsive, accessibilité |
| `_bmad-output/planning-artifacts/product-brief-appvise_consulting-2026-03-21.md` | Vision, personas, métriques de succès, MVP scope |

### Technical Decisions

**Stack :**
- Next.js 16.x (App Router) — `pnpm create next-app@latest`
- TypeScript strict mode
- Tailwind CSS v4.2 (intégré par défaut)
- Turbopack (dev), SWC (prod)
- Vercel standard (SSG + edge) — pas d'`output: 'export'`

**Dépendances additionnelles :**
- `@next/mdx` + `@mdx-js/loader` + `@mdx-js/react` — rendu MDX études de cas
- `gray-matter` — parsing frontmatter MDX
- `lucide-react` — icônes (badges, frise, garantie)
- `@vercel/analytics` + `@vercel/speed-insights` — analytics

**Palette couleurs :**
| Token | Hex | Usage |
|---|---|---|
| `primary` | #bf0050 | CTA, accents, liens |
| `secondary` | #0022ed | Sous-titres, hover |
| `dark` | #020F1E | Fonds dark, texte sur light |
| `light` | #F8F9FA | Fonds light |
| `surface` | #FFFFFF | Cards, blocs contenu |
| `guarantee` | #0A1628 | Bloc garantie |
| `text-muted` | #6B7280 | Texte secondaire |
| `success` | #10B981 | Chiffres positifs cas clients |
| `border` | #E5E7EB | Bordures subtiles |

**Typographie :**
- Titres : Space Grotesk 700 (via `next/font/google`)
- Corps : Inter 400/500/600 (via `next/font/google`)
- H1 : 32px mobile → 56px desktop
- H2 : 24px mobile → 36px desktop
- Body : 16px mobile → 18px desktop

**URLs externes :**
- Quiz Tally : `https://tally.so/r/7RXkg6` (ouverture `target="_blank"`)
- Formulaire contact Tally : URL à configurer via `.env.local`
- Zcal booking : URL à configurer via `.env.local`

## Implementation Plan

### Tasks

#### Phase 1 : Initialisation & Design System

- [ ] **Task 1.1 — Init projet Next.js**
  - File: `appvise-consulting/` (racine nouveau projet)
  - Action: `pnpm create next-app@latest appvise-consulting --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm`
  - Action: `pnpm add @next/mdx @mdx-js/loader @mdx-js/react gray-matter lucide-react @vercel/analytics @vercel/speed-insights`
  - Action: Créer `.env.local` et `.env.example` :
    ```
    NEXT_PUBLIC_SITE_URL=https://appvise-consulting.fr
    NEXT_PUBLIC_TALLY_QUIZ_URL=https://tally.so/r/7RXkg6
    NEXT_PUBLIC_TALLY_CONTACT_FORM_ID=7RXkg6
    NEXT_PUBLIC_ZCAL_URL=<à configurer>
    CONTACT_EMAIL=<à configurer>
    ```
  - Notes: Le quiz et le formulaire de contact utilisent le même Tally `https://tally.so/r/7RXkg6`

- [ ] **Task 1.2 — Design tokens & globals.css**
  - File: `src/app/globals.css`
  - Action: Définir les CSS custom properties :
    ```css
    :root {
      --color-primary: #bf0050;
      --color-secondary: #0022ed;
      --color-dark: #020F1E;
      --color-light: #F8F9FA;
      --color-surface: #FFFFFF;
      --color-guarantee: #0A1628;
      --color-text-muted: #6B7280;
      --color-success: #10B981;
      --color-border: #E5E7EB;
    }
    ```
  - Action: Configurer Tailwind v4 pour utiliser ces tokens via `@theme`
  - Action: Ajouter `scroll-behavior: smooth` sur `html`, `scroll-padding-top: 60px`

- [ ] **Task 1.3 — Configuration Next.js**
  - File: `next.config.ts`
  - Action: Configurer le plugin MDX (`@next/mdx` avec `@mdx-js/loader`)
  - Action: Ajouter les headers de sécurité :
    - `X-Frame-Options: DENY`
    - `X-Content-Type-Options: nosniff`
    - `Referrer-Policy: strict-origin-when-cross-origin`
  - Action: Configurer la CSP pour autoriser les iframes `tally.so` et `zcal.co` :
    - `frame-src 'self' https://tally.so https://zcal.co`
  - Notes: Tailwind v4 n'a plus de `tailwind.config.ts` — config via CSS `@theme`

- [ ] **Task 1.4 — Fonts**
  - File: `src/app/layout.tsx`
  - Action: Importer Space Grotesk (700) et Inter (400, 500, 600) via `next/font/google`
  - Action: Appliquer Inter comme font par défaut sur `<html>`, Space Grotesk via classe CSS utilitaire `font-heading`
  - Notes: Déclarer `--font-heading` et `--font-body` comme CSS variables dans globals.css

- [ ] **Task 1.5 — Constantes & Types**
  - File: `src/lib/constants.ts`
  - Action: Exporter les constantes depuis `process.env` :
    ```typescript
    export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://appvise-consulting.fr'
    export const TALLY_QUIZ_URL = process.env.NEXT_PUBLIC_TALLY_QUIZ_URL ?? 'https://tally.so/r/7RXkg6'
    export const ZCAL_URL = process.env.NEXT_PUBLIC_ZCAL_URL ?? ''
    export const SITE_NAME = 'Appvise Consulting'
    export const SITE_DESCRIPTION = 'Automatisation et développement sur-mesure pour entrepreneurs'
    export const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? ''
    ```
  - File: `src/types/case-study.ts`
  - Action: Définir :
    ```typescript
    export interface CaseStudy {
      title: string
      slug: string
      sector: string
      sectorTag: string
      problem: string
      solution: string
      statValue: string
      statLabel: string
      excerpt: string
      order: number
    }
    ```

- [ ] **Task 1.6 — Composants UI primitifs**
  - File: `src/components/ui/Button.tsx`
  - Action: Composant polymorphique (rend `<Link>` si `href` interne, `<a>` si externe, `<button>` sinon)
  - Props: `variant: 'primary' | 'secondary' | 'ghost' | 'inverse'`, `size: 'default' | 'sm'`, `href?: string`, `target?: string`, `rel?: string`, `children`, `className?`
  - Styles: primary = `bg-primary text-white`, secondary = `border border-white text-white` (dark) / `border border-border text-dark` (light), ghost = `text-primary`, inverse = `bg-white text-primary`
  - Hover: `scale(1.02) shadow-lg`, Active: `scale(0.98)`, Focus: `outline-2 outline-primary outline-offset-2`
  - Taille tactile min: `py-3.5 px-8` (44px+ hauteur)
  - File: `src/components/ui/Badge.tsx`
  - Action: Badge trust bar. Props: `icon: LucideIcon`, `label: string`. Render: icône 20px dans cercle `primary/10` + texte `text-sm text-white`
  - File: `src/components/ui/CheckItem.tsx`
  - Action: Check vert + texte. Import `Check` de lucide-react. Icône `text-success` 20px + `<span>` children. Flex row gap-3.
  - File: `src/components/ui/EmbedWrapper.tsx` — `"use client"`
  - Action: Wrapper iframe universel.
  - Props: `src: string`, `title: string`, `height: number`, `fallbackMessage: string`, `fallbackContact: string`
  - Logique: (1) Skeleton pulse `bg-border animate-pulse rounded-xl` à la hauteur donnée, (2) `<iframe>` en `loading="lazy"` `width="100%"`, (3) `onLoad` → masquer skeleton, (4) `setTimeout(10000)` → si pas chargé, afficher fallback card avec message + lien contact
  - Notes: Cleanup du timeout dans le return du useEffect

#### Phase 2 : Layout

- [ ] **Task 2.1 — Layout racine**
  - File: `src/app/layout.tsx`
  - Action: Structure :
    ```tsx
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body bg-dark text-white">
        <a href="#main" className="sr-only focus:not-sr-only ...">Aller au contenu principal</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
    ```
  - Action: Export `metadata` avec title template `%s | Appvise Consulting`, description par défaut, Open Graph image par défaut

- [ ] **Task 2.2 — Navbar**
  - File: `src/components/layout/Navbar.tsx` — `"use client"`
  - Action: `<nav aria-label="Navigation principale">` sticky `top-0 z-50`
  - Layout desktop: Logo (texte "Appvise" en font-heading) gauche → liens centre (Cas clients `#cas-clients`, Quiz `TALLY_QUIZ_URL` external, Contact `/contact`) → CTA droite Button primary sm "Appel gratuit" → `/contact`
  - Layout mobile: Logo gauche → hamburger droite (`aria-expanded`, `aria-label="Menu"`)
  - Drawer mobile: `fixed inset-0 bg-dark z-50`, liens empilés 18px, CTA pleine largeur en bas, fermeture ✕ + Escape, focus trap, body scroll lock (`overflow: hidden` sur body)
  - Scroll behavior: `useEffect` + `scroll` event → si `scrollY > 50` → `bg-dark/90 backdrop-blur-md`, sinon `bg-transparent`
  - Breakpoint: hamburger visible `lg:hidden`, liens visibles `hidden lg:flex`

- [ ] **Task 2.3 — Footer**
  - File: `src/components/layout/Footer.tsx`
  - Action: `<footer className="bg-dark text-white py-16 lg:py-24">`
  - Layout desktop 3 colonnes: (1) Logo + description courte, (2) Liens navigation (Accueil, Cas clients, Contact), (3) Liens sociaux (LinkedIn, YouTube icônes)
  - Layout mobile: empilé centré
  - Bas de footer: "Mentions légales" + "Politique de confidentialité" (liens placeholder) + "© 2026 Appvise Consulting"
  - Notes: LinkedIn et YouTube URLs en constantes (à configurer)

- [ ] **Task 2.4 — StickyCTA**
  - File: `src/components/layout/StickyCTA.tsx` — `"use client"`
  - Action: `<div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">`
  - Visibilité: `IntersectionObserver` sur l'élément `#hero`. Quand hero visible → masqué. Quand hero sort du viewport → visible avec transition `translate-y-0` (depuis `translate-y-full`), durée 300ms
  - Contenu: fond `bg-dark/95 backdrop-blur-md`, padding `p-3`, 2 boutons côte à côte `flex gap-2` : Button primary sm "Appel gratuit" (`href="/contact"`) + Button secondary sm "Quiz" (`href={TALLY_QUIZ_URL}` `target="_blank"`)
  - `aria-label="Actions rapides"`

#### Phase 3 : Page d'accueil — Sections

- [ ] **Task 3.1 — HeroSection**
  - File: `src/components/sections/HeroSection.tsx`
  - Action: `<section id="hero" aria-labelledby="hero-heading" className="bg-dark text-white py-24 lg:py-32">`
  - H1 `id="hero-heading"`: "Tu perds **10h/semaine** sur des tâches que tu pourrais automatiser ?" — "10h/semaine" en `text-primary`
  - Sous-headline `text-text-muted text-lg`: "Automatisation n8n et développement sur-mesure — un seul interlocuteur, de l'audit gratuit à la livraison."
  - Double CTA centré: Button primary "Réserver un appel gratuit" (`href="/contact"`) + Button secondary "Combien de temps perds-tu ?" (`href={TALLY_QUIZ_URL}` `target="_blank"` `rel="noopener noreferrer"`)
  - Layout: `max-w-3xl mx-auto text-center px-4`

- [ ] **Task 3.2 — TrustBar**
  - File: `src/components/sections/TrustBar.tsx`
  - Action: `<section aria-label="Badges de confiance" className="bg-[#081525] py-6">`
  - 5 badges dans un `<ul role="list" className="flex flex-wrap justify-center gap-6 lg:gap-10">`:
    - `Award` → "+12 ans d'exp"
    - `BadgeCheck` → "Double certif n8n"
    - `ShieldCheck` → "Paiement à la satisfaction"
    - `Phone` → "Appel gratuit"
    - `User` → "Un seul interlocuteur"
  - Chaque `<li>` utilise le composant `Badge`

- [ ] **Task 3.3 — CaseStudyCards**
  - File: `src/components/sections/CaseStudyCards.tsx`
  - Action: `<section id="cas-clients" aria-labelledby="cases-heading" className="bg-light text-dark py-16 lg:py-24">`
  - H2 `id="cases-heading"` centré: "Ils m'ont fait confiance"
  - Appeler `getCaseStudies()` (Server Component → appel direct)
  - Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
  - Chaque card: `<Link href={/cas-clients/${slug}} className="block bg-surface border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200" aria-label="Voir l'étude de cas ${title}">`
    - Tag secteur (petit badge `bg-primary/10 text-primary text-xs px-2 py-1 rounded-full`)
    - Titre `font-heading font-bold text-lg`
    - Excerpt `text-text-muted text-sm`
    - Stat: `<span className="font-heading text-3xl text-success">{statValue}</span>` + `<span className="text-sm text-text-muted">{statLabel}</span>`
  - Focus: `focus:outline-2 focus:outline-primary focus:outline-offset-2`

- [ ] **Task 3.4 — HonestySection**
  - File: `src/components/sections/HonestySection.tsx`
  - Action: `<section aria-labelledby="honesty-heading" className="bg-dark text-white py-16 lg:py-24">`
  - H2 `id="honesty-heading"` centré: "Ce que je ne ferai pas"
  - 3 items dans un grid `grid-cols-1 md:grid-cols-3 gap-6`:
    - Chaque item: `<div className="bg-white/[0.04] rounded-2xl p-6">` avec icône `X` de lucide en `text-primary` 24px + texte
    - (1) "Pas de devis surprise — tu sais exactement ce que tu paies avant de commencer"
    - (2) "Pas de livraison bâclée — itérations illimitées jusqu'à ta satisfaction"
    - (3) "Pas de jargon technique — on parle résultats, pas technologies"

- [ ] **Task 3.5 — MethodTimeline**
  - File: `src/components/sections/MethodTimeline.tsx`
  - Action: `<section aria-labelledby="method-heading" className="bg-surface text-dark py-16 lg:py-24">`
  - H2 `id="method-heading"` centré: "Ma méthode en 4 étapes"
  - `<ol role="list">` avec 4 `<li role="listitem" aria-label="Étape N sur 4">`:
    - Layout: connecteur vertical à gauche (ligne 2px gradient `from-primary to-secondary`), dot numéroté `bg-primary text-white rounded-full w-10 h-10` à gauche, titre h3 + description à droite
    - (1) **Diagnostic** — "On identifie ensemble tes tâches chronophages"
    - (2) **Proposition** — "Je te propose la solution adaptée : automatisation ou développement"
    - (3) **Réalisation** — "Je construis, tu valides à chaque étape"
    - (4) **Paiement** — "Tu ne paies le solde que quand tu es satisfait"
  - Container: `max-w-2xl mx-auto`

- [ ] **Task 3.6 — GuaranteeBlock**
  - File: `src/components/sections/GuaranteeBlock.tsx`
  - Action: `<section aria-labelledby="guarantee-heading" className="bg-guarantee text-white py-16 lg:py-24">`
  - Centré `text-center max-w-2xl mx-auto`:
    - Icône `ShieldCheck` de lucide 56px dans cercle `bg-primary/20 p-4 rounded-full mx-auto`
    - H2 `id="guarantee-heading"`: "Paiement à la satisfaction"
    - Description: "Je prends le risque à ta place. Tu ne paies le solde que quand le résultat te convient."
    - Checklist `text-left inline-block mt-8 space-y-3`: 4 CheckItem :
      - "Acompte de 30% pour démarrer"
      - "Solde uniquement quand tu es satisfait"
      - "Itérations illimitées incluses"
      - "Aucun engagement au-delà du projet"

- [ ] **Task 3.7 — CTASection**
  - File: `src/components/sections/CTASection.tsx`
  - Action: `<section aria-labelledby="cta-heading" className="bg-primary text-white py-16 lg:py-24">`
  - Centré:
    - H2 `id="cta-heading"`: "Prêt à récupérer tes heures ?"
    - Sous-titre `text-white/80`: "Appel gratuit · 30 min · Sans engagement"
    - Button inverse "Réserver un créneau" (`href="/contact"`) + Button `border border-white text-white` "Combien de temps perds-tu ?" (`href={TALLY_QUIZ_URL}` `target="_blank"`)
  - CTAs: `flex flex-col sm:flex-row gap-4 justify-center`

- [ ] **Task 3.8 — AboutSection**
  - File: `src/components/sections/AboutSection.tsx`
  - Action: `<section aria-labelledby="about-heading" className="bg-dark text-white py-16 lg:py-24">`
  - Centré `text-center max-w-2xl mx-auto`:
    - Photo placeholder: `<div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto" />` (remplacée par `<Image>` quand disponible)
    - H2 `id="about-heading"`: "Guillaume Occuly"
    - Bio: "Développeur web depuis plus de 12 ans et double certifié n8n, j'aide les entrepreneurs à récupérer leur temps en automatisant ce qui peut l'être — et en développant sur-mesure ce qui ne peut pas."
    - Lien YouTube: icône `Youtube` lucide + "Ma chaîne YouTube" → `target="_blank"`

- [ ] **Task 3.9 — Assemblage page d'accueil**
  - File: `src/app/page.tsx`
  - Action: Import et assemblage séquentiel des 9 sections :
    ```tsx
    export default function HomePage() {
      return (
        <>
          <HeroSection />
          <TrustBar />
          <CaseStudyCards />
          <HonestySection />
          <MethodTimeline />
          <GuaranteeBlock />
          <CTASection />
          <AboutSection />
        </>
      )
    }
    ```
  - Action: Export `metadata` : title "Appvise Consulting — Automatisation et développement sur-mesure", description, Open Graph

#### Phase 4 : Contenu MDX & Pages études de cas

- [ ] **Task 4.1 — Fichiers MDX études de cas**
  - File: `src/content/case-studies/addotour-229.mdx`
  - Action: Frontmatter :
    ```yaml
    title: "Addotour 229"
    slug: "addotour-229"
    sector: "Tourisme"
    sectorTag: "tourisme"
    problem: "Gestion manuelle des workflows — 12h/semaine perdues"
    solution: "Automatisation n8n des workflows récurrents"
    statValue: "12h"
    statLabel: "économisées par semaine"
    excerpt: "Addotour 229 perdait 12h par semaine sur des workflows manuels. L'automatisation n8n a tout changé."
    order: 1
    ```
  - Corps MDX: sections "Le problème", "La solution", "Les résultats" avec contenu narratif réaliste
  - File: `src/content/case-studies/sidecare.mdx`
  - Action: Frontmatter (title: "SideCare", slug: "sidecare", sector: "Santé / IA", sectorTag: "sante-ia", problem: "Besoin d'un chatbot médical fiable pour la vérification documentaire", solution: "Développement Ruby on Rails + intégration IA", statValue: "24/7", statLabel: "disponibilité du chatbot", excerpt, order: 2)
  - File: `src/content/case-studies/mhd-assur.mdx`
  - Action: Frontmatter (title: "MH'D ASSUR & CONSEIL", slug: "mhd-assur", sector: "Assurance", sectorTag: "assurance", problem: "Site web inexistant, gestion données et emails manuels", solution: "Site web + formulaire Tally + automatisation n8n", statValue: "8h", statLabel: "économisées par semaine", excerpt, order: 3)
  - Notes: Le contenu narratif sera réaliste mais placeholder — Guillaume remplacera avec le vrai contenu

- [ ] **Task 4.2 — Lib chargement études de cas**
  - File: `src/lib/case-studies.ts`
  - Action:
    ```typescript
    import fs from 'fs'
    import path from 'path'
    import matter from 'gray-matter'
    import { CaseStudy } from '@/types/case-study'

    const CASE_STUDIES_DIR = path.join(process.cwd(), 'src/content/case-studies')

    export function getCaseStudies(): CaseStudy[] {
      const files = fs.readdirSync(CASE_STUDIES_DIR).filter(f => f.endsWith('.mdx'))
      return files
        .map(file => {
          const raw = fs.readFileSync(path.join(CASE_STUDIES_DIR, file), 'utf-8')
          const { data } = matter(raw)
          return data as CaseStudy
        })
        .sort((a, b) => a.order - b.order)
    }

    export function getCaseStudyBySlug(slug: string): { meta: CaseStudy; content: string } {
      const file = path.join(CASE_STUDIES_DIR, `${slug}.mdx`)
      const raw = fs.readFileSync(file, 'utf-8')
      const { data, content } = matter(raw)
      return { meta: data as CaseStudy, content }
    }

    export function getAllCaseStudySlugs(): string[] {
      return getCaseStudies().map(cs => cs.slug)
    }
    ```

- [ ] **Task 4.3 — Page étude de cas dynamique**
  - File: `src/app/cas-clients/[slug]/page.tsx`
  - Action:
    - `generateStaticParams()` → `getAllCaseStudySlugs().map(slug => ({ slug }))`
    - `generateMetadata({ params })` → titre dynamique + description + Open Graph
    - Layout: fond `bg-light text-dark`, conteneur `max-w-prose mx-auto px-4 py-16 lg:py-24`
    - Header: lien retour "← Voir tous les cas clients" (`/cas-clients` ou `/#cas-clients`), titre h1, tag secteur badge, stat clé en gros
    - Corps: rendu MDX avec classes prose Tailwind (`prose prose-lg`)
    - Bas de page: CTA "Tu as un problème similaire ?" + Button primary "Réserver un appel gratuit" → `/contact`
  - Notes: Le rendu MDX utilise `@next/mdx` — le contenu est importé et compilé au build time. Alternativement, utiliser `next-mdx-remote` si `@next/mdx` ne supporte pas le chargement dynamique par slug.

#### Phase 5 : Page Contact

- [ ] **Task 5.1 — Page Contact**
  - File: `src/app/contact/page.tsx`
  - Action: Export `metadata` : title "Contact | Appvise Consulting", description
  - Layout: fond `bg-light text-dark`, conteneur `max-w-3xl mx-auto px-4 py-16 lg:py-24`
  - H1: "Réserver un appel gratuit"
  - Description: "30 minutes pour identifier tes tâches chronophages et te proposer la solution adaptée."
  - Embed Zcal: `<EmbedWrapper src={ZCAL_URL} title="Calendrier de réservation d'appel gratuit" height={400} fallbackMessage="Le calendrier est temporairement indisponible." fallbackContact={CONTACT_EMAIL} />`
  - Séparateur: `<div className="flex items-center gap-4 my-8"><hr className="flex-1 border-border" /><span className="text-text-muted">ou</span><hr className="flex-1 border-border" /></div>`
  - Embed Tally: `<EmbedWrapper src="https://tally.so/embed/7RXkg6?alignLeft=1&hideTitle=1" title="Formulaire de contact" height={600} fallbackMessage="Le formulaire est temporairement indisponible." fallbackContact={CONTACT_EMAIL} />`
  - Rappel process: card `bg-surface border border-border rounded-xl p-6 mt-8` avec texte "Après ta demande : réponse sous 48h, puis diagnostic gratuit de 30 min"

#### Phase 6 : SEO

- [ ] **Task 6.1 — Sitemap & Robots**
  - File: `src/app/sitemap.ts`
  - Action:
    ```typescript
    import { MetadataRoute } from 'next'
    import { SITE_URL } from '@/lib/constants'
    import { getAllCaseStudySlugs } from '@/lib/case-studies'

    export default function sitemap(): MetadataRoute.Sitemap {
      const caseStudies = getAllCaseStudySlugs().map(slug => ({
        url: `${SITE_URL}/cas-clients/${slug}`,
        lastModified: new Date(),
      }))
      return [
        { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        ...caseStudies,
      ]
    }
    ```
  - File: `src/app/robots.ts`
  - Action:
    ```typescript
    import { MetadataRoute } from 'next'
    import { SITE_URL } from '@/lib/constants'

    export default function robots(): MetadataRoute.Robots {
      return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: `${SITE_URL}/sitemap.xml`,
      }
    }
    ```

- [ ] **Task 6.2 — JSON-LD**
  - File: `src/components/seo/JsonLd.tsx`
  - Action: Composant Server qui render un `<script type="application/ld+json">` avec :
    - `@type: "Organization"` — name, url, logo, description, founder, contactPoint
    - `@type: "LocalBusiness"` — name, address (France), telephone, url
  - Inséré dans `layout.tsx`

- [ ] **Task 6.3 — Metadata helpers**
  - File: `src/lib/metadata.ts`
  - Action: Fonction `createMetadata({ title, description, path })` qui retourne un objet `Metadata` avec :
    - `title` (string ou template)
    - `description`
    - `openGraph`: title, description, url, siteName, type "website", images `[{ url: '/images/og-image.jpg', width: 1200, height: 630 }]`
    - `twitter`: card "summary_large_image"

#### Phase 7 : Page 404

- [ ] **Task 7.1 — Page 404**
  - File: `src/app/not-found.tsx`
  - Action: Fond `bg-dark text-white`, centré `min-h-[60vh] flex items-center justify-center`
  - H1: "Page introuvable"
  - Texte: "Cette page n'existe pas ou a été déplacée."
  - Button primary "Retour à l'accueil" (`href="/"`)

#### Phase 8 : Fichiers statiques & Configuration finale

- [ ] **Task 8.1 — Images placeholder**
  - File: `public/images/og-image.jpg`
  - Action: Image placeholder 1200x630 (peut être un SVG converti ou un placeholder statique)
  - File: `public/images/logo-appvise.svg`
  - Action: SVG placeholder simple avec texte "Appvise"
  - Notes: Les vrais assets seront fournis par Guillaume

- [ ] **Task 8.2 — .env.example**
  - File: `.env.example`
  - Action:
    ```
    # URL du site (production)
    NEXT_PUBLIC_SITE_URL=https://appvise-consulting.fr

    # Tally - Quiz de qualification
    NEXT_PUBLIC_TALLY_QUIZ_URL=https://tally.so/r/7RXkg6

    # Tally - Formulaire de contact (même formulaire que le quiz)
    NEXT_PUBLIC_TALLY_CONTACT_FORM_ID=7RXkg6

    # Zcal - Réservation audit gratuit
    NEXT_PUBLIC_ZCAL_URL=

    # Email de contact (fallback si embeds indisponibles)
    CONTACT_EMAIL=
    ```

- [ ] **Task 8.3 — Vérification build finale**
  - Action: Exécuter `pnpm build` et vérifier zéro erreur TypeScript et ESLint
  - Action: Vérifier que toutes les pages sont générées statiquement (output du build)
  - Action: `pnpm dev` et tester manuellement : navigation, responsive, embeds, ancres

### Acceptance Criteria

#### Happy Path

- [ ] **AC1 — Init & Build**
  - Given le projet est initialisé avec toutes les dépendances
  - When `pnpm build` est exécuté
  - Then le build réussit sans erreur TypeScript ni ESLint et génère 6 pages statiques (/, /contact, /cas-clients/addotour-229, /cas-clients/sidecare, /cas-clients/mhd-assur, /404)

- [ ] **AC2 — Page d'accueil complète**
  - Given un visiteur accède à `/`
  - When il scrolle la page
  - Then il voit les 8 sections dans l'ordre : Hero → TrustBar → CaseStudyCards → HonestySection → MethodTimeline → GuaranteeBlock → CTASection → AboutSection, chaque section ayant un fond distinct (alternance dark/light)

- [ ] **AC3 — Navigation desktop**
  - Given un visiteur est sur desktop (1024px+)
  - When il regarde la navbar
  - Then il voit le logo, les liens (Cas clients, Quiz, Contact) et le CTA "Appel gratuit", et les liens fonctionnent (ancre scroll, nouvel onglet, navigation)

- [ ] **AC4 — Navigation mobile**
  - Given un visiteur est sur mobile (<1024px)
  - When il clique sur le hamburger
  - Then un drawer plein écran s'ouvre avec les liens empilés, se ferme via ✕ ou Escape, et verrouille le scroll du body

- [ ] **AC5 — Études de cas cards → page**
  - Given un visiteur voit les 3 cards études de cas sur la page d'accueil
  - When il clique sur une card (ex: Addotour 229)
  - Then il est redirigé vers `/cas-clients/addotour-229` avec le contenu complet (titre, tag secteur, stat clé, contenu narratif, CTA audit en bas)

- [ ] **AC6 — Page Contact embeds**
  - Given un visiteur accède à `/contact`
  - When la page charge
  - Then il voit un skeleton pulse puis le calendrier Zcal et le formulaire Tally `https://tally.so/r/7RXkg6`, séparés par "ou"

- [ ] **AC7 — StickyCTA mobile apparition**
  - Given un visiteur est sur mobile
  - When il scrolle au-delà du hero (hero sort du viewport)
  - Then une barre CTA fixe slide-up en bas d'écran avec "Appel gratuit" + "Quiz", et disparaît quand le hero redevient visible

- [ ] **AC8 — Responsive 3 breakpoints**
  - Given le site est ouvert sur mobile (320px), tablette (768px), desktop (1024px+)
  - When le layout s'adapte
  - Then : cards études de cas 1→2→3 colonnes, navbar hamburger→liens visibles, CTAs empilés→côte à côte, StickyCTA visible→masqué→masqué

- [ ] **AC9 — SEO complet**
  - Given un moteur de recherche accède au site
  - When il crawle `/sitemap.xml`
  - Then il trouve les 5 URLs du site, chaque page a `<title>` + `<meta description>` + balises Open Graph, et le JSON-LD Organization est présent dans le `<head>`

- [ ] **AC10 — Quiz lien externe**
  - Given un visiteur clique sur le CTA "Combien de temps perds-tu ?" (hero, CTASection, ou StickyCTA)
  - When le lien s'active
  - Then un nouvel onglet s'ouvre vers `https://tally.so/r/7RXkg6` et le site Appvise reste ouvert en arrière-plan

#### Error & Edge Cases

- [ ] **AC11 — Embed fallback**
  - Given un embed Tally ou Zcal ne charge pas
  - When 10 secondes se sont écoulées
  - Then le skeleton est remplacé par un message fallback avec un lien email/LinkedIn de contact

- [ ] **AC12 — Page 404**
  - Given un visiteur accède à une URL inexistante (ex: `/page-qui-existe-pas`)
  - When la page 404 s'affiche
  - Then il voit un message clair et un CTA "Retour à l'accueil"

- [ ] **AC13 — Accessibilité clavier**
  - Given un utilisateur navigue exclusivement au clavier
  - When il tab à travers la page d'accueil
  - Then : le skip-to-content link est le premier élément focusable, tous les boutons/liens ont un outline visible, le drawer mobile a un focus trap

- [ ] **AC14 — Performance Lighthouse**
  - Given le site est build et servi
  - When un audit Lighthouse est exécuté sur la page d'accueil
  - Then les scores Performance, SEO, Accessibilité et Best Practices sont > 90

- [ ] **AC15 — Headers sécurité**
  - Given les headers HTTP de réponse sont inspectés
  - When on vérifie les réponses du serveur
  - Then `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` sont présents, et la CSP inclut `frame-src 'self' https://tally.so https://zcal.co`

## Additional Context

### Dependencies

**Packages npm :**
- `next` (v16.x) — framework
- `react`, `react-dom` (v19.x) — runtime
- `typescript` — typage
- `tailwindcss` (v4.2) — styling
- `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react` — MDX
- `gray-matter` — parsing frontmatter
- `lucide-react` — icônes
- `@vercel/analytics` — analytics
- `@vercel/speed-insights` — monitoring perf

**Services externes (hors périmètre dev) :**
- Tally (formulaires + quiz) — déjà configuré, URL quiz : `https://tally.so/r/7RXkg6`
- Zcal (booking audit) — URL à configurer
- n8n (webhooks automatisation) — déjà en place, hors périmètre site
- Airtable (CRM leads) — alimenté par n8n, hors périmètre site
- Vercel (hosting) — compte existant

### Testing Strategy

**Tests manuels pré-lancement :**
- Navigation complète au clavier (tab through + activation)
- Responsive : Chrome DevTools (iPhone SE 320px, iPhone 14 390px, iPad 768px, Desktop 1440px)
- Embeds Tally/Zcal : vérifier chargement, skeleton, fallback
- Lighthouse : vérifier scores > 90 (Performance, SEO, Accessibility, Best Practices)
- Cross-browser : Chrome, Safari, Firefox, Edge
- Mobile réel : Safari iOS, Chrome Android

**Pas de tests automatisés pour le MVP** — à évaluer en V2 si la complexité augmente (Vitest + Playwright recommandés).

### Notes

- Le contenu textuel des études de cas (corps MDX) devra être rédigé par Guillaume ou complété lors de l'implémentation avec du contenu placeholder réaliste
- La photo de Guillaume (`guillaume.webp`) et le logo Appvise (`logo-appvise.svg`) sont des assets à fournir — des placeholders seront créés en attendant
- L'URL Zcal et l'ID du formulaire Tally contact devront être configurés dans `.env.local` avant le déploiement production
- L'ordre des sections de la page d'accueil suit la séquence de conviction définie dans l'UX spec — ne pas modifier l'ordre sans validation
