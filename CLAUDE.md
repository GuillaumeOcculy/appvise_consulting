# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Design System (source de vérité)

Charte/design system officiel Appvise Consulting — **handoff Claude Design** (claude.ai/design) :
**https://api.anthropic.com/v1/design/h/vtBYVzB2FhkNoPUiHTGbgQ**
(tar.gz ~115 Mo : `tokens/`, `guidelines/`, `SKILL.md`, `assets/`, `templates/` social + vidéo Reels 9:16.)

Le site **implémente déjà fidèlement** ce système dans `src/app/globals.css` (theme Tailwind v4 `@theme`).
Quand tu ajoutes ou modifies du code, **réutilise les tokens/classes existants — n'invente pas de styles** :
classes `bg-surface` / `bg-surface-2`, `border-border` / `border-border-strong`, `text-text-muted`,
`text-primary` (corail), `font-heading`, radii `rounded-2xl`/`rounded-[24px]`, `shadow-lg`/`shadow-accent`,
`.bg-signature`, `.accent-dot`.

Non-négociables (dark-first, FR) :
- Fond **Near Black `#020207`** ou **gradient signature** — reproduire à l'identique, jamais approximer.
- **Corail `#FF4D6D` = accent uniquement** (boutons, liens, mots d'emphase, point carré) — jamais grande surface.
- Police unique **Inter** (Semibold titres/logo, Regular corps), tracking titres négatif (`-0.02em`/`-0.03em`).
- **Point carré corail** : fin de wordmark ou bas-droite d'un bloc, jamais centré, radius 0.
- Eyebrows/labels en **MAJUSCULES**, tracking `0.2em`, 11px semibold.
- Voix : directe, concrète, orientée résultat, français, **sans emoji ni buzzword**.
- Cobalt `#102A8F` + Framboise `#9C1A50` n'existent **que** dans le gradient signature.

Re-télécharger via l'URL ci-dessus pour les assets/templates complets (social, vidéo).

## Project Overview

This is an **Appvise Consulting** project workspace using the **BMAD Method v6.2.0** (BMad framework) for AI-assisted product development. It is not a traditional codebase — it is a structured methodology workspace with AI agents, workflows, and planning/implementation artifacts.

## User Configuration

- **User name**: Onizuka
- **Communication language**: French
- **Document output language**: French

## BMAD Structure

- `_bmad/` — Framework installation (do not modify manually)
  - `core/` — Core module: shared skills (brainstorming, reviews, distillation, etc.)
  - `bmm/` — BMad Method module: full product lifecycle workflows and agents
  - `bmb/` — BMad Builder module: agent/workflow creation tools
  - `_config/` — Manifests, agent/skill/workflow registries
  - `_memory/` — Persistent agent memory (e.g., tech-writer standards)
- `_bmad-output/` — Generated artifacts
  - `planning-artifacts/` — PRDs, briefs, architecture docs, UX designs, epics/stories
  - `implementation-artifacts/` — Sprint plans, story specs, code review reports
- `docs/` — Project documentation
- `.cursor/skills/` — Cursor IDE skill definitions (mirrors BMAD skills)

## BMAD Workflow Phases

The BMad Method follows a phased approach. Use `/bmad-help` to see available commands:

1. **Analysis** (phase 1): Brainstorm (BP), Market/Domain/Technical Research (MR/DR/TR), Create Brief (CB)
2. **Planning** (phase 2): Create PRD (CP), Validate PRD (VP), Edit PRD (EP), Create UX (CU)
3. **Solutioning** (phase 3): Create Architecture (CA), Create Epics & Stories (CE), Check Implementation Readiness (IR)
4. **Implementation** (phase 4): Sprint Planning (SP), Sprint Status (SS), Create Story (CS), Dev Story (DS), QA Automation (QA), Code Review (CR), Retrospective (ER)
5. **Anytime**: Quick Spec (QS), Quick Dev (QD), Document Project (DP), Correct Course (CC), Write Document (WD)

## Key Agents

Each agent has a persona name used in party mode discussions:
- **Mary** (Analyst), **John** (PM), **Sally** (UX Designer), **Winston** (Architect)
- **Bob** (Scrum Master), **Amelia** (Developer), **Quinn** (QA Engineer)
- **Barry** (Quick Flow Solo Dev), **Paige** (Technical Writer)

## Working with This Project

- All BMAD skills are invoked via `/bmad-*` slash commands (e.g., `/bmad-create-prd`, `/bmad-dev-story`)
- Generated artifacts go to `_bmad-output/planning-artifacts/` or `_bmad-output/implementation-artifacts/`
- The `_bmad/` directory is framework-managed — edits should go through BMAD builder tools
- Use `/bmad-help` when unsure what to do next in the workflow
