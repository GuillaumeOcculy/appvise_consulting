import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

interface CreateMetadataParams {
  title: string
  description: string
  path: string
}

export function createMetadata({ title, description, path }: CreateMetadataParams): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Appvise Consulting',
      type: 'website',
      images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
    },
  }
}
