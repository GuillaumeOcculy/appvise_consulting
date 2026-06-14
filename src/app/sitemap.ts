import type { MetadataRoute } from 'next'
import { SITE_URL, REDIRECTED_CASE_SLUGS } from '@/lib/constants'
import { getAllCaseStudySlugs } from '@/lib/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  // Les cas redirigés (301) sont exclus du sitemap pour ne pas pointer vers des redirections.
  const redirected = new Set<string>(REDIRECTED_CASE_SLUGS)
  const caseStudies = getAllCaseStudySlugs()
    .filter(slug => !redirected.has(slug))
    .map(slug => ({
      url: `${SITE_URL}/cas-clients/${slug}`,
      lastModified: new Date(),
    }))

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/cas-clients`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/rendez-vous`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/quiz`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...caseStudies,
    { url: `${SITE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}
