---
validationTarget: '_bmad-output/planning-artifacts/prd.md'
validationDate: '2026-03-21'
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/product-brief-appvise_consulting-2026-03-21.md
  - _bmad-output/brainstorming/brainstorming-session-2026-03-21-001.md
  - prompt_bmad_site_web_appvise.md
validationStepsCompleted:
  - step-v-01-discovery
  - step-v-02-format-detection
  - step-v-03-density-validation
  - step-v-04-brief-coverage
  - step-v-05-measurability
  - step-v-06-traceability
  - step-v-07-implementation-leakage
  - step-v-08-domain-compliance
  - step-v-09-project-type
  - step-v-10-smart
  - step-v-11-holistic-quality
  - step-v-12-completeness
  - step-v-13-report-complete
validationStatus: COMPLETE
holisticQualityRating: '4/5 - Good'
overallStatus: 'Pass'
---

# PRD Validation Report

**PRD validé :** _bmad-output/planning-artifacts/prd.md
**Date de validation :** 2026-03-21

## Documents d'entrée

- PRD : prd.md
- Product Brief : product-brief-appvise_consulting-2026-03-21.md
- Session brainstorming : brainstorming-session-2026-03-21-001.md
- Prompt initial : prompt_bmad_site_web_appvise.md

## Résultats de validation

### Détection de format

**Structure du PRD (en-têtes ## trouvés) :**
1. Executive Summary
2. Classification du projet
3. Critères de succès
4. Parcours utilisateurs
5. Exigences spécifiques Web App
6. Scoping projet & développement phasé
7. Exigences fonctionnelles
8. Exigences non fonctionnelles

**Sections BMAD Core présentes :**
- Executive Summary : ✅ Présent
- Success Criteria : ✅ Présent (Critères de succès)
- Product Scope : ✅ Présent (Scoping projet & développement phasé)
- User Journeys : ✅ Présent (Parcours utilisateurs)
- Functional Requirements : ✅ Présent (Exigences fonctionnelles)
- Non-Functional Requirements : ✅ Présent (Exigences non fonctionnelles)

**Classification du format :** BMAD Standard
**Sections core présentes :** 6/6

### Validation de la densité informationnelle

**Anti-patterns détectés :**

**Filler conversationnel :** 0 occurrence

**Phrases verbeuses :** 0 occurrence

**Phrases redondantes :** 0 occurrence

**Total violations :** 0

**Évaluation de sévérité :** ✅ Pass

**Recommandation :** Le PRD démontre une excellente densité informationnelle avec zéro violation. Chaque phrase porte du poids informationnel sans filler.

### Couverture du Product Brief

**Product Brief :** product-brief-appvise_consulting-2026-03-21.md

#### Carte de couverture

**Vision :** ✅ Couvert intégralement — Executive Summary reprend la vision du Brief

**Utilisateurs cibles :** ⚠️ Partiellement couvert — Sophie, Thomas, Lucas, Le déçu (Marc) présents. Amélie (photographe) absente, remplacée par Nadia (naturopathe) + Guillaume (admin). Choix de personas plus diversifié dans le PRD.

**Problem Statement :** ✅ Couvert intégralement — 10-15h/semaine admin, entrepreneurs non-techniques

**Features clés :** ✅ Couvert intégralement — toutes les features MVP du Brief sont dans les FRs

**Objectifs/Métriques :** ✅ Couvert intégralement — KPIs identiques entre Brief et PRD

**Différenciateurs :** ✅ Couvert intégralement — 3 différenciateurs repris dans "Ce qui rend ce produit spécial"

#### Synthèse de couverture

**Couverture globale :** ~95% — excellente couverture
**Écarts critiques :** 0
**Écarts modérés :** 0
**Écarts informationnels :** 2
- Persona Amélie (photographe) absente — remplacée par Nadia + Guillaume (choix légitime)
- Études de cas divergentes : HenaMed reporté post-MVP, SideCare + MH'D ASSUR ajoutés (décision de scoping justifiée)

**Recommandation :** Le PRD couvre très bien le contenu du Product Brief. Les divergences sont des décisions de scoping intentionnelles et documentées.

### Validation de mesurabilité

#### Exigences fonctionnelles

**Total FRs analysées :** 29

**Violations de format (non "[Acteur] peut [capacité]") :** 10
- FR16 : "Chaque page possède des balises meta..." (spécification système, ligne 346)
- FR17 : "Le site génère automatiquement un sitemap XML" (spécification système, ligne 347)
- FR18 : "Le site inclut des données structurées..." (spécification système, ligne 348)
- FR19 : "Chaque page possède des balises Open Graph..." (spécification système, ligne 349)
- FR20 : "Les soumissions de formulaires Tally sont transmises à Airtable..." (spécification intégration, ligne 354)
- FR21 : "Les réservations Zcal sont transmises à Airtable..." (spécification intégration, ligne 355)
- FR22 : "Les complétions de quiz déclenchent un envoi..." (spécification intégration, ligne 356)
- FR24 : "Le site track les événements de conversion..." (spécification système, ligne 361)
- FR28 : "Tout le contenu du site utilise un langage zéro jargon technique" (principe de contenu, ligne 335)
- FR29 : "La page d'accueil nomme explicitement les anti-patterns..." (principe de contenu, ligne 336)

**Adjectifs subjectifs :** 2
- FR27 : "sans redéploiement complexe" — "complexe" est subjectif (ligne 367)
- FR28 : "langage zéro jargon technique" — non mesurable objectivement (ligne 335)

**Quantificateurs vagues :** 1
- FR25 : "via un outil analytics" — outil non spécifié (ligne 362)

**Fuite d'implémentation :** 0
- Les mentions de Tally, Zcal, Airtable, n8n sont des services tiers requis, pas des choix d'implémentation

**Total violations FR :** 13

#### Exigences non fonctionnelles

**Total NFRs analysées :** 18

**Métriques manquantes :** 1
- NFR7 : "chargement asynchrone sans bloquer le rendu" — pas de métrique spécifique (ligne 379)

**Template incomplet (contexte manquant) :** 3
- NFR2 : FID < 100ms — conditions de test non spécifiées (ligne 374)
- NFR3 : CLS < 0.1 — conditions de test non spécifiées (ligne 375)
- NFR4 : TTFB < 800ms — conditions de test non spécifiées (ligne 376)

**Total violations NFR :** 4

#### Évaluation globale

**Total exigences :** 47 (29 FRs + 18 NFRs)
**Total violations :** 17

**Sévérité :** ⚠️ Critical (>10 violations)

**Recommandation :** La majorité des violations FR concernent des exigences système (SEO, intégrations, analytics) qui ne suivent pas le format "[Acteur] peut [capacité]". Ces FRs pourraient être reclassées en spécifications techniques ou reformulées. Les NFRs sont globalement bien mesurables — seul le contexte de test est manquant pour quelques Core Web Vitals.

### Validation de traçabilité

#### Validation des chaînes

**Executive Summary → Critères de succès :** ✅ Intact — la vision conversion/leads est directement supportée par les KPIs

**Critères de succès → Parcours utilisateurs :** ✅ Intact — chaque critère de succès est couvert par au moins un parcours

**Parcours utilisateurs → Exigences fonctionnelles :** ✅ Intact — chaque parcours est supporté par les FRs correspondants

**Scope → Alignement FRs :** ✅ Intact — toutes les capacités MVP sont couvertes par des FRs

#### Éléments orphelins

**FRs orphelines :** 1
- FR28 : "langage zéro jargon technique" — principe de contenu transversal, pas traçable à un parcours spécifique (supporte la stratégie globale)

**Critères de succès non supportés :** 0

**Parcours sans FRs :** 0

#### Matrice de traçabilité (synthèse)

| Parcours | FRs supportant |
|---|---|
| Sophie (LinkedIn→Audit) | FR1, FR3, FR6, FR7, FR8, FR10, FR14 |
| Thomas (SEO→Audit) | FR2, FR7, FR9, FR10, FR16-FR19 |
| Lucas (Quiz→Audit) | FR1, FR4, FR5, FR22 |
| Marc (Méfiance→Audit) | FR1, FR7, FR8, FR10, FR14 |
| Guillaume (Admin) | FR20-FR21, FR23, FR25, FR26, FR27 |

**Total problèmes de traçabilité :** 1

**Sévérité :** ✅ Pass

**Recommandation :** La chaîne de traçabilité est solide. Seule FR28 est un principe de contenu transversal qui pourrait être déplacé dans une section "Principes de contenu" plutôt que d'être un FR formel.

### Validation de fuite d'implémentation

#### Fuite par catégorie

**Frontend Frameworks :** 0 violation
**Backend Frameworks :** 0 violation
**Databases :** 0 violation
**Cloud Platforms :** 0 violation
**Infrastructure :** 0 violation
**Libraries :** 0 violation
**Autres détails d'implémentation :** 1 violation mineure
- FR20/FR21 : "via webhook n8n" — le terme "webhook" spécifie le mécanisme de transmission (HOW) plutôt que le besoin (WHAT). Pourrait être reformulé en "les données sont transmises à Airtable via n8n".

#### Synthèse

**Total violations de fuite d'implémentation :** 1

**Sévérité :** ✅ Pass

**Recommandation :** Pas de fuite d'implémentation significative. Les mentions de Tally, Zcal, Airtable, n8n sont des services tiers requis par le client et constituent des exigences de capacité, pas des choix d'implémentation.

**Note :** La section "Considérations d'implémentation" mentionne des patterns d'architecture (MPA, SSG) mais elle est correctement séparée des FRs/NFRs.

### Validation de conformité domaine

**Domaine :** general
**Complexité :** Faible (general/standard)
**Évaluation :** N/A — Pas d'exigences de conformité réglementaire spécifiques

**Note :** Ce PRD concerne un domaine standard (consulting/services B2B) sans contraintes réglementaires.

### Validation de conformité projet-type

**Type de projet :** web_app

#### Sections requises

| Section | Statut |
|---|---|
| browser_matrix | ✅ Présent — "Compatibilité navigateurs" |
| responsive_design | ✅ Présent — "Design responsive" |
| performance_targets | ✅ Présent — "Cibles de performance" |
| seo_strategy | ✅ Présent — "Stratégie SEO" |
| accessibility_level | ✅ Présent — "Accessibilité" |

#### Sections exclues (ne doivent pas être présentes)

| Section | Statut |
|---|---|
| native_features | ✅ Absent |
| cli_commands | ✅ Absent |

#### Synthèse conformité

**Sections requises :** 5/5 présentes
**Sections exclues présentes :** 0 (aucune violation)
**Score de conformité :** 100%

**Sévérité :** ✅ Pass

**Recommandation :** Toutes les sections requises pour un projet web_app sont présentes et bien documentées. Aucune section inappropriée n'est incluse.

### Validation SMART des exigences fonctionnelles

**Total FRs :** 29

#### Synthèse scoring

**Tous scores ≥ 3 :** 93.1% (27/29)
**Tous scores ≥ 4 :** 82.8% (24/29)
**Score moyen global :** 4.7/5.0

#### Table de scoring

| FR | S | M | A | R | T | Moy | Flag |
|---|---|---|---|---|---|---|---|
| FR1 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR2 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR3 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR4 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR5 | 4 | 4 | 5 | 5 | 5 | 4.6 | |
| FR6 | 5 | 4 | 5 | 5 | 5 | 4.8 | |
| FR7 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR8 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR9 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR10 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR11 | 5 | 5 | 5 | 4 | 4 | 4.6 | |
| FR12 | 4 | 5 | 5 | 5 | 4 | 4.6 | |
| FR13 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR14 | 4 | 5 | 5 | 5 | 5 | 4.8 | |
| FR15 | 3 | 3 | 5 | 5 | 5 | 4.2 | |
| FR16 | 4 | 3 | 5 | 5 | 4 | 4.2 | |
| FR17 | 5 | 5 | 5 | 5 | 4 | 4.8 | |
| FR18 | 5 | 5 | 5 | 5 | 4 | 4.8 | |
| FR19 | 5 | 5 | 5 | 5 | 4 | 4.8 | |
| FR20 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR21 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR22 | 4 | 4 | 5 | 5 | 5 | 4.6 | |
| FR23 | 4 | 5 | 5 | 5 | 5 | 4.8 | |
| FR24 | 5 | 4 | 5 | 5 | 5 | 4.8 | |
| FR25 | 3 | 3 | 5 | 5 | 5 | 4.2 | |
| FR26 | 5 | 5 | 5 | 5 | 5 | 5.0 | |
| FR27 | 3 | 2 | 5 | 5 | 5 | 4.0 | X |
| FR28 | 3 | 2 | 4 | 5 | 2 | 3.2 | X |
| FR29 | 4 | 4 | 5 | 5 | 4 | 4.4 | |

**Légende :** 1=Faible, 3=Acceptable, 5=Excellent — **Flag X** = Score < 3 dans au moins une catégorie

#### Suggestions d'amélioration

**FR27** (M=2) : "sans redéploiement complexe" → Remplacer par une métrique : "Le déploiement d'une modification de contenu se fait en moins de 5 minutes" (déjà couvert par NFR18 — considérer fusionner ou reformuler)

**FR28** (M=2, T=2) : "langage zéro jargon technique" → Principe de contenu non mesurable et non traçable à un parcours. Recommandation : déplacer dans une section "Principes éditoriaux" ou reformuler en critère testable ("aucun terme technique non expliqué dans le contenu visible")

#### Évaluation globale

**Sévérité :** ✅ Pass (6.9% FRs flaggées, < 10%)

**Recommandation :** Les exigences fonctionnelles démontrent une très bonne qualité SMART globale (score moyen 4.7/5). Seules FR27 et FR28 nécessitent un ajustement — ce sont des principes de contenu plutôt que des capacités mesurables.

### Évaluation holistique de la qualité

#### Flow & Cohérence du document

**Évaluation :** Good (4/5)

**Points forts :**
- Progression logique de la vision aux spécifications détaillées
- Parcours utilisateurs narratifs riches avec prénoms, contextes et chiffres concrets
- Tableau de synthèse des capacités faisant le pont entre parcours et FRs
- Parcours d'échec (Nadia) et parcours admin (Guillaume) ajoutent de la profondeur

**Axes d'amélioration :**
- La section "Exigences spécifiques Web App" interrompt légèrement le flow entre parcours utilisateurs et scoping
- FR28-FR29 (principes de contenu) mélangés avec les FRs de capacité

#### Efficacité double audience

**Pour les humains :**
- Executive-friendly : ✅ Vision claire, ROI chiffré, KPIs mesurables
- Clarté développeur : ✅ FRs numérotées, intégrations spécifiées, NFRs avec métriques
- Clarté designer : ✅ Parcours utilisateurs → flows d'interaction, besoins clairs
- Prise de décision stakeholder : ✅ Phasing MVP/V2 clair, risques évalués

**Pour les LLMs :**
- Structure machine-readable : ✅ Headers ## cohérents, tables, numérotation
- Prêt pour UX : ✅ Parcours utilisateurs détaillés → interaction flows
- Prêt pour architecture : ✅ NFRs avec métriques, intégrations documentées, considérations techniques
- Prêt pour épics/stories : ✅ FRs numérotées, scoping phasé, capacités mappées aux parcours

**Score double audience :** 5/5

#### Conformité aux principes BMAD PRD

| Principe | Statut | Notes |
|---|---|---|
| Densité informationnelle | ✅ Respecté | 0 violation — excellent |
| Mesurabilité | ⚠️ Partiel | 17 violations de format (FRs système), contenu mesuré pour l'essentiel |
| Traçabilité | ✅ Respecté | Chaîne solide, 1 orphelin mineur (FR28) |
| Conscience domaine | ✅ Respecté | Domaine general correctement identifié |
| Zéro anti-patterns | ✅ Respecté | Aucun filler, aucune redondance |
| Double audience | ✅ Respecté | Excellent pour humains et LLMs |
| Format Markdown | ✅ Respecté | Structure propre et professionnelle |

**Principes respectés :** 6/7

#### Note globale de qualité

**Note :** 4/5 — Good : PRD solide avec des améliorations mineures nécessaires

#### Top 3 des améliorations

1. **Reformuler les FRs système au format BMAD**
   FR16-FR22 et FR24 sont des spécifications système qui ne suivent pas le format "[Acteur] peut [capacité]". Les reformuler ou les reclasser en "Spécifications techniques" pour respecter le standard BMAD tout en conservant leur contenu.

2. **Rendre FR27 et FR28 mesurables ou les séparer**
   Ces deux FRs sont des principes (contenu éditorial, maintenabilité) plutôt que des capacités testables. Les déplacer dans une section "Principes" dédiée ou les reformuler avec des critères mesurables.

3. **Compléter le contexte des NFR2-NFR4**
   FID < 100ms, CLS < 0.1, TTFB < 800ms manquent de contexte de test (conditions de charge, type d'appareil, réseau). Ajouter "sur mobile 4G" comme pour NFR1 (LCP).

#### Résumé

**Ce PRD est :** un document de haute qualité, dense et bien structuré, prêt pour la consommation par les agents BMAD en aval (UX, Architecture, Épics) avec des ajustements mineurs de format.

**Pour le rendre excellent :** se concentrer sur les 3 améliorations ci-dessus.

### Validation de complétude

#### Variables de template

**Variables de template trouvées :** 0 — Aucun placeholder restant ✓

#### Complétude du contenu par section

**Executive Summary :** ✅ Complet — vision, différenciateurs, cible
**Critères de succès :** ✅ Complet — utilisateur, business, technique, KPIs
**Scoping projet :** ✅ Complet — MVP, post-MVP phases 2 et 3, risques
**Parcours utilisateurs :** ✅ Complet — 6 parcours narratifs
**Exigences fonctionnelles :** ✅ Complet — 29 FRs numérotées
**Exigences non fonctionnelles :** ✅ Complet — 18 NFRs avec métriques
**Classification du projet :** ✅ Complet
**Exigences spécifiques Web App :** ✅ Complet

#### Complétude section-spécifique

**Critères de succès mesurables :** ✅ Tous — chaque critère a un indicateur et une cible
**Parcours couvrent tous les types d'utilisateurs :** ✅ Oui — prospects (4 profils), échec (1), admin (1)
**FRs couvrent le scope MVP :** ✅ Oui — toutes les capacités MVP sont couvertes
**NFRs ont des critères spécifiques :** ⚠️ Most — NFR2-4 manquent de contexte, NFR7 manque de métrique

#### Complétude du frontmatter

**stepsCompleted :** ✅ Présent (12 étapes documentées)
**classification :** ✅ Présent (projectType, domain, complexity, projectContext)
**inputDocuments :** ✅ Présent (3 documents référencés)
**date :** ⚠️ Absent du frontmatter (présent dans le header du document "Date: 2026-03-21")

**Complétude frontmatter :** 3.5/4

#### Synthèse de complétude

**Complétude globale :** 95% (toutes les sections présentes et remplies)

**Écarts critiques :** 0
**Écarts mineurs :** 2
- Champ `date` absent du frontmatter (présent dans le corps du document)
- NFR2-4 manquent de contexte de test

**Sévérité :** ✅ Pass

**Recommandation :** Le PRD est complet avec toutes les sections requises et le contenu présent. Ajouter le champ `date` au frontmatter pour la cohérence.

---

## Synthèse finale de validation

### Statut global : ✅ Pass

### Résultats rapides

| Vérification | Résultat |
|---|---|
| Format | BMAD Standard (6/6 sections) |
| Densité informationnelle | ✅ Pass (0 violation) |
| Couverture Product Brief | ✅ ~95% |
| Mesurabilité | ⚠️ Critical (17 violations — format FRs) |
| Traçabilité | ✅ Pass (1 orphelin mineur) |
| Fuite d'implémentation | ✅ Pass (1 violation mineure) |
| Conformité domaine | N/A (général) |
| Conformité projet-type | ✅ 100% |
| Qualité SMART | ✅ Pass (93.1% acceptables) |
| Qualité holistique | 4/5 — Good |
| Complétude | ✅ 95% |

### Problèmes critiques : 0

### Avertissements : 3
1. 10 FRs système ne suivent pas le format "[Acteur] peut [capacité]"
2. FR27 et FR28 contiennent des termes subjectifs/non mesurables
3. NFR2-4 manquent de contexte de test

### Points forts
- Excellente densité informationnelle — zéro filler
- Parcours utilisateurs narratifs riches et concrets (6 parcours dont 1 échec)
- Chaîne de traçabilité solide de la vision aux FRs
- Structure parfaitement conforme au type web_app
- Double audience (humains + LLMs) très bien servie
- Scoping MVP/V2/V3 clair et pragmatique

### Note holistique : 4/5 — Good

### Top 3 des améliorations
1. **Reformuler les FRs système** (FR16-FR22, FR24) au format BMAD ou les reclasser
2. **Rendre FR27/FR28 mesurables** ou les déplacer dans une section "Principes"
3. **Ajouter le contexte de test** aux NFR2-4 ("sur mobile 4G" comme NFR1)

### Recommandation
Le PRD est en bonne forme et prêt pour la suite du workflow BMAD. Les améliorations identifiées sont mineures (format, pas de fond) et n'empêchent pas la consommation en aval par les agents UX, Architecture et Épics.
