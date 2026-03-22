import { notFound } from 'next/navigation'
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/lib/case-studies'
import { createMetadata } from '@/lib/metadata'
import { ZCAL_URL } from '@/lib/constants'
import Button from '@/components/ui/Button'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllCaseStudySlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const cs = getCaseStudyBySlug(slug)
    return createMetadata({
      title: cs.title,
      description: cs.excerpt,
      path: `/cas-clients/${slug}`,
    })
  } catch {
    return {}
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const allowedSlugs = new Set(getAllCaseStudySlugs())
  if (!allowedSlugs.has(slug)) notFound()

  const meta = getCaseStudyBySlug(slug)
  const { default: Content } = await import(`@/content/case-studies/${slug}.mdx`)

  return (
    <div className="bg-light text-dark py-16 lg:py-24">
      <div className="max-w-prose mx-auto px-4">
        <a href="/#cas-clients" className="text-primary hover:underline text-sm">
          &larr; Voir tous les cas clients
        </a>

        <div className="mt-8">
          <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
            {meta.sector}
          </span>
          <h1 className="font-heading font-bold text-3xl md:text-4xl mt-3">{meta.title}</h1>
          <div className="mt-4">
            <span className="font-heading text-4xl text-success">{meta.statValue}</span>
            <span className="text-text-muted ml-2">{meta.statLabel}</span>
          </div>
        </div>

        <div className="prose prose-lg mt-8">
          <Content />
        </div>

        <div className="mt-16 bg-surface border border-border rounded-2xl p-8 text-center">
          <h2 className="font-heading font-bold text-xl">Tu as un problème similaire ?</h2>
          <p className="text-text-muted mt-2">Réserve un appel gratuit de 30 minutes pour en discuter.</p>
          <div className="mt-6">
            <Button variant="primary" href={ZCAL_URL} target="_blank">
              Réserver un appel gratuit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
