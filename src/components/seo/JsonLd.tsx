import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        founder: {
          '@type': 'Person',
          name: 'Guillaume Occuly',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: 'French',
        },
      },
      {
        '@type': 'LocalBusiness',
        name: SITE_NAME,
        url: SITE_URL,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'FR',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026') }}
    />
  )
}
