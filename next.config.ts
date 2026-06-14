import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import { REDIRECTED_CASE_SLUGS } from './src/lib/constants'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Cas clients non publiables : on conserve les pages (.mdx) mais on redirige en 301
  // permanent vers l'accueil. Le redirect intercepte la route statique avant le rendu.
  async redirects() {
    return REDIRECTED_CASE_SLUGS.map((slug) => ({
      source: `/cas-clients/${slug}`,
      destination: '/',
      statusCode: 301,
    }))
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://tally.so https://connect.facebook.net https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://vitals.vercel-insights.com https://connect.facebook.net https://www.facebook.com",
              "frame-src 'self' https://tally.so https://zcal.co",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-frontmatter' as never]],
  },
})

export default withMDX(nextConfig)
