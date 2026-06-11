import Link from 'next/link'
import { getCaseStudies } from '@/lib/case-studies'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Cas clients',
  description: 'Découvrez nos réalisations : automatisation n8n, développement sur-mesure et IA pour entrepreneurs et PME.',
  path: '/cas-clients',
})

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies()

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
              className="block bg-surface border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-2 transition-all duration-200 focus:outline-2 focus:outline-primary focus:outline-offset-2"
              aria-label={`Voir l'étude de cas ${cs.title}`}
            >
              <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                {cs.sector}
              </span>
              <h2 className="font-heading font-semibold text-lg mt-3">{cs.title}</h2>
              <p className="text-text-muted text-sm mt-2">{cs.excerpt}</p>
              <div className="mt-4">
                <span className="font-heading font-semibold text-3xl text-primary">{cs.statValue}</span>
                <span className="text-sm text-text-muted ml-2">{cs.statLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
