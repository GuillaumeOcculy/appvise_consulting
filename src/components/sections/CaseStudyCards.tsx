import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCaseStudies } from '@/lib/case-studies'

export default function CaseStudyCards() {
  const caseStudies = getCaseStudies()

  return (
    <section id="cas-clients" aria-labelledby="cases-heading" className="text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="cases-heading" className="font-heading font-semibold text-2xl md:text-4xl text-center mb-4">
          Cas clients
        </h2>
        <p className="text-text-muted text-center mb-12 text-lg">
          Automatisation, développement sur-mesure et IA — voici quelques missions concrètes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/cas-clients/${cs.slug}`}
              className="group block bg-surface border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-2 transition-all duration-200 focus:outline-2 focus:outline-primary focus:outline-offset-2"
              aria-label={`Voir l'étude de cas ${cs.title}`}
            >
              <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
                {cs.sector}
              </span>
              <h3 className="font-heading font-semibold text-lg mt-3">{cs.title}</h3>
              <p className="text-text-muted text-sm mt-2">{cs.excerpt}</p>
              <div className="mt-4">
                <span className="font-heading font-semibold text-3xl text-primary">{cs.statValue}</span>
                <span className="text-sm text-text-muted ml-2">{cs.statLabel}</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors group-hover:text-primary">
                Lire le cas
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
