import Image from 'next/image'
import {
  User,
  Scale,
  Coins,
  Newspaper,
  CalendarClock,
  Search,
  ShieldCheck,
  FileCheck,
  Lock,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import CheckItem from '@/components/ui/CheckItem'
import { createMetadata } from '@/lib/metadata'

// ── Paramètres tarifaires (forfait ferme) ──────────────────────────
const PACK_PRICE: string | null = '2 000' // prix ferme HT ; `null` → « communiqué au cadrage »
const BOOKING_OPTION_PRICE = '500' // option prise de RDV en ligne, € HT
const EXTRA_SPECIALITY_PRICE = '200' // page spécialité supplémentaire, € HT
// « Moins de X heures de votre temps » — calibré sur le process réel :
// cadrage ~1 h + validation maquette/contenus ~1 h + relecture finale ~45 min.
const CLIENT_TIME = '3 heures'
// ───────────────────────────────────────────────────────────────────

const baseMetadata = createMetadata({
  title:
    'Création de site internet pour avocat — conforme au RIN, validé par votre Ordre | Appvise Consulting',
  description:
    "Un site conforme et respectueux de votre déontologie, accompagné jusqu'à la validation par votre Conseil de l'Ordre. Développement sur-mesure, forfait fixe, délai annoncé et respecté.",
  path: '/avocats',
})

// On retire l'image générique héritée de createMetadata (clé `images`
// supprimée, pas mise à `undefined`) pour que Next retombe sur le fichier
// opengraph-image.tsx et serve l'image de preview dédiée aux avocats.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { images: _genericImage, ...openGraphWithoutImage } = baseMetadata.openGraph!

export const metadata = {
  ...baseMetadata,
  title: {
    absolute:
      'Création de site internet pour avocat — conforme au RIN, validé par votre Ordre | Appvise Consulting',
  },
  openGraph: openGraphWithoutImage,
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
    body: 'Photo professionnelle mise en valeur, parcours, ancienneté, domaines et lieux d’intervention. Ce que vos clients regardent en premier.',
  },
  {
    icon: Scale,
    title: 'Vos spécialités mises en avant',
    body: 'Droit commercial, droit pénal, droit de la famille… Chaque domaine a sa propre page, rédigée pour être trouvée sur Google.',
  },
  {
    icon: Coins,
    title: 'Transparence quant aux honoraires',
    body: 'Temps passé ou forfait : votre mode de facturation et vos modalités de paiement expliqués simplement. L’une des premières questions de vos clients — et un facteur de confiance.',
  },
  {
    icon: Newspaper,
    title: 'Actualité & veille juridique',
    body: 'Vos affaires relayées dans la presse d’un côté, vos parutions, travaux de recherche et d’enseignement de l’autre — présentés dans le respect du secret professionnel et des règles de communication et de publicité.',
  },
  {
    icon: CalendarClock,
    title: 'Accessibilité & disponibilité',
    body: 'Coordonnées, plan d’accès, formulaire de contact conforme RGPD. En option : prise de rendez-vous en ligne avec consultation prépayée — le client réserve directement depuis le site, selon vos disponibilités.',
  },
  {
    icon: Search,
    title: 'Référencement qualitatif',
    body: 'Une structure pensée pour les recherches « spécialité + ville + contentieux », fiche Google Business configurée, temps de chargement maîtrisés. Un site qu’on ne peut ignorer.',
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
    title: 'Formalités ordinales',
    body: 'Préparation du dossier à soumettre à votre Conseil de l’Ordre pour validation. Les modifications demandées par l’Ordre sont incluses dans le forfait.',
  },
  {
    icon: Lock,
    title: 'Données protégées',
    body: 'Hébergement européen, formulaires conformes RGPD, aucune donnée client transitant hors UE. Cohérent avec votre secret professionnel.',
  },
]

const reasons = [
  {
    title: 'Aucun risque déontologique',
    body: 'Vous connaissez un confrère qui a payé un site refusé par l’Ordre ? Les agences généralistes ignorent le RIN : absence de mentions obligatoires, non-respect du cadre légal de la publicité des avocats. Ici, la conformité est intégrée dès la conception et le dossier de validation est préparé pour votre Conseil de l’Ordre : un process plus court, sans rien recommencer.',
  },
  {
    title: 'Un site de promotion efficace, pas un beau site invisible',
    body: 'Vos confrères ont payé cher de très beaux sites, avec de beaux effets… que personne ne trouve. Un site réussi se conçoit dès le départ sur les mots-clés que tapent réellement vos futurs clients : spécialité, ville, contentieux. C’est lui qui travaille pour votre cabinet.',
  },
  {
    title: 'Transparence : prix et résultats',
    body: 'Devis précis et concis, forfait fixe et non négociable, délai annoncé et respecté. Vous savez ce que vous payez, ce que vous recevez, et quand.',
  },
]

const seoSteps = [
  'Une page dédiée par domaine d’intervention — la structure que Google attend pour ces recherches',
  'Fiche Google Business Profile créée ou optimisée (horaires, spécialités, lien vers le site)',
  'Base technique rapide et propre, balises et données structurées en place',
  'Suivi des visites mensuelles et des contacts entrants via le site',
]

const methodSteps = [
  {
    title: 'Cadrage',
    aside: '1 semaine',
    body: 'Un entretien pour définir vos attentes et vos besoins, votre positionnement et vos contraintes déontologiques spécifiques.',
  },
  {
    title: 'Conception & rédaction',
    body: 'Maquette et contenus rédigés, puis validés par vos soins. Vous ne partez pas d’une page blanche : je propose, vous ajustez.',
  },
  {
    title: 'Développement & mise en ligne',
    body: 'Site développé sur-mesure, testé, mis en ligne sur hébergement européen. Fiche Google configurée.',
  },
  {
    title: 'Validation Ordre & suivi',
    body: 'Accompagnement de la soumission du dossier à votre Conseil de l’Ordre. Modifications demandées par l’Ordre incluses. Point de suivi pour mesurer les contacts entrants.',
  },
]

const faq = [
  {
    q: 'Mon Ordre peut-il refuser le site ?',
    a: 'Le risque existe avec un site non conforme — c’est précisément ce que la conception selon le RIN évite. Si votre Conseil de l’Ordre demande des modifications, elles sont incluses dans le forfait, et le solde n’est dû qu’après validation.',
  },
  {
    q: 'C’est un site fait à partir d’un modèle tout prêt ?',
    a: 'Non. Chaque site est développé sur-mesure et personnalisé : plus rapide, plus sécurisé, sans dépendre d’outils génériques à maintenir. Un site conçu pour durer — pas pour être refait dans deux ans.',
  },
  {
    q: 'Combien de temps pour être visible sur Google ?',
    a: 'Le site est indexé en quelques jours et livré avec des fondations saines : une page par spécialité, fiche Google Business, base technique rapide. Le positionnement dépend ensuite de la concurrence locale et du contenu publié dans la durée — aucun prestataire sérieux ne peut garantir une position.',
  },
  {
    q: 'Mes parutions presse servent-elles à quelque chose ?',
    a: 'Oui — à condition que l’article renvoie vers votre site. Un lien depuis un grand média compte plus pour Google que des milliers d’abonnés sur les réseaux. Le site est conçu pour valoriser vos parutions, et je vous explique le réflexe à adopter lors de vos prochaines interviews pour que ces citations travaillent pour votre référencement.',
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
    a: 'Oui, en option (+ 500 € HT) : le client choisit un créneau selon vos disponibilités et règle la consultation en ligne, sans passer par votre secrétariat.',
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
            Le site de votre cabinet, conforme au RIN, pensé pour le{' '}
            <span className="text-primary">développement de votre clientèle.</span>
          </h1>
          <div className="text-text-muted text-lg mt-6 max-w-2xl mx-auto space-y-1">
            <p>— Conçu selon les règles du RIN</p>
            <p>
              — Accompagnement jusqu&apos;à la validation de la publication par
              votre Conseil de l&apos;Ordre
            </p>
          </div>
          <p className="text-text-faint text-[15px] mt-6 max-w-2xl mx-auto leading-relaxed">
            Construit sur les mots-clés essentiels des moteurs de recherche :
            spécialité · ville · contentieux · notion juridique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button variant="primary" href="/rendez-vous">
              Réserver un appel gratuit
            </Button>
            <Button variant="secondary" href="#offre">
              Voir ce que comprend l&apos;offre
            </Button>
          </div>
          <p className="text-text-faint text-sm mt-6 max-w-xl mx-auto">
            Offre et contenus construits avec des avocats en exercice —
            jusqu&apos;au vocabulaire.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 mt-14">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-text-muted">
            {[
              '14 ans de développement',
              'Conformité RIN intégrée',
              'Solde après validation de l’Ordre',
              'Forfait fixe, délai respecté',
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

      {/* ── POURQUOI NOUS ────────────────────────────────── */}
      <section
        aria-labelledby="reasons-heading"
        className="text-white py-16 lg:py-24"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>Pourquoi Appvise</Eyebrow>
            <h2
              id="reasons-heading"
              className="font-heading font-semibold text-2xl md:text-4xl mt-4"
            >
              Trois raisons de nous confier votre site.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="bg-surface border border-border rounded-2xl p-6"
              >
                <p className="text-primary text-sm font-semibold mb-2">
                  Raison {i + 1}
                </p>
                <h3 className="font-heading font-semibold text-lg text-white">
                  {reason.title}
                </h3>
                <p className="text-text-muted text-[15px] leading-relaxed mt-3">
                  {reason.body}
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
              Un site pensé pour le métier d&apos;avocat. Personnalisé pour le
              vôtre.
            </h2>
            <p className="text-text-muted text-lg mt-4">
              Chaque avocat a ses attentes et son positionnement. Chaque site est
              donc développé sur-mesure et personnalisé — pas un modèle tout fait
              — autour de ce que vos clients recherchent réellement quand ils
              choisissent un avocat.
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
              en intégrant ces règles dès la première maquette.
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
              Les fondations pour être trouvé dans votre ville.
            </h2>
            <p className="text-text-muted text-lg mt-4">
              Quand quelqu&apos;un cherche un avocat, il tape sa situation et sa
              ville : « avocat droit commercial Lyon », « avocat divorce
              Bordeaux ». Votre site est livré avec les bases techniques et
              éditoriales pour exister sur ces recherches.
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
            Le positionnement dépend ensuite de la concurrence locale et du
            contenu publié dans la durée. Le site vous donne des fondations
            saines — pas une promesse de première position.
          </p>

          <figure className="bg-signature border border-border-strong rounded-[24px] p-8 lg:p-12 mt-12 relative">
            <blockquote className="font-heading font-semibold text-xl md:text-2xl leading-snug text-white">
              « Un site : développement de clientèle, évolution de carrière,
              prospérité. »
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
              className="font-heading font-semibold text-2xl md:text-4xl mt-4"
            >
              Quatre étapes. Un interlocuteur unique.
            </h2>
            <p className="text-text-muted text-lg mt-4 mb-12 max-w-xl mx-auto">
              <span className="text-white font-semibold">
                Moins de {CLIENT_TIME} de votre temps, du cadrage à la mise en
                ligne.
              </span>{' '}
              Un entretien, deux validations par vos soins. Le reste, c&apos;est
              notre travail.
            </p>
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
              Un forfait. Un prix connu et fixe.
            </h2>
            <p className="text-text-muted text-lg mt-4">
              Pas de facturation au temps passé, pas de dépassement : un
              périmètre défini ensemble, un prix fixe, un délai annoncé et
              respecté.
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
                  Site sur-mesure (présentation, honoraires, actualité &amp;
                  veille juridique, contact)
                </span>
              </CheckItem>
              <CheckItem>
                <span className="text-white/85">
                  Vos spécialités mises en avant — jusqu&apos;à 3 pages dédiées
                  incluses
                </span>
              </CheckItem>
              <CheckItem>
                <span className="text-white/85">
                  Conformité RIN + préparation du dossier de validation pour
                  l&apos;Ordre
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
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <p className="font-heading font-semibold text-white">
                  Option — Prise de rendez-vous en ligne
                </p>
                <p className="font-heading font-semibold text-primary shrink-0">
                  + {BOOKING_OPTION_PRICE} € <span className="text-sm">HT</span>
                </p>
              </div>
              <p className="text-[15px] text-text-muted leading-relaxed mt-2">
                Consultation prépayée : le client réserve un créneau selon vos
                disponibilités et règle la consultation en ligne. Créneau réservé
                = consultation encaissée, zéro no-show.
              </p>
            </div>

            <div className="border-t border-border mt-8 pt-6">
              <p className="text-sm text-text-faint uppercase tracking-[0.2em] font-semibold mb-4">
                Autres options
              </p>
              <ul className="space-y-3 text-[15px] text-text-muted leading-relaxed">
                <li>
                  Page spécialité supplémentaire
                  <span className="text-white/80">
                    {' '}
                    — {EXTRA_SPECIALITY_PRICE} € HT
                  </span>
                </li>
                <li>
                  Rédaction d&apos;articles / veille juridique dans la durée
                  <span className="text-white/80"> — sur devis</span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-text-faint mt-8">
              Devis précis et concis après l&apos;appel de cadrage — le prix
              annoncé est le prix payé.
            </p>

            <div className="mt-8">
              <Button variant="primary" href="/rendez-vous">
                Obtenir mon devis précis en 30 minutes
              </Button>
            </div>
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
            Vous ne soldez qu&apos;après validation par votre Conseil de
            l&apos;Ordre.
          </h2>
          <p className="text-white/80 mt-4 text-lg leading-relaxed">
            Le projet n&apos;est terminé que lorsque votre site est validé et
            publié. Les modifications demandées par l&apos;Ordre sont incluses
            dans le forfait : vous ne payez pas deux fois, et vous ne réglez pas
            le solde tant que la validation n&apos;est pas obtenue. C&apos;est le
            fonctionnement d&apos;Appvise sur tous les projets — les avocats
            n&apos;y font pas exception.
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
            <Eyebrow>Qui sommes-nous</Eyebrow>
          </div>
          <h2
            id="about-heading"
            className="font-heading font-semibold text-2xl md:text-4xl mt-4"
          >
            Un interlocuteur unique, du cadrage à la validation.
          </h2>
          <p className="text-white/80 mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
            Appvise Consulting accompagne les entreprises sur le développement
            sur-mesure, l&apos;automatisation et l&apos;IA. Votre projet est
            piloté par Guillaume Occuly, 14 ans de développement : vous parlez
            directement à la personne qui conçoit votre site — pas à un
            commercial qui transmet à un prestataire.
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
