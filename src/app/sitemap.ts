import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getAllCaseStudySlugs } from '@/lib/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = getAllCaseStudySlugs().map(slug => ({
    url: `${SITE_URL}/cas-clients/${slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...caseStudies,
  ]
}
