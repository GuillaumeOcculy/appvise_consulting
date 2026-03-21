---
stepsCompleted:
  - step-01-init
  - step-02-discovery
  - step-02b-vision
  - step-02c-executive-summary
  - step-03-success
  - step-04-journeys
  - step-05-domain-skipped
  - step-06-innovation-skipped
  - step-07-project-type
  - step-08-scoping
  - step-09-functional
  - step-10-nonfunctional
  - step-11-polish
  - step-12-complete
  - step-e-01-discovery
  - step-e-02-review
  - step-e-03-edit
lastEdited: '2026-03-21'
editHistory:
  - date: '2026-03-21'
    changes: 'Corrections rapport de validation : reformulation FRs système, séparation principes éditoriaux, contexte NFRs, ajout date frontmatter'
inputDocuments:
  - _bmad-output/planning-artifacts/product-brief-appvise_consulting-2026-03-21.md
  - _bmad-output/brainstorming/brainstorming-session-2026-03-21-001.md
  - prompt_bmad_site_web_appvise.md
documentCounts:
  briefs: 1
  research: 0
  brainstorming: 1
  projectDocs: 0
workflowType: 'prd'
classification:
  projectType: web_app
  domain: general
  complexity: low
  projectContext: greenfield
date: '2026-03-21'
workflow: 'edit'
---

# Product Requirements Document - appvise_consulting

**Author:** Onizuka
**Date:** 2026-03-21

## Executive Summary

Appvise Consulting développe un site web vitrine/conversion destiné à transformer la présence LinkedIn de Guillaume Occuly en un canal d'acquisition autonome. Le site cible les entrepreneurs non-techniques (solopreneurs, petites équipes de 2-5 personnes) qui perdent 10-15h/semaine sur des tâches administratives répétitives — facturation, coordination, suivi clients — et perdent de l'argent sur ces tâches à faible valeur. Le mécanisme de conversion central repose sur l'identification : le visiteur se reconnaît dans un cas client concret (prénom, métier, problème, résultat chiffré) et comprend immédiatement que son problème a déjà été résolu pour quelqu'un comme lui. Le site structure un entonnoir de conviction (Pain point → Preuves chiffrées → Garantie) qui pousse vers un audit gratuit de 30 minutes via Zcal ou formulaire Tally.

### Ce qui rend ce produit spécial

Le site capitalise sur trois différenciateurs qu'aucun concurrent ne combine : (1) une double expertise développement (12+ ans Ruby on Rails) et automatisation (double certification n8n) qui permet un diagnostic précis — automatisation à 2k€ ou dev sur-mesure à 10k€+, le client ne paie que ce qui est nécessaire ; (2) un modèle de paiement à la satisfaction (acompte + solde après validation, itérations illimitées) qui élimine le risque perçu par le prospect ; (3) la preuve par les cas clients chiffrés plutôt que par le discours — le visiteur voit un résultat concret (ex : 12h/semaine économisées pour Addotour 229) avant de s'engager.

## Classification du projet

- **Type de projet :** Web App — site vitrine/conversion avec intégrations tierces (Tally, Zcal, Airtable, n8n)
- **Domaine :** Général — consulting/services B2B, pas de contraintes réglementaires spécifiques
- **Complexité :** Faible — site vitrine statique avec embeds et webhooks, pas de logique métier complexe
- **Contexte :** Greenfield — nouveau produit, aucun code existant

## Critères de succès

### Succès utilisateur

| Critère | Indicateur | Cible |
|---------|-----------|-------|
| Reconnaissance du problème | Temps passé sur la page d'accueil > 30s | > 60% des visiteurs |
| Identification via cas client | Clic vers une étude de cas depuis l'accueil | > 25% des visiteurs |
| Qualification quiz | Taux de complétion du quiz Tally (9 questions) | > 50% de ceux qui commencent |
| Passage à l'action | Réservation audit gratuit (Zcal) ou soumission formulaire (Tally) | 5-10/mois |

### Succès business

| Horizon | Objectif | Mesure |
|---------|----------|--------|
| Mois 1-3 | Le site génère des leads réguliers | 5+ audits/mois, 1+ contact/semaine |
| Mois 3-6 | Canal d'acquisition fiable | 8-10 audits/mois, 2-3 clients convertis/mois, premiers leads SEO |
| Mois 6-12 | 2e canal d'acquisition après LinkedIn | CA site = 5 000-10 500€/mois, trafic organique en croissance |

### Succès technique

| Critère | Cible |
|---------|-------|
| Temps de chargement | < 3s toutes pages |
| Score Lighthouse (Performance, SEO, Accessibilité) | > 90 |
| Accessibilité | WCAG AA (niveau de base) |
| Responsive | Fonctionnel mobile, tablette, desktop |
| Intégrations | Tally, Zcal, Airtable, n8n opérationnels |

### Résultats mesurables

| KPI | Cible | Fréquence |
|-----|-------|-----------|
| Audits gratuits réservés | 5-10/mois | Hebdomadaire |
| Taux conversion audit → client | 30% | Mensuel |
| Clients signés via le site | 1,5-3/mois | Mensuel |
| CA généré via le site | 5 000-10 500€/mois | Mensuel |
| Quiz complétés | 5+/mois | Mensuel |
| Quiz → audit réservé | > 20% | Mensuel |

## Parcours utilisateurs

### Parcours 1 : Sophie — LinkedIn → Audit (parcours prioritaire)

**Sophie, 38 ans, coach bien-être à Lyon, 12 clients actifs, 8k€/mois de CA.**

Sophie vient de passer 45 minutes à relancer manuellement un client pour un impayé de 180€. C'est la troisième fois ce mois-ci. Elle scrolle LinkedIn pour décompresser et tombe sur un post de Guillaume : "Ma cliente coach économise 10h/semaine depuis qu'on a automatisé ses relances." Elle clique sur le lien du site.

**Sur le site :** La headline parle d'elle — "Tu perds 10h/semaine sur des tâches que tu pourrais automatiser ?" Elle scrolle. Elle voit l'étude de cas d'un profil similaire au sien avec des chiffres concrets. Elle se dit "c'est exactement mon problème". Elle voit le modèle de paiement à la satisfaction — "je ne paie que si ça marche, pas de mauvaise surprise". Elle regarde la frise "Ma méthode" en 4 étapes — c'est clair, pas de jargon technique.

**Moment clé :** Sophie clique sur "Réserver mon audit gratuit", choisit un créneau de 30 min sur Zcal. Zéro engagement, zéro risque perçu.

**Résolution :** Sophie reçoit une confirmation par email. Elle sait exactement ce qui va se passer : un diagnostic, une proposition, et elle ne paiera que si elle est satisfaite.

### Parcours 2 : Thomas — SEO → Audit

**Thomas, 42 ans, consultant en stratégie financière à Bordeaux, 12k€/mois de CA mais plafonne.**

Thomas tape "automatiser propositions commerciales freelance" sur Google un dimanche soir, frustré d'avoir passé son week-end à rédiger des propales. Il tombe sur une page secteur du site Appvise (V2/SEO).

**Sur le site :** Il lit un cas client consultant qui a automatisé ses propositions — le temps de rédaction est passé de 3h à 15 min. Il explore la page d'accueil, vérifie les badges de réassurance (12+ ans exp, double certification). Il hésite encore — il a déjà payé 4k€ à une agence sans résultat. Puis il voit "Paiement à la satisfaction" et "Itérations illimitées".

**Moment clé :** Thomas préfère l'écrit — il remplit le formulaire Tally plutôt que de réserver un appel. Il décrit son problème en quelques lignes.

**Résolution :** Guillaume le recontacte sous 48h avec un diagnostic précis : automatisation n8n suffisante, pas besoin de dev custom. Budget estimé : 2 000€. Thomas est rassuré — on ne lui vend pas plus que nécessaire.

### Parcours 3 : Lucas — Quiz → Audit

**Lucas, 48 ans, dirige un organisme de formation Qualiopi à Nantes, 25k€/mois de CA, petite équipe de 4.**

Lucas découvre le quiz via un post LinkedIn : "Combien d'heures perds-tu chaque semaine sur l'admin ?" Curieux, il clique. Les 9 questions Tally le font réfléchir — il réalise qu'il perd 15h/semaine, surtout sur la génération de certificats conformes Qualiopi.

**Sur le site :** Le quiz terminé, Lucas reçoit un diagnostic personnalisé par email qui confirme ce qu'il pressentait : son problème est automatisable. Le CTA dans l'email le renvoie vers la réservation d'audit. Il visite la page d'accueil pour vérifier la crédibilité — il voit les cas clients et le parcours de Guillaume.

**Moment clé :** Lucas réserve l'audit sur Zcal. Son ROI attendu est clair : 15h/semaine × 4 semaines = 60h/mois récupérées. À son taux horaire, c'est un investissement rentabilisé en moins d'un mois.

**Résolution :** L'audit confirme que l'automatisation n8n peut générer ses certificats conformes automatiquement. Budget : 3 500€, livraison : 3 semaines. Lucas signe — c'est le profil client le plus rentable.

### Parcours 4 : Marc — Le déçu du freelance (parcours méfiance)

**Marc, 44 ans, gérant d'une PME de services à Marseille, 35k€/mois de CA, 8 employés.**

Marc a déjà investi 7k€ chez une agence web pour un "outil de gestion interne" qui n'a jamais fonctionné correctement. Il est méfiant. Un collègue lui partage le lien du site Appvise en lui disant "regarde ce type, il a un modèle différent".

**Sur le site :** Marc est sceptique. Il lit la page d'accueil — le pain point est pertinent mais il en a vu d'autres. Il clique sur les études de cas et lit les détails : prénoms, chiffres, avant/après. C'est concret, pas du marketing vague. Il revient sur la garantie — "paiement à la satisfaction, itérations illimitées". Il compare mentalement avec son expérience agence ("2 allers-retours max, dépassement de budget").

**Moment clé :** Marc voit la frise "Ma méthode" — Diagnostic → Proposition → Réalisation → Paiement. Le process est transparent. Il sait exactement ce qui va se passer AVANT de s'engager. C'est ça qui le fait basculer.

**Résolution :** Marc réserve un audit en se disant "au pire c'est gratuit et je verrai bien". L'audit révèle qu'il a besoin d'automatisation + un peu de dev custom. Guillaume lui explique la différence et propose un plan en 2 phases. Marc signe la phase 1 (automatisation) pour tester avant de s'engager sur la phase 2.

### Parcours 5 : Visiteur qui ne convertit pas (parcours d'échec)

**Nadia, 35 ans, naturopathe à Paris, 4k€/mois de CA, 6 clients.**

Nadia arrive sur le site via LinkedIn. Elle lit la headline — elle se reconnaît dans le problème. Mais elle scrolle les études de cas : Addotour 229 (tourisme), SideCare (assurance/chatbot), MH'D ASSUR & CONSEIL (assurance). Aucun cas dans le bien-être ou la santé naturelle. Elle ne se projette pas.

**Points de friction :** Elle voit les badges "12+ ans dev" et "double certification n8n" — elle ne comprend pas ce que ça signifie concrètement pour elle. Le quiz l'intéresse mais elle n'a pas le temps maintenant. Elle quitte le site.

**Ce qui aurait pu la retenir :** Un cas client coach/praticien bien-être (→ V2 : plus d'études de cas), un lead magnet téléchargeable ("Guide : 5 tâches que tu peux automatiser en tant que praticien", → V2), ou un résultat de quiz sauvegardé envoyé par email pour revenir plus tard.

### Parcours 6 : Guillaume — Admin du site

**Guillaume, fondateur d'Appvise Consulting, gère le site au quotidien.**

Chaque semaine, Guillaume consulte son dashboard Airtable pour voir les nouveaux leads (formulaires Tally + réservations Zcal). Il reçoit une notification n8n quand un nouveau quiz est complété. Il vérifie les analytics pour suivre les KPIs (taux de rebond, clics études de cas, conversions).

**Tâches récurrentes :**
- Ajouter une nouvelle étude de cas quand un client est satisfait (contenu markdown + chiffres)
- Publier un article de blog par secteur (V2)
- Vérifier que les intégrations Tally/Zcal/Airtable fonctionnent
- Suivre les conversions et ajuster les CTA si nécessaire

### Synthèse des capacités révélées par les parcours

| Capacité | Parcours source | Priorité |
|----------|----------------|----------|
| Page d'accueil conversion (headline, 3 blocs, CTA) | Sophie, Thomas, Marc | MVP |
| Études de cas narratives chiffrées | Sophie, Thomas, Marc, Nadia | MVP |
| Intégration Zcal (booking audit) | Sophie, Lucas, Marc | MVP |
| Intégration Tally (formulaire alternatif) | Thomas | MVP |
| Quiz Tally intégré | Lucas | MVP |
| Frise "Ma méthode" 4 étapes | Sophie, Marc | MVP |
| Badges de réassurance | Thomas, Marc | MVP |
| Section garantie paiement à la satisfaction | Sophie, Thomas, Marc | MVP |
| Pages secteur SEO | Thomas | V2 |
| Diagnostic quiz par email (automatisé via n8n) | Lucas | MVP |
| Diversité études de cas (couverture sectorielle) | Nadia | V2 |
| Lead magnet téléchargeable | Nadia | V2 |
| CMS simple pour ajout de contenu | Guillaume | MVP |
| Dashboard analytics / notifications leads | Guillaume | MVP |

## Exigences spécifiques Web App

### Vue d'ensemble technique

Site multi-pages (MPA) avec rendu statique (SSG) ou côté serveur (SSR) pour maximiser les performances SEO et le temps de chargement. Pas de fonctionnalité temps réel. Site de contenu avec embeds de services tiers (Tally, Zcal).

### Design responsive

| Breakpoint | Cible |
|-----------|-------|
| Mobile | 320px - 767px (prioritaire — trafic LinkedIn majoritairement mobile) |
| Tablette | 768px - 1023px |
| Desktop | 1024px+ |

Approche mobile-first : le parcours de conversion doit être optimisé pour mobile en priorité (CTA accessibles au pouce, études de cas lisibles sans zoom).

### Compatibilité navigateurs

Navigateurs modernes uniquement :
- Chrome (2 dernières versions)
- Firefox (2 dernières versions)
- Safari (2 dernières versions)
- Edge (2 dernières versions)
- Safari iOS / Chrome Android

### Cibles de performance

| Métrique | Cible |
|----------|-------|
| Largest Contentful Paint (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to First Byte (TTFB) | < 800ms |
| Score Lighthouse global | > 90 |
| Poids total page d'accueil | < 500 KB |

### Stratégie SEO

**Mots-clés cibles :**
- "automatisation coaching"
- "automatisation organisme formation"
- "développement sur mesure"
- "gain de temps" / "gagner du temps entrepreneur"

**Fondations SEO MVP :**
- Balises meta (title, description) par page
- Sitemap XML automatique
- Données structurées (Organization, LocalBusiness, FAQ)
- URLs propres et sémantiques
- Balises Open Graph pour le partage LinkedIn

**SEO V2 :**
- Pages secteur dédiées par mot-clé
- Articles de blog optimisés
- Maillage interne

### Accessibilité

- Niveau WCAG AA
- Navigation au clavier fonctionnelle
- Contrastes de couleur conformes (ratio 4.5:1 minimum)
- Attributs alt sur toutes les images
- Structure de titres hiérarchique (h1 → h2 → h3)

### Considérations d'implémentation

- **Architecture MPA** avec génération statique (SSG) pour les pages de contenu
- **Intégrations tierces via embed/iframe** : Tally (formulaires, quiz), Zcal (booking)
- **Intégrations backend via webhooks** : Airtable (CRM leads), n8n (automatisation notifications)
- **Analytics** : tracking des événements de conversion (clic CTA, soumission formulaire, réservation audit, complétion quiz)
- **CMS** : solution simple pour que Guillaume puisse ajouter des études de cas et du contenu blog (V2) sans intervention dev

## Scoping projet & développement phasé

### Stratégie MVP & Philosophie

**Approche MVP :** MVP de conversion — le minimum pour prouver que le site génère des leads qualifiés via l'identification aux cas clients.
**Ressources :** Guillaume seul, un weekend de développement.
**Contrainte clé :** Le site doit être livrable en un weekend — toute fonctionnalité qui dépasse ce cadre est reportée en V2.

### Ensemble de fonctionnalités MVP (Phase 1)

**Parcours utilisateurs supportés :**
- LinkedIn → Audit (Sophie, Marc) — parcours prioritaire
- Quiz → Audit (Lucas) — parcours automatisé via n8n

**Capacités essentielles :**
- Page d'accueil one-page conversion (architecture 3 blocs : Pain → Preuves → Garantie)
- 3 études de cas chiffrées :
  - **Addotour 229** — automatisation workflows, 12h/semaine économisées
  - **SideCare** — chatbot médical développé en Ruby on Rails (démontre l'expertise dev)
  - **MH'D ASSUR & CONSEIL** — site web + formulaire Tally + automatisation gestion données et envoi emails (démontre l'expertise full-stack : site + automatisation)
- Quiz de qualification Tally intégré avec diagnostic automatisé (n8n déjà en place)
- Page Contact / Réserver un audit (embed Zcal + formulaire Tally)
- Frise "Ma méthode" 4 étapes
- Badges de réassurance
- Section garantie paiement à la satisfaction
- Double CTA permanent (Zcal + Tally)
- SEO de base (meta, sitemap, données structurées, Open Graph)
- Analytics de conversion
- Responsive mobile-first

**Cas clients retirés du MVP :**
- HenaMed — pas encore terminé, sera ajouté une fois livré

### Post-MVP

**Phase 2 — Croissance (Mois 2-3) :**
- Blog avec articles par secteur (SEO)
- Pages secteur dédiées ("automatisation coaching", "développement sur mesure")
- Page "À propos" complète
- Vidéos YouTube intégrées aux études de cas
- Lead magnet téléchargeable
- Nouvelles études de cas (HenaMed quand terminé, futurs clients)

**Phase 3 — Expansion (Mois 6-12+) :**
- Scoring automatique du quiz avec résultats personnalisés
- Témoignages vidéo clients
- Optimisation SEO avancée (backlinks, content marketing)
- Potentiel : espace client ou dashboard de suivi projet

### Stratégie de mitigation des risques

**Risques techniques :** Faibles — site statique avec embeds, pas de logique métier complexe. Le framework SSG gère la performance. Les intégrations tierces (Tally, Zcal) sont des embeds iframe, pas de développement custom.

**Risques marché :** Le MVP valide une hypothèse clé — les études de cas suffisent à convertir. Si les 3 cas ne couvrent pas assez de secteurs (cf. parcours Nadia), la V2 avec plus de cas et des pages secteur SEO corrigera le tir.

**Risques ressource :** Un weekend est serré. Mitigation : les intégrations sont des embeds (pas de dev backend), le contenu des études de cas est déjà connu, et l'automatisation n8n est déjà en place. Le CMS (markdown) permet d'ajouter du contenu après le lancement sans redéploiement complexe.

## Exigences fonctionnelles

### Conversion & Acquisition de leads

- **FR1 :** Le visiteur peut réserver un audit gratuit de 30 minutes via un calendrier intégré (Zcal)
- **FR2 :** Le visiteur peut soumettre une demande de contact via un formulaire intégré (Tally)
- **FR3 :** Le visiteur peut accéder à un double CTA (formulaire + booking) depuis chaque page du site
- **FR4 :** Le visiteur peut compléter un quiz de qualification de 9 questions intégré (Tally)
- **FR5 :** Le visiteur qui complète le quiz reçoit un diagnostic personnalisé par email (automatisé via n8n)

### Contenu de conviction

- **FR6 :** Le visiteur peut lire une page d'accueil structurée en entonnoir de conviction (Pain point → Preuves chiffrées → Garantie)
- **FR7 :** Le visiteur peut consulter des études de cas narratives chiffrées (Addotour 229, SideCare, MH'D ASSUR & CONSEIL)
- **FR8 :** Le visiteur peut voir une frise visuelle "Ma méthode" en 4 étapes (Diagnostic → Proposition → Réalisation → Paiement)
- **FR9 :** Le visiteur peut voir une bande de réassurance avec badges de confiance (+12 ans exp, double certif n8n, paiement à la satisfaction, audit gratuit, un seul interlocuteur)
- **FR10 :** Le visiteur peut voir la section garantie paiement à la satisfaction avec le détail du modèle (acompte + solde à la satisfaction, itérations illimitées)
- **FR11 :** Le visiteur peut voir une section "À propos" intégrée à l'accueil (photo Guillaume, positionnement, lien YouTube)


### Navigation & Structure

- **FR12 :** Le visiteur peut naviguer entre les pages du site via un menu de navigation
- **FR13 :** Le visiteur peut accéder à la page Contact / Réserver un audit
- **FR14 :** Le visiteur peut accéder aux études de cas individuelles
- **FR15 :** Le visiteur peut voir le process transparent (ce qui se passe après la prise de contact)

### SEO & Découvrabilité

- **FR16 :** Le visiteur peut trouver chaque page via les moteurs de recherche grâce aux balises meta optimisées (title, description)
- **FR17 :** Les moteurs de recherche peuvent indexer l'ensemble du site via un sitemap XML généré automatiquement
- **FR18 :** Les moteurs de recherche peuvent afficher des résultats enrichis grâce aux données structurées (Organization, LocalBusiness)
- **FR19 :** Le visiteur qui partage une page sur LinkedIn peut voir un aperçu riche grâce aux balises Open Graph

### Intégrations & Automatisation

- **FR20 :** Guillaume peut retrouver chaque soumission de formulaire Tally dans Airtable (CRM leads) via n8n
- **FR21 :** Guillaume peut retrouver chaque réservation Zcal dans Airtable via n8n
- **FR22 :** Le visiteur qui complète le quiz reçoit un diagnostic personnalisé par email via n8n
- **FR23 :** Guillaume reçoit une notification quand un nouveau lead est capté (formulaire, booking ou quiz)

### Analytics & Suivi

- **FR24 :** Guillaume peut suivre les événements de conversion (clic CTA, soumission formulaire, réservation audit, complétion quiz) via un outil analytics
- **FR25 :** Guillaume peut consulter les métriques de trafic et de conversion via un outil analytics

### Gestion de contenu

- **FR26 :** Guillaume peut ajouter ou modifier une étude de cas sans intervention dev (contenu markdown)
- **FR27 :** Guillaume peut modifier le contenu textuel des pages et redéployer en moins de 5 minutes

## Principes éditoriaux

- **PE1 :** Aucun terme technique non expliqué dans le contenu visible du site — parler en termes de résultats client, pas de technologies ("Vos factures se traitent seules" plutôt que "API + ERP intégrés")
- **PE2 :** La page d'accueil nomme explicitement les anti-patterns des agences et freelances pour désamorcer la méfiance ("Pas de devis surprise. Pas de livraison bâclée. Pas de 2 allers-retours max.")

## Exigences non fonctionnelles

### Performance

- **NFR1 :** Largest Contentful Paint (LCP) < 2.5s sur mobile 4G
- **NFR2 :** First Input Delay (FID) < 100ms sur mobile 4G
- **NFR3 :** Cumulative Layout Shift (CLS) < 0.1 sur mobile 4G
- **NFR4 :** Time to First Byte (TTFB) < 800ms sur mobile 4G
- **NFR5 :** Score Lighthouse global > 90 (Performance, SEO, Accessibilité, Best Practices)
- **NFR6 :** Poids total de la page d'accueil < 500 KB (hors embeds tiers)
- **NFR7 :** Les embeds Tally et Zcal se chargent de manière asynchrone en moins de 3 secondes sans bloquer le rendu de la page

### Accessibilité

- **NFR8 :** Conformité WCAG AA sur toutes les pages
- **NFR9 :** Ratio de contraste des couleurs minimum 4.5:1 pour le texte
- **NFR10 :** Navigation complète au clavier (tab, enter, escape)
- **NFR11 :** Structure de titres hiérarchique cohérente (un seul h1 par page)
- **NFR12 :** Attributs alt descriptifs sur toutes les images

### Intégrations

- **NFR13 :** Les embeds Tally et Zcal doivent fonctionner sur tous les navigateurs cibles (Chrome, Firefox, Safari, Edge)
- **NFR14 :** En cas d'indisponibilité d'un service tiers (Tally, Zcal), le site reste navigable et affiche un message de fallback
- **NFR15 :** Les webhooks n8n traitent les soumissions en moins de 30 secondes (notification + ajout Airtable)
- **NFR16 :** Les données de leads dans Airtable sont à jour dans un délai maximum de 5 minutes après soumission

### Maintenabilité

- **NFR17 :** L'ajout d'une nouvelle étude de cas ne nécessite pas plus de 15 minutes (création fichier markdown + redéploiement)
- **NFR18 :** Le déploiement d'une mise à jour de contenu se fait en moins de 5 minutes (build + deploy automatique)
