import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import StickyCTA from '@/components/layout/StickyCTA'
import JsonLd from '@/components/seo/JsonLd'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://appvise-consulting.fr'),
  title: {
    default: 'Appvise Consulting — Automatisation et développement sur-mesure',
    template: '%s | Appvise Consulting',
  },
  description: 'Automatisation n8n et développement sur-mesure pour entrepreneurs. Un seul interlocuteur, de l\'audit gratuit à la livraison.',
  openGraph: {
    siteName: 'Appvise Consulting',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body bg-dark text-white">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
        <JsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
