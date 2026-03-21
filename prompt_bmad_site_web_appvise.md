# Prompt BMAD — Site Web Appvise Consulting

> **Usage** : Copie ce prompt dans Claude Code après avoir installé BMAD (`npx bmad-method install` avec le module "BMad Method").
> Lance ensuite `bmad-brainstorming` puis suis le workflow BMAD phase par phase.

---

## Instructions initiales pour Claude Code

Tu vas m'aider à construire un site web vitrine/conversion pour mon activité de consulting en automatisation et IA. Nous allons suivre la méthode BMAD (Build More Architect Dreams) phase par phase.

Commence par lire les fichiers BMAD installés dans `_bmad/` pour comprendre le framework, puis lance le workflow `bmad-brainstorming` pour démarrer.

---

## Contexte projet — À injecter dans le Product Brief

### Qui suis-je

**Guillaume Occuly** — Fondateur d'**Appvise Consulting** (SASU, 2023)

- Développeur web Ruby on Rails depuis 2014 (12+ ans, plusieurs apps web et mobile livrées)
- Double certifié n8n (automatisation no-code)
- Utilisateur intensif de Claude Code pour accélérer le développement
- Formé en stratégie digitale, création de contenu, et acquisition client

### Mon activité

J'aide les entrepreneurs non-techniques (solopreneurs, petites équipes 2-5 personnes) à récupérer 10h+ par semaine en automatisant leurs process chronophages — coordination, facturation, suivi clients.

**Positionnement unique** : Grâce à mes 12 ans de dev, je sais immédiatement si un problème nécessite de l'automatisation (2 semaines, 2000€) ou du développement sur-mesure (2 mois, 10 000€). Le client ne paie que ce qui est vraiment nécessaire. Aucun des 21 concurrents analysés n'a cette double expertise Ruby + n8n.

### Offres

| Offre | Prix | Délai |
|-------|------|-------|
| Audit gratuit (30min) | 0€ | Immédiat |
| Pack automatisation (Coordination, Facturation, ou Suivi Clients) | 2 000€ | 2 semaines |
| Automatisation sur-mesure | 3 000-5 000€ | 2-4 semaines |
| Développement custom (Rails) | 10 000€+ | 1-3 mois |
| Maintenance optionnelle | 20€/mois | Continu |

### Clients cibles (4 personas validés)

1. **Sophie** — Coach bien-être, 32-45 ans, 5-15k€/mois CA, 8-20 clients actifs. Passe 10-12h/semaine sur l'admin. Budget : 1 500-2 500€. Pain point #1 : facturation + relances impayés. Objection principale : "Je ne suis pas technique."

2. **Thomas** — Consultant stratégie/finance, 35-48 ans, 8-12k€/mois CA, 10-15 clients. Passe 12h/semaine sur l'admin. Budget : 2 000-3 500€. Pain point #1 : propositions commerciales manuelles. Veut scaler à 15k€/mois mais plafonne.

3. **Amélie** — Photographe événementiel, 28-38 ans, 6-10k€/mois CA (saisonnier). 10h/semaine sur admin. Budget : 1 500-2 500€. Pain point #1 : tri/livraison photos (5h/shooting). Activité très saisonnière (mars-octobre).

4. **Lucas** — Dirigeant organisme de formation Qualiopi, 40-55 ans, 15-30k€/mois CA. 15h/semaine sur admin. Budget : 3 000-5 000€ (le plus élevé). Pain point #1 : génération certificats conformes. ROI en 1 mois. Client le plus urgent.

### Concurrence — Ce qui me différencie

- **vs Formations no-code** (9 concurrents en proposent) : Je livre clé en main en 2 semaines vs 100h d'apprentissage
- **vs Consultants no-code purs** : Je peux aussi développer en Ruby quand le no-code atteint ses limites
- **vs Agences dev** (8-15k€) : Je commence par l'automatisation (2k€), dev uniquement si nécessaire
- **vs Coaching** : J'exécute à la place du client, pas juste du conseil
- **Menaces principales** : formations Qualiopi financées OPCO (0€ pour le client), garanties résultats contractuelles, packs verticaux sectoriels

### Cas clients existants

- **Romain (Addotour 229)** : Économise 12h/semaine grâce à l'automatisation complète de ses workflows
- **HenaMed** : Système de vérification documentaire IA pour le secteur médical

### Canal actuel et problème

Aujourd'hui je suis **uniquement visible sur LinkedIn**. Le site web doit devenir mon 2e canal d'acquisition et ma vitrine de crédibilité pour :
- Convertir les prospects LinkedIn qui veulent en savoir plus
- Être trouvé via SEO ("automatisation [secteur]", "automatiser facturation freelance", etc.)
- Héberger mes études de cas et preuves sociales
- Proposer mon quiz de qualification ("Combien d'heures perds-tu chaque semaine ?")
- Récolter des leads via mon lead magnet

---

## Objectifs du site web

### Objectifs business
1. **Convertir les visiteurs en leads qualifiés** : formulaire audit gratuit, quiz de qualification, lead magnet
2. **Asseoir ma crédibilité** : études de cas avant/après, certifications, témoignages
3. **Être trouvé en SEO** : pages par secteur ("automatisation coaching", "automatisation organisme formation"), articles de blog
4. **Supporter ma prospection LinkedIn** : lien dans les posts, dans les DM, dans la signature

### Objectifs techniques
- Site rapide, responsive, optimisé SEO
- Stack moderne et maintenable (je suis dev Rails mais open à d'autres choix si justifié)
- Intégration avec : Tally (quiz/formulaires), Airtable (CRM leads), n8n (webhooks automatisation), Zcal (booking audit)
- Analytics pour mesurer les conversions
- Facile à mettre à jour (ajout études de cas, articles blog)

### Contraintes
- Budget temps : je suis en CDI à côté, le site doit être développable en 2-4 semaines sur mon temps libre
- Pas de budget design : le site doit être propre et pro mais pas besoin d'un designer
- Doit être en français
- Hébergement économique (Vercel, Netlify, ou VPS existant)

---

## Pages envisagées (à valider/challenger pendant le brainstorming)

1. **Accueil** — Proposition de valeur claire, preuves sociales, CTA vers audit gratuit
2. **Comment ça marche** — Les 3 étapes (Audit → Automatisation → Résultats), réassurance
3. **Services** — Détail des offres (packs + sur-mesure + dev custom)
4. **Études de cas** — Avant/après avec métriques (Addotour 229, HenaMed, etc.)
5. **À propos** — Mon parcours, pourquoi je fais ça, certifications
6. **Blog/Ressources** — Articles SEO par secteur
7. **Quiz** — "Combien d'heures perds-tu ?" (embed Tally ou custom)
8. **Contact / Réserver un audit** — Formulaire + Zcal embed

---

## Stack technique à évaluer

Options à comparer pendant la phase Architecture :

| Option | Avantage | Inconvénient |
|--------|----------|-------------|
| **Next.js + Tailwind** | Performance, SEO SSG/SSR, écosystème riche | Nouveau pour moi (mais j'apprends vite) |
| **Astro + Tailwind** | Ultra performant pour site vitrine, simple | Moins flexible si besoin d'interactivité |
| **Ruby on Rails** | Ma zone de confort, full-stack | Over-engineered pour un site vitrine |
| **Hugo / 11ty** | Rapide, simple, gratuit à héberger | Moins flexible pour les parties dynamiques |

---

## Workflow BMAD recommandé

Étant donné la complexité modérée du projet (site vitrine avec quelques éléments dynamiques), je recommande le track **BMad Method** :

### Phase 1 — Analysis
- `bmad-brainstorming` : Valider la structure du site, les pages, les parcours utilisateurs
- `bmad-create-product-brief` : Formaliser la vision produit

### Phase 2 — Planning
- `bmad-create-prd` : Définir les requirements fonctionnels et non-fonctionnels
- `bmad-create-ux-design` : Wireframes des pages clés (accueil, services, études de cas)

### Phase 3 — Solutioning
- `bmad-create-architecture` : Choix technique (stack, hébergement, intégrations)
- `bmad-create-epics-and-stories` : Découpage en stories implémentables
- `bmad-check-implementation-readiness` : Vérification avant dev

### Phase 4 — Implementation
- `bmad-sprint-planning` → `bmad-create-story` → `bmad-dev-story` → `bmad-code-review`

---

## Rappel important

- **Toujours démarrer un nouveau chat Claude Code pour chaque workflow BMAD**
- Utiliser `bmad-help` à tout moment si besoin de guidance
- Ce prompt contient tout le contexte business nécessaire — pas besoin de re-expliquer à chaque workflow, référence ce fichier
