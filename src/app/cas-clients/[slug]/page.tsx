/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/lib/case-studies'
import { createMetadata } from '@/lib/metadata'
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
    <div className="text-white py-24 lg:py-32">
      <div className="max-w-prose mx-auto px-4">
        <a href="/#cas-clients" className="text-primary hover:underline text-sm">
          &larr; Voir tous les cas clients
        </a>

        <div className="mt-8">
          <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">
            {meta.sector}
          </span>
          <h1 className="font-heading font-semibold text-3xl md:text-4xl mt-3">
            {meta.logo ? (
              <img
                src={meta.logo}
                alt={meta.title}
                className={`${meta.logoClass ?? 'h-12'} w-auto max-w-[220px] object-contain ${meta.logoRaw ? '' : '[filter:brightness(0)_invert(1)]'}`}
              />
            ) : (
              meta.title
            )}
          </h1>
          <div className="mt-4">
            <span className="font-heading font-semibold text-4xl text-primary">{meta.statValue}</span>
            <span className="text-text-muted ml-2">{meta.statLabel}</span>
          </div>
        </div>

        <div className="prose prose-lg prose-invert prose-a:text-primary prose-headings:font-semibold mt-8">
          <Content />
        </div>

        <div className="mt-16 bg-surface border border-border rounded-2xl p-8 text-center">
          <h2 className="font-heading font-semibold text-xl">Tu as un problème similaire ?</h2>
          <p className="text-text-muted mt-2">Réserve un appel gratuit de 30 minutes pour en discuter.</p>
          <div className="mt-6">
            <Button variant="primary" href="/rendez-vous">
              Réserver un appel gratuit
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
