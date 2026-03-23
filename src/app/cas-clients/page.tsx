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
    <div className="bg-light text-dark py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <a href="/" className="text-primary hover:underline text-sm">
          &larr; Retour à l&apos;accueil
        </a>

        <div className="text-center mt-8 mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-4xl">
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
              className="block bg-surface border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus:outline-2 focus:outline-primary focus:outline-offset-2"
              aria-label={`Voir l'étude de cas ${cs.title}`}
            >
              <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                {cs.sector}
              </span>
              <h2 className="font-heading font-bold text-lg mt-3">{cs.title}</h2>
              <p className="text-text-muted text-sm mt-2">{cs.excerpt}</p>
              <div className="mt-4">
                <span className="font-heading text-3xl text-success">{cs.statValue}</span>
                <span className="text-sm text-text-muted ml-2">{cs.statLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
