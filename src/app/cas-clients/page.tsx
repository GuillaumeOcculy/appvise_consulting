/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCaseStudies } from '@/lib/case-studies'
import { createMetadata } from '@/lib/metadata'
import { REDIRECTED_CASE_SLUGS } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Cas clients',
  description: 'Découvrez nos réalisations : intégration IA, automatisation et développement sur-mesure pour indépendants et TPE.',
  path: '/cas-clients',
})

export default function CaseStudiesPage() {
  // On ne liste que les cas publiables : les 3 cas redirigés (301) sont exclus du listing.
  const redirected = new Set<string>(REDIRECTED_CASE_SLUGS)
  const caseStudies = getCaseStudies().filter(cs => !redirected.has(cs.slug))

  return (
    <div className="text-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <a href="/" className="text-primary hover:underline text-sm">
          &larr; Retour à l&apos;accueil
        </a>

        <div className="text-center mt-8 mb-12">
          <h1 className="font-heading font-semibold text-3xl md:text-4xl">
            Cas clients
          </h1>
          <p className="text-text-muted text-lg mt-4 max-w-2xl mx-auto">
            Automatisation, développement sur-mesure et IA — chaque mission est différente, chaque résultat est concret.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/cas-clients/${cs.slug}`}
              className="group relative block bg-surface border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-2 transition-all duration-200 focus:outline-2 focus:outline-primary focus:outline-offset-2"
              aria-label={`Voir l'étude de cas ${cs.title}`}
            >
              <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                {cs.sector}
              </span>
              {cs.logo && (
                <img
                  src={cs.logo}
                  alt={cs.title}
                  className={`absolute top-6 right-6 w-auto object-contain ${cs.slug === 'wifirst' ? 'h-[4.5rem] max-w-[88px]' : 'h-6 max-w-[88px]'} ${cs.logoRaw ? '' : '[filter:brightness(0)_invert(1)]'}`}
                />
              )}
              <h2 className="font-heading font-semibold text-2xl mt-4">
                <span className="text-primary">{cs.statValue}</span> {cs.statLabel}
              </h2>
              <p className="text-text-muted text-sm mt-2">{cs.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors group-hover:text-primary">
                Lire le cas
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        {/* Expérience salariée — distincte des missions client Appvise (SideCare = CDI en scale-up, pas un client). */}
        <section aria-labelledby="experience-ia-heading" className="mt-16 lg:mt-20 bg-surface border border-border rounded-2xl p-7 lg:p-10">
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.2em]">
              Expérience salariée · Intégration IA en entreprise
            </span>
            <img
              src="/logos/sidecare.svg"
              alt="SideCare"
              className="h-7 w-auto object-contain opacity-70 [filter:brightness(0)_invert(1)] self-start sm:self-auto"
            />
          </div>
          <h2 id="experience-ia-heading" className="font-heading font-semibold text-2xl md:text-3xl mt-4 tracking-[-0.02em]">
            SideCare — l&apos;IA intégrée à l&apos;échelle d&apos;une scale-up santé/RH.
          </h2>
          <p className="text-text-muted mt-3 leading-relaxed max-w-3xl">
            En poste comme développeur Ruby on Rails · intégration IA, je déploie l&apos;IA dans les produits
            et les équipes d&apos;une scale-up de la complémentaire santé.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 mt-8">
            <div className="bg-surface-2 border border-border rounded-xl p-5">
              <h3 className="font-heading font-semibold text-base">Plateforme multi-chatbots IA santé</h3>
              <p className="text-text-muted text-sm mt-2 leading-relaxed">
                Des milliers de collaborateurs accompagnés par des assistants IA spécialisés (nutrition, sommeil,
                fitness, santé mentale), conformes RGPD et sécurisés — architecture multi-bots via Mistral AI.
              </p>
            </div>
            <div className="bg-surface-2 border border-border rounded-xl p-5">
              <h3 className="font-heading font-semibold text-base">Vérification documentaire par IA</h3>
              <p className="text-text-muted text-sm mt-2 leading-relaxed">
                Contrôle documentaire (CNI, passeports, bulletins de salaire, KBIS…) automatisé pour des milliers
                d&apos;entreprises : moteur OCR + Mistral AI, temps de traitement réduit de façon majeure.
              </p>
            </div>
            <div className="bg-surface-2 border border-border rounded-xl p-5">
              <h3 className="font-heading font-semibold text-base">Formation des équipes à l&apos;IA</h3>
              <p className="text-text-muted text-sm mt-2 leading-relaxed">
                Montée en compétence des équipes marketing et produit sur les outils IA, dont Claude Code.
              </p>
            </div>
          </div>
          <p className="text-white/80 mt-8 border-t border-border pt-6 leading-relaxed">
            Ce que j&apos;intègre à l&apos;échelle d&apos;une scale-up, je l&apos;adapte pour les
            <span className="text-primary"> indépendants et les TPE</span> via Appvise Consulting.
          </p>
        </section>
      </div>
    </div>
  )
}
