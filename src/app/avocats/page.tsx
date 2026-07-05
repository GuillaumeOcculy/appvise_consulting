import Image from 'next/image'
import {
  User,
  Scale,
  Coins,
  Newspaper,
  Mail,
  MapPin,
  ShieldCheck,
  FileCheck,
  Lock,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import CheckItem from '@/components/ui/CheckItem'
import { createMetadata } from '@/lib/metadata'

// ── À compléter avant mise en ligne ────────────────────────────────
// Le prix et le nombre de pages spécialités ne sont pas encore arrêtés
// (cf. notes de production : attendre les infos prix des confrères).
// Renseigner PACK_PRICE ("2 490", "à partir de 2 490"…) pour afficher un
// tarif ferme ; laisser `null` affiche « communiqué à l'appel de cadrage ».
const PACK_PRICE: string | null = '2 000' // prix ferme HT ; `null` → « communiqué au cadrage »
const SPECIALITY_PAGES_INCLUDED = 'Vos spécialités prioritaires' // ex. '3 pages spécialités'
const BOOKING_OPTION_PRICE = '500' // option prise de RDV en ligne, € HT
// ───────────────────────────────────────────────────────────────────

export const metadata = {
  ...createMetadata({
    title:
      'Création de site internet pour avocat — conforme déontologie & référencé | Appvise Consulting',
    description:
      "Un site conforme au RIN, accompagné jusqu'à la validation par votre Ordre, et construit pour être trouvé sur « avocat + spécialité + ville ». Développement sur-mesure, forfait clair.",
    path: '/avocats',
  }),
  title: {
    absolute:
      'Création de site internet pour avocat — conforme déontologie & référencé | Appvise Consulting',
  },
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-primary text-[13px] font-semibold uppercase tracking-[0.2em]">
      {children}
    </p>
  )
}

const solutionBlocks = [
  {
    icon: User,
    title: 'Votre présentation',
    body: 'Photo professionnelle mise en valeur, parcours, barreau d’inscription. Ce que vos clients regardent en premier.',
  },
  {
    icon: Scale,
    title: 'Une page par spécialité',
    body: 'Droit commercial, droit pénal, droit de la famille… Chaque domaine a sa propre page, rédigée pour être trouvée sur Google — pas une liste fourre-tout.',
  },
  {
    icon: Coins,
    title: 'Vos honoraires, clairement',
    body: 'Temps passé ou forfait : vos modes de facturation expliqués simplement. C’est la première question de vos clients — le premier facteur de confiance.',
  },
  {
    icon: Newspaper,
    title: 'Vos décisions marquantes & presse',
    body: 'Les affaires qui font votre réputation et vos parutions, présentées dans le respect du secret professionnel et des règles de communication.',
  },
  {
    icon: Mail,
    title: 'Contact sans friction',
    body: 'Coordonnées, plan d’accès, formulaire de contact conforme RGPD. En option : prise de rendez-vous en ligne avec consultation prépayée.',
  },
  {
    icon: MapPin,
    title: 'Référencement local',
    body: 'Structure technique optimisée pour « avocat + spécialité + ville », fiche Google Business configurée, temps de chargement maîtrisés.',
  },
]

const complianceCards = [
  {
    icon: FileCheck,
    title: 'Conception conforme',
    body: 'Structure, formulations et mentions alignées sur le Règlement Intérieur National dès le premier jour.',
  },
  {
    icon: ShieldCheck,
    title: 'Accompagnement Ordre',
    body: 'Je prépare avec vous le dossier de soumission à votre Conseil de l’Ordre et j’intègre ses éventuelles demandes de modification, incluses dans le forfait.',
  },
  {
    icon: Lock,
    title: 'Données protégées',
    body: 'Hébergement européen, formulaires conformes RGPD, aucune donnée client transitant hors UE. Cohérent avec votre secret professionnel.',
  },
]

const painPoints = [
  {
    title: 'Le risque déontologique',
    body: 'Vous connaissez un confrère qui a payé un site… refusé par l’Ordre. Les agences généralistes ignorent le RIN : mentions manquantes, formulations interdites, et c’est vous qui portez le risque.',
  },
  {
    title: 'Le site vitrine qui ne sert à rien',
    body: 'Un site que personne ne trouve, c’est une plaquette chère. Pendant ce temps, vos confrères bien référencés reçoivent des dossiers de clients qui ont simplement tapé leur spécialité sur Google.',
  },
  {
    title: 'Le flou sur le prix et le résultat',
    body: 'Devis vagues, dépassements, livrable qui ne ressemble pas à la promesse. Vous facturez au forfait ou au temps passé avec des règles claires — vous êtes en droit d’attendre la même chose de votre prestataire.',
  },
]

const seoSteps = [
  'Une page dédiée par domaine d’intervention, rédigée autour des recherches réelles de vos clients',
  'Fiche Google Business Profile créée ou optimisée (avis, horaires, spécialités)',
  'Base technique rapide et propre — un critère de classement Google à part entière',
  'Suivi simple : vous savez combien de contacts arrivent via le site, mois après mois',
]

const methodSteps = [
  {
    title: 'Cadrage',
    aside: '1 semaine',
    body: 'Un entretien pour définir vos spécialités prioritaires, votre positionnement et vos contraintes déontologiques spécifiques (certains barreaux ont leurs usages).',
  },
  {
    title: 'Conception & rédaction',
    body: 'Maquette et contenus rédigés pour votre validation. Vous ne partez pas d’une page blanche : je propose, vous ajustez.',
  },
  {
    title: 'Développement & mise en ligne',
    body: 'Site développé sur-mesure, testé, mis en ligne sur hébergement européen. Fiche Google configurée.',
  },
  {
    title: 'Validation Ordre & suivi',
    body: 'Accompagnement de la soumission à votre Conseil de l’Ordre. Modifications demandées par l’Ordre incluses. Point de suivi pour mesurer les contacts entrants.',
  },
]

const faq = [
  {
    q: 'Mon Ordre peut-il refuser le site ?',
    a: 'Le risque existe avec un site non conforme — c’est précisément ce que la conception RIN-first évite. Si votre Conseil de l’Ordre demande des modifications, elles sont incluses dans le forfait.',
  },
  {
    q: 'C’est du WordPress ?',
    a: 'Non. Chaque site est développé sur-mesure : plus rapide, plus sécurisé, sans plugins à maintenir ni failles héritées. Un site conçu pour durer — pas pour être refait dans deux ans.',
  },
  {
    q: 'Combien de temps pour être visible sur Google ?',
    a: 'Le site est indexé en quelques jours. Le positionnement sur « avocat + spécialité + ville » se construit sur plusieurs semaines à quelques mois selon la concurrence locale — la structure du site est pensée pour ça dès le départ.',
  },
  {
    q: 'Qui rédige les contenus ?',
    a: 'Je propose une première rédaction complète à partir de notre cadrage ; vous validez et ajustez le fond juridique. Vous ne partez jamais d’une page blanche.',
  },
  {
    q: 'Et après la mise en ligne ?',
    a: 'Hébergement et maintenance inclus la première année. L’objectif n’est pas de livrer un site : c’est qu’il vous amène encore des clients six mois après.',
  },
  {
    q: 'Puis-je ajouter la prise de rendez-vous payée en ligne ?',
    a: 'Oui, en option : le client choisit un créneau et règle la consultation en ligne. Créneau réservé = consultation encaissée, sans passer par votre secrétariat.',
  },
]

export default function AvocatsPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd)
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
          <Eyebrow>Sites internet pour avocats</Eyebrow>
          <h1
            id="hero-heading"
            className="font-heading font-semibold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.03em] mt-6"
          >
            Un site conforme à votre déontologie, qui vous amène des clients{' '}
            <span className="text-primary">sur votre spécialité.</span>
          </h1>
          <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
            Conçu selon les règles du RIN, accompagné jusqu&apos;à la validation
            par votre Conseil de l&apos;Ordre, et construit pour être trouvé sur
            les recherches qui comptent : votre spécialité, dans votre ville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button variant="primary" href="/rendez-vous">
              Réserver un appel gratuit
            </Button>
            <Button variant="secondary" href="#offre">
              Voir ce que comprend l&apos;offre
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 mt-14">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-text-muted">
            {[
              '14 ans de développement',
              'Conformité RIN intégrée',
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
              Trois raisons pour lesquelles les avocats repoussent leur site.
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
              Un site pensé pour le métier d&apos;avocat. Pas un template adapté.
            </h2>
            <p className="text-text-muted text-lg mt-4">
              Chaque site est développé sur-mesure, sans CMS générique, autour de
              ce que vos clients cherchent réellement quand ils choisissent un
              avocat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
              Conforme au RIN dès la conception. Accompagné jusqu&apos;à la
              validation.
            </h2>
            <p className="text-white/80 text-lg mt-4">
              La communication de l&apos;avocat est encadrée : publicité
              personnelle autorisée mais réglementée, mentions obligatoires,
              interdiction du démarchage et des comparatifs. Votre site est conçu
              en intégrant ces règles dès la première maquette — pas corrigé
              après coup.
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
              Vos futurs clients tapent trois mots. Soyez la réponse.
            </h2>
            <p className="text-text-muted text-lg mt-4">
              Quand quelqu&apos;un cherche un avocat, il tape sa situation et sa
              ville : « avocat droit commercial Lyon », « avocat divorce
              Bordeaux ». Pour apparaître sur ces recherches, l&apos;essentiel se
              joue dès la construction du site : une structure claire et des
              fondations propres.
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

          <figure className="bg-signature border border-border-strong rounded-[24px] p-8 lg:p-12 mt-12 relative">
            <blockquote className="font-heading font-semibold text-xl md:text-2xl leading-snug text-white">
              « Le site sert à quelque chose quand il vous amène des clients — et
              des dossiers plus importants. C&apos;est le seul critère. »
            </blockquote>
            <span
              aria-hidden
              className="accent-dot absolute bottom-6 right-6"
            />
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
              Quatre étapes, un interlocuteur unique.
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

      {/* ── HONORAIRES ───────────────────────────────────── */}
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
              Un forfait. Un prix connu avant de commencer.
            </h2>
            <p className="text-text-muted text-lg mt-4">
              Pas de facturation au temps passé, pas de dépassement : un
              périmètre défini ensemble, un prix fixe, un délai annoncé.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-[24px] p-8 lg:p-10 mt-10 shadow-[0_24px_64px_rgba(2,2,7,0.55)]">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="font-heading font-semibold text-xl">Pack Cabinet</h3>
              <p className="font-heading font-semibold text-2xl text-primary">
                {PACK_PRICE ? (
                  <>
                    {PACK_PRICE} € <span className="text-base">HT</span>
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
                  Site sur-mesure (présentation, spécialités, honoraires,
                  décisions/presse, contact)
                </span>
              </CheckItem>
              <CheckItem>
                <span className="text-white/85">
                  {SPECIALITY_PAGES_INCLUDED} incluses
                </span>
              </CheckItem>
              <CheckItem>
                <span className="text-white/85">
                  Conformité RIN + accompagnement validation Ordre
                </span>
              </CheckItem>
              <CheckItem>
                <span className="text-white/85">Fiche Google Business Profile</span>
              </CheckItem>
              <CheckItem>
                <span className="text-white/85">
                  Hébergement européen et maintenance la première année
                </span>
              </CheckItem>
            </div>

            <div className="border-t border-border mt-8 pt-6">
              <p className="text-sm text-text-faint uppercase tracking-[0.2em] font-semibold mb-4">
                Options
              </p>
              <ul className="space-y-3 text-[15px] text-text-muted leading-relaxed">
                <li>
                  Prise de rendez-vous en ligne avec consultation prépayée
                  (créneau réservé = consultation encaissée, zéro no-show)
                  <span className="text-white/80"> — + {BOOKING_OPTION_PRICE} € HT</span>
                </li>
                <li>Page spécialité supplémentaire</li>
                <li>
                  Rédaction d&apos;articles / commentaires de décisions pour
                  renforcer le référencement
                </li>
              </ul>
            </div>

            <p className="text-sm text-text-faint mt-8">
              Devis détaillé après l&apos;appel de cadrage — le prix annoncé est
              le prix payé.
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
            Vous ne soldez que ce qui vous satisfait.
          </h2>
          <p className="text-white/80 mt-4 text-lg leading-relaxed">
            Le paiement est lié à votre satisfaction aux étapes clés du projet.
            Si le résultat ne correspond pas à ce qui a été défini au cadrage,
            vous ne réglez pas le solde. C&apos;est le fonctionnement
            d&apos;Appvise sur tous les projets — les avocats n&apos;y font pas
            exception.
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
            Vous parlez directement au développeur.
          </h2>
          <p className="text-white/80 mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
            Guillaume Occuly, 14 ans de développement. Appvise Consulting
            accompagne les entreprises sur le développement sur-mesure,
            l&apos;automatisation et l&apos;IA. Pas de commercial ni de chef de
            projet intermédiaire : la personne qui conçoit et développe votre
            site est celle à qui vous parlez — du premier appel à la validation
            par votre Ordre.
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
            Parlons de votre cabinet.
          </h2>
          <p className="text-text-muted mt-4 text-lg max-w-2xl mx-auto">
            30 minutes pour cadrer votre projet : vos spécialités, votre barreau,
            vos objectifs. Sans engagement — vous repartez au minimum avec une
            vision claire de ce qu&apos;un site peut vous apporter.
          </p>
          <div className="flex justify-center mt-10">
            <Button variant="primary" href="/rendez-vous">
              Réserver un appel gratuit
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
