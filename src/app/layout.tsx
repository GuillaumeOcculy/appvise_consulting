import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import StickyCTA from '@/components/layout/StickyCTA'
import JsonLd from '@/components/seo/JsonLd'
import PixelPageView from '@/components/analytics/PixelPageView'
import { FB_PIXEL_ID } from '@/lib/fbpixel'
import { SITE_URL } from '@/lib/constants'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Appvise Consulting — Intégrateur IA & automatisation pour indépendants et TPE',
    template: '%s | Appvise Consulting',
  },
  description: 'Intégration IA et automatisation pour indépendants et TPE. Un seul interlocuteur, de l\'audit gratuit à la livraison — et un seul critère de succès : que vous utilisiez encore l\'outil dans 6 mois.',
  openGraph: {
    siteName: 'Appvise Consulting',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  verification: {
    other: {
      'facebook-domain-verification': 'qqkfnfm8m2aosvygggd3ri46upkows',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-body text-white antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Aller au contenu principal
        </a>
        <PixelPageView />
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
