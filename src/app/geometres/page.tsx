import Image from 'next/image'
import {
  Layers,
  ClipboardCheck,
  CalendarCheck,
  Users,
  FileCheck,
  Landmark,
  ShieldCheck,
  Star,
  ExternalLink,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import CheckItem from '@/components/ui/CheckItem'
import { createMetadata } from '@/lib/metadata'
import { SITE_URL } from '@/lib/constants'

// ── À compléter avant mise en ligne ────────────────────────────────
// Tarif aligné sur la page /avocats pour la cohérence entre les deux
// pages métier (cf. instruction : « reprends le même montant »).
// `null` → affiche « communiqué à l'appel de cadrage ».
const PACK_PRICE: string | null = '2 000' // prix ferme HT ; `null` → « communiqué au cadrage »
const BOOKING_OPTION_PRICE = '500' // option prise de RDV en ligne avec acompte, € HT
// ───────────────────────────────────────────────────────────────────

const CASE_TESTIMONIAL =
  "J'ai pu disposer rapidement d'un site professionnel pour présenter mon activité et permettre à mes clients de me contacter facilement. Sans cet accompagnement, la création du site aurait été plus complexe et plus longue. Le processus a été clair et rassurant dès le départ, et j'utilise le site tous les jours."

const PAGE_TITLE =
  'Création de site internet pour géomètre-expert — conforme Ordre & référencé | Appvise Consulting'

const baseMetadata = createMetadata({
  title: PAGE_TITLE,
  description:
    "Un site pensé pour le géomètre-expert : visibilité locale sur « prix bornage + ville », demandes qualifiées de bornage et division, et conformité au code des devoirs professionnels. Forfait clair.",
  path: '/geometres',
})

export const metadata = {
  ...baseMetadata,
  // Le layout applique un template « %s | Appvise Consulting » ; le titre
  // contenant déjà le suffixe, on le déclare en `absolute` pour éviter le doublon.
  title: { absolute: PAGE_TITLE },
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-primary text-[13px] font-semibold uppercase tracking-[0.2em]">
      {children}
    </p>
  )
}

const painPoints = [
  {
    title: 'Vous êtes invisible face aux gros cabinets',
    body: 'Quand un particulier tape « géomètre bornage + votre ville », il tombe sur les cabinets régionaux ou les annuaires. Sans site optimisé, vous n’existez pas dans cette recherche — même si vous êtes le plus proche et le plus disponible.',
  },
  {
    title: 'Les demandes de devis vous font perdre des heures',
    body: 'Appels pendant vos relevés terrain, demandes floues (« c’est combien un géomètre ? »), devis rédigés pour des dossiers qui ne signent jamais. Chaque demande non qualifiée, c’est du temps facturable perdu.',
  },
  {
    title: 'Votre communication est encadrée par l’Ordre',
    body: 'Le code des devoirs professionnels limite votre publicité à l’information sur votre activité, avec modération et correction, et elle doit être communiquée au conseil régional. Un site mal conçu peut vous exposer à un rappel à l’ordre.',
  },
]

const solutionBlocks = [
  {
    icon: Layers,
    title: 'Une page par prestation',
    body: 'Bornage, division parcellaire, copropriété et état descriptif de division, plan topographique, implantation. Chaque page répond aux vraies questions de vos clients (déroulement, délais, calcul du coût) et se positionne sur les recherches locales.',
  },
  {
    icon: ClipboardCheck,
    title: 'Un formulaire de pré-qualification',
    body: 'Avant même de vous appeler, le visiteur précise sa demande : type de prestation, localisation de la parcelle, contexte (vente, construction, litige). Vous recevez des demandes structurées, pas des appels à froid.',
  },
  {
    icon: CalendarCheck,
    title: 'Une prise de rendez-vous en ligne',
    body: 'Vos disponibilités sont visibles, le client réserve son créneau — avec acompte en ligne si vous le souhaitez. Fini le ping-pong téléphonique.',
  },
  {
    icon: Users,
    title: 'Une section pour vos prescripteurs',
    body: 'Notaires, architectes, promoteurs et collectivités représentent une part importante de vos dossiers. Une page dédiée leur montre que vous êtes structuré pour travailler avec eux.',
  },
]

const complianceCards = [
  {
    icon: FileCheck,
    title: 'Contenu conforme',
    body: 'Information strictement factuelle sur votre activité de géomètre-expert, ton sobre, sans comparaison ni démarchage — les formulations sont pensées ainsi dès la première maquette.',
  },
  {
    icon: Landmark,
    title: 'Mentions complètes',
    body: 'Inscription au tableau de l’Ordre, assurance RC professionnelle et conseil régional de rattachement : les mentions obligatoires sont intégrées, pas ajoutées après coup.',
  },
  {
    icon: ShieldCheck,
    title: 'Communication préalable',
    body: 'Vous repartez avec un dossier prêt à transmettre à votre conseil régional. Et je vous accompagne s’il a des questions — vous n’avez pas à devenir juriste de votre propre communication.',
  },
]

const seoSteps = [
  'Pages prestations optimisées sur les requêtes locales à forte intention',
  'Fiche Google Business Profile configurée et reliée au site',
  'Contenu qui répond aux vraies questions (coût, délais, obligations légales du bornage)',
  'Structure technique propre : rapide, mobile, indexable',
]

const caseDeliverables = [
  'Un site vitrine complet avec pages prestations',
  'Un système de prise de rendez-vous en ligne avec paiement intégré',
  'Un formulaire de diagnostic qui qualifie chaque demande avant le premier contact',
  'Un espace de tutoriels vidéo pour prendre en main les outils du site (demandes, rendez-vous)',
]

const methodSteps = [
  {
    title: 'Appel découverte',
    aside: 'gratuit, 30 min',
    body: 'On clarifie vos prestations, votre zone d’intervention et vos objectifs. Sans engagement.',
  },
  {
    title: 'Maquette et contenu',
    body: 'Je rédige avec vous des textes justes techniquement et conformes aux règles de l’Ordre. Vous ne partez pas d’une page blanche.',
  },
  {
    title: 'Développement et mise en ligne',
    body: 'Site rapide, sécurisé, optimisé pour le référencement local, mis en ligne sur hébergement européen.',
  },
  {
    title: 'Formation et prise en main',
    body: 'Tutoriels vidéo personnalisés pour piloter votre site au quotidien — suivi des demandes, gestion des rendez-vous. Pour faire évoluer le site, je prends le relais.',
  },
]

const faq = [
  {
    q: 'Combien de temps pour mettre le site en ligne ?',
    a: 'Comptez 4 à 6 semaines entre l’appel découverte et la mise en ligne, selon la rapidité de validation des contenus.',
  },
  {
    q: 'Puis-je modifier le site moi-même ensuite ?',
    a: 'Le site est développé sur-mesure, sans interface d’administration à la WordPress : les modifications du site passent par moi. En revanche, vous pilotez en autonomie les outils du quotidien (demandes qualifiées, rendez-vous), avec des tutoriels vidéo dédiés.',
  },
  {
    q: 'Le site sera-t-il conforme aux règles de l’Ordre ?',
    a: 'Oui. Le contenu respecte le code des devoirs professionnels (information sur l’activité uniquement, ton sobre), et je vous prépare le dossier de communication pour votre conseil régional.',
  },
  {
    q: 'Faut-il afficher mes tarifs ?',
    a: 'Rien ne vous y oblige. En revanche, expliquer comment se calcule le coût d’un bornage ou d’une division rassure les visiteurs et filtre les demandes irréalistes. On en discute ensemble.',
  },
  {
    q: 'Que se passe-t-il si j’ai besoin de modifications après la livraison ?',
    a: 'Les bugs sont couverts 30 jours. Pour les évolutions (nouvelle page, nouvelle fonctionnalité), un forfait maintenance ou un devis ponctuel prend le relais — tout est cadré dès le départ.',
  },
  {
    q: 'Travaillez-vous avec des géomètres partout en France ?',
    a: 'Oui, y compris en outre-mer. Tout se fait à distance : visio, partage d’écran, validation en ligne.',
  },
]

export default function GeometresPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Création de site internet pour géomètre-expert',
        serviceType: 'Création de site internet pour géomètre-expert',
        provider: {
          '@type': 'Organization',
          name: 'Appvise Consulting',
          url: SITE_URL,
        },
        areaServed: { '@type': 'Country', name: 'France' },
        description:
          'Sites internet sur-mesure pour géomètres-experts : pages prestations optimisées pour le référencement local, formulaire de pré-qualification et conformité au code des devoirs professionnels.',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '1',
          bestRating: '5',
          worstRating: '1',
        },
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1',
          },
          author: { '@type': 'Person', name: 'Laurent Bazile' },
          reviewBody: CASE_TESTIMONIAL,
          itemReviewed: {
            '@type': 'Service',
            name: 'Création de site internet pour géomètre-expert',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
            .replace(/</g, '\\u003c')
            .replace(/>/g, '\\u003e')
            .replace(/&/g, '\\u0026'),
        }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="text-white pt-36 pb-20 lg:pt-52 lg:pb-24"
      >
        <div className="max-w-3xl mx-auto text-center px-4">
          <Eyebrow>Sites internet pour géomètres-experts</Eyebrow>
          <h1
            id="hero-heading"
            className="font-heading font-semibold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.03em] mt-6"
          >
            Un site conforme aux règles de l&apos;Ordre, qui vous amène des{' '}
            <span className="text-primary">
              demandes qualifiées de bornage et de division.
            </span>
          </h1>
          <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
            Un site professionnel qui vous apporte des demandes qualifiées de
            bornage, division et topographie — et qui filtre les demandes avant
            qu&apos;elles ne vous fassent perdre du temps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button variant="primary" href="/rendez-vous">
              Réserver un appel gratuit
            </Button>
            <Button variant="secondary" href="#offre">
              Voir ce que comprend l&apos;offre
            </Button>
          </div>
          <p className="text-text-faint text-sm mt-6">
            Déjà réalisé pour un cabinet de géomètre-expert —{' '}
            <a
              href="#cas-client"
              className="text-white/70 underline underline-offset-4 hover:text-primary transition-colors"
            >
              voir le cas client
            </a>
            .
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 mt-14">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-text-muted">
            {[
              '14 ans de développement',
              'Conforme au code des devoirs professionnels',
              'Hébergement européen (RGPD)',
              'Forfait sans surprise',
            ].map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-text-faint">
                    &middot;
                  </span>
                )}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── DOULEURS ─────────────────────────────────────── */}
      <section
        aria-labelledby="pain-heading"
        className="text-white py-16 lg:py-24"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Le problème</Eyebrow>
            <h2
              id="pain-heading"
              className="font-heading font-semibold text-2xl md:text-4xl mt-4"
            >
              Votre expertise est sur le terrain. Votre visibilité, elle, se joue
              sur Google.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="bg-surface border border-border rounded-2xl p-6"
              >
                <h3 className="font-heading font-semibold text-lg text-white">
                  {point.title}
                </h3>
                <p className="text-text-muted text-[15px] leading-relaxed mt-3">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────── */}
      <section
        id="offre"
        aria-labelledby="solution-heading"
        className="text-white py-16 lg:py-24 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>La réponse</Eyebrow>
            <h2
              id="solution-heading"
              className="font-heading font-semibold text-2xl md:text-4xl mt-4"
            >
              Un site conçu pour le métier de géomètre-expert.
            </h2>
            <p className="text-text-muted text-lg mt-4">
              Chaque site est développé sur-mesure, sans CMS générique, autour de
              ce que cherchent réellement vos clients — particuliers comme
              prescripteurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {solutionBlocks.map((block) => (
              <div
                key={block.title}
                className="bg-surface border border-border rounded-2xl p-6"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 mb-4">
                  <block.icon size={20} className="text-primary" />
                </span>
                <h3 className="font-heading font-semibold text-lg text-white">
                  {block.title}
                </h3>
                <p className="text-text-muted text-[15px] leading-relaxed mt-3">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFORMITÉ (différenciateur) ─────────────────── */}
      <section
        aria-labelledby="compliance-heading"
        className="text-white py-16 lg:py-24"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Déontologie</Eyebrow>
            <h2
              id="compliance-heading"
              className="font-heading font-semibold text-2xl md:text-4xl mt-4"
            >
              Conforme aux règles de l&apos;Ordre, dès la conception.
            </h2>
            <p className="text-white/80 text-lg mt-4">
              Votre site est une publicité personnelle au sens du code des devoirs
              professionnels (décret n&deg;96-478, art. 53) : contenu informatif,
              ton sobre, mentions obligatoires. Ces règles sont intégrées dès la
              première maquette — pas corrigées après coup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {complianceCards.map((card) => (
              <div
                key={card.title}
                className="bg-surface border border-border rounded-2xl p-8 text-center"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 mx-auto mb-5">
                  <card.icon size={24} className="text-primary" />
                </span>
                <h3 className="font-heading font-semibold text-lg text-white">
                  {card.title}
                </h3>
                <p className="text-text-muted text-[15px] leading-relaxed mt-3">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO LOCAL ────────────────────────────────────── */}
      <section
        aria-labelledby="seo-heading"
        className="text-white py-16 lg:py-24"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Référencement</Eyebrow>
            <h2
              id="seo-heading"
              className="font-heading font-semibold text-2xl md:text-4xl mt-4"
            >
              Être trouvé par ceux qui vous cherchent déjà.
            </h2>
            <p className="text-text-muted text-lg mt-4">
              Vos futurs clients ne cherchent pas « géomètre-expert ». Ils tapent
              « prix bornage terrain [ville] », « géomètre division parcelle
              [département] », « géomètre pour vendre un terrain ». Le site est
              construit autour de ces recherches.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mt-10 space-y-3">
            {seoSteps.map((step) => (
              <CheckItem key={step}>
                <span className="text-white/85">{step}</span>
              </CheckItem>
            ))}
          </div>

          <p className="text-text-faint text-sm max-w-2xl mx-auto mt-6 text-center leading-relaxed">
            Le référencement se construit dans le temps et dépend de la
            concurrence locale. Ce qui est inclus : des bases solides et bien
            faites — pas une promesse de première place.
          </p>
        </div>
      </section>

      {/* ── CAS CLIENT (section différenciante) ──────────── */}
      <section
        id="cas-client"
        aria-labelledby="case-heading"
        className="text-white py-16 lg:py-24 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Cas client</Eyebrow>
            <h2
              id="case-heading"
              className="font-heading font-semibold text-2xl md:text-4xl mt-4"
            >
              Réalisé pour un cabinet de géomètre-expert.
            </h2>
            <p className="text-text-muted text-lg mt-4">
              Pour le Cabinet Laurent Bazile Géomètre-Expert (Guadeloupe),
              j&apos;ai conçu et livré un site complet et les outils pour le
              piloter en autonomie.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mt-10 space-y-3">
            {caseDeliverables.map((item) => (
              <CheckItem key={item}>
                <span className="text-white/85">{item}</span>
              </CheckItem>
            ))}
          </div>

          {/* Témoignage mis en exergue */}
          <figure className="bg-signature border border-border-strong rounded-[24px] p-8 lg:p-12 mt-12 relative">
            <div
              className="flex items-center gap-1 justify-center md:justify-start"
              role="img"
              aria-label="Note : 5 sur 5"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className="text-primary fill-primary"
                  aria-hidden
                />
              ))}
              <span className="sr-only">Note : 5 sur 5</span>
            </div>

            <blockquote className="font-heading font-semibold text-xl md:text-2xl leading-snug text-white mt-6">
              «&nbsp;{CASE_TESTIMONIAL}&nbsp;»
            </blockquote>

            <figcaption className="mt-6 text-text-muted">
              <span className="text-white font-semibold">Laurent Bazile</span> —
              Géomètre-Expert, Cabinet Laurent Bazile Géomètre-Expert (Guadeloupe)
            </figcaption>

            <div className="mt-6">
              <a
                href="https://clbge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Voir le site&nbsp;: clbge.com
                <ExternalLink size={16} aria-hidden />
              </a>
            </div>

            <span aria-hidden className="accent-dot absolute bottom-6 right-6" />
          </figure>
        </div>
      </section>

      {/* ── MÉTHODE ──────────────────────────────────────── */}
      <section
        aria-labelledby="method-heading"
        className="text-white py-16 lg:py-24"
      >
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center">
            <Eyebrow>La méthode</Eyebrow>
            <h2
              id="method-heading"
              className="font-heading font-semibold text-2xl md:text-4xl mt-4 mb-12"
            >
              Quatre étapes, un seul interlocuteur.
            </h2>
          </div>
          <ol role="list" className="relative">
            {methodSteps.map((step, i) => (
              <li
                key={step.title}
                role="listitem"
                aria-label={`Étape ${i + 1} sur 4`}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {i < methodSteps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
                )}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-heading font-semibold text-sm shrink-0">
                  {i + 1}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-heading font-semibold text-lg">
                    {step.title}
                    {step.aside && (
                      <span className="text-text-muted font-normal text-sm ml-2">
                        · {step.aside}
                      </span>
                    )}
                  </h3>
                  <p className="text-text-muted mt-1 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── TARIF ────────────────────────────────────────── */}
      <section
        aria-labelledby="pricing-heading"
        className="text-white py-16 lg:py-24"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Tarif</Eyebrow>
            <h2
              id="pricing-heading"
              className="font-heading font-semibold text-2xl md:text-4xl mt-4"
            >
              Un forfait clair, sans surprise.
            </h2>
            <p className="text-text-muted text-lg mt-4">
              Pas de facturation au temps passé, pas de dépassement : un périmètre
              défini ensemble, un prix fixe, un délai annoncé.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-[24px] p-8 lg:p-10 mt-10 shadow-[0_24px_64px_rgba(2,2,7,0.55)]">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="font-heading font-semibold text-xl">Pack Cabinet</h3>
              <p className="font-heading font-semibold text-2xl text-primary">
                {PACK_PRICE ? (
                  <>
                    À partir de {PACK_PRICE} €{' '}
                    <span className="text-base">HT</span>
                  </>
                ) : (
                  <span className="text-lg text-white/80">
                    Prix communiqué à l&apos;appel de cadrage
                  </span>
                )}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <CheckItem>
                <span className="text-white/85">
                  Site sur-mesure avec pages prestations (bornage, division,
                  topographie, implantation…)
                </span>
              </CheckItem>
              <CheckItem>
                <span className="text-white/85">
                  Formulaire de pré-qualification des demandes
                </span>
              </CheckItem>
              <CheckItem>
                <span className="text-white/85">
                  Référencement local + Fiche Google Business Profile
                </span>
              </CheckItem>
              <CheckItem>
                <span className="text-white/85">
                  Conformité au code des devoirs professionnels + dossier pour le
                  conseil régional
                </span>
              </CheckItem>
              <CheckItem>
                <span className="text-white/85">
                  Formation (tutoriels vidéo personnalisés) et hébergement européen
                  la première année
                </span>
              </CheckItem>
            </div>

            <div className="border-t border-border mt-8 pt-6">
              <p className="text-sm text-text-faint uppercase tracking-[0.2em] font-semibold mb-4">
                Options
              </p>
              <ul className="space-y-3 text-[15px] text-text-muted leading-relaxed">
                <li>
                  Prise de rendez-vous en ligne avec acompte (créneau réservé =
                  acompte encaissé, zéro no-show)
                  <span className="text-white/80">
                    {' '}
                    — + {BOOKING_OPTION_PRICE} € HT
                  </span>
                </li>
                <li>Espace dédié aux prescripteurs (notaires, architectes…)</li>
                <li>Maintenance mensuelle</li>
              </ul>
            </div>

            <p className="text-sm text-text-faint mt-8">
              Devis précis après l&apos;appel découverte — le prix annoncé est le
              prix payé.
            </p>
          </div>
        </div>
      </section>

      {/* ── GARANTIE ─────────────────────────────────────── */}
      <section
        aria-labelledby="guarantee-heading"
        className="text-white py-16 lg:py-24"
      >
        <div className="text-center max-w-2xl mx-auto px-4 bg-surface border border-border rounded-[24px] py-12 lg:py-16 lg:px-12 shadow-[0_24px_64px_rgba(2,2,7,0.55)]">
          <div className="bg-primary/15 p-4 rounded-full inline-flex mx-auto mb-6">
            <ShieldCheck size={56} className="text-primary" />
          </div>
          <Eyebrow>La garantie</Eyebrow>
          <h2
            id="guarantee-heading"
            className="font-heading font-semibold text-2xl md:text-4xl mt-4"
          >
            Garantie 30 jours.
          </h2>
          <p className="text-white/80 mt-4 text-lg leading-relaxed">
            Après la livraison, tout bug est corrigé gratuitement pendant 30
            jours. Et vous repartez avec des tutoriels vidéo faits pour votre site
            — pas une documentation générique.
          </p>
        </div>
      </section>

      {/* ── À PROPOS ─────────────────────────────────────── */}
      <section
        aria-labelledby="about-heading"
        className="text-white py-16 lg:py-24"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/images/profile_picture.png"
            alt="Guillaume Occuly"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full mx-auto object-cover"
          />
          <div className="mt-6">
            <Eyebrow>Qui suis-je</Eyebrow>
          </div>
          <h2
            id="about-heading"
            className="font-heading font-semibold text-2xl md:text-4xl mt-4"
          >
            Vous parlez au développeur, pas à un commercial.
          </h2>
          <p className="text-white/80 mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
            Je suis Guillaume, développeur web freelance depuis 14 ans. Pas
            d&apos;agence, pas d&apos;intermédiaire, pas de sous-traitance : la
            personne qui comprend votre besoin est celle qui construit votre site.
            J&apos;ai déjà accompagné un cabinet de géomètre-expert de la
            conception à la mise en ligne, avec les spécificités du métier :
            prestations réglementées, clientèle mixte particuliers/prescripteurs,
            communication encadrée par l&apos;Ordre.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="text-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            id="faq-heading"
            className="font-heading font-semibold text-2xl md:text-4xl text-center mb-12"
          >
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group bg-surface border border-border rounded-2xl px-6 py-5 open:border-border-strong"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-heading font-semibold text-lg text-white marker:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="text-primary text-2xl leading-none shrink-0 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="text-text-muted text-[15px] leading-relaxed mt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="text-white py-16 lg:py-24"
      >
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2
            id="cta-heading"
            className="font-heading font-semibold text-2xl md:text-4xl"
          >
            Votre prochain dossier de bornage commence par une recherche Google.
          </h2>
          <p className="text-text-muted mt-4 text-lg max-w-2xl mx-auto">
            Réservez un appel gratuit de 30 minutes. On regarde ensemble votre
            visibilité actuelle et ce qu&apos;un site bien conçu peut changer pour
            votre cabinet.
          </p>
          <div className="flex justify-center mt-10">
            <Button variant="primary" href="/rendez-vous">
              Réserver mon appel découverte
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
