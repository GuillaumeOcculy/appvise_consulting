import Link from 'next/link'
import { getCaseStudies } from '@/lib/case-studies'

export default function CaseStudyCards() {
  const caseStudies = getCaseStudies()

  return (
    <section id="cas-clients" aria-labelledby="cases-heading" className="bg-light text-dark py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="cases-heading" className="font-heading font-bold text-2xl md:text-4xl text-center mb-12">
          Ils m&apos;ont fait confiance
        </h2>
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
              <h3 className="font-heading font-bold text-lg mt-3">{cs.title}</h3>
              <p className="text-text-muted text-sm mt-2">{cs.excerpt}</p>
              <div className="mt-4">
                <span className="font-heading text-3xl text-success">{cs.statValue}</span>
                <span className="text-sm text-text-muted ml-2">{cs.statLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
