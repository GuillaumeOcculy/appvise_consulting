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
    { url: `${SITE_URL}/cas-clients`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...caseStudies,
    { url: `${SITE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}
