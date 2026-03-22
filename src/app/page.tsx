import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import CaseStudyCards from '@/components/sections/CaseStudyCards'
import HonestySection from '@/components/sections/HonestySection'
import MethodTimeline from '@/components/sections/MethodTimeline'
import GuaranteeBlock from '@/components/sections/GuaranteeBlock'
import CTASection from '@/components/sections/CTASection'
import AboutSection from '@/components/sections/AboutSection'
import { createMetadata } from '@/lib/metadata'

export const metadata = {
  ...createMetadata({
    title: 'Appvise Consulting — Automatisation et développement sur-mesure',
    description: 'Automatisation n8n et développement sur-mesure pour entrepreneurs. Un seul interlocuteur, de l\'audit gratuit à la livraison.',
    path: '',
  }),
  title: { absolute: 'Appvise Consulting — Automatisation et développement sur-mesure' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CaseStudyCards />
      <HonestySection />
      <MethodTimeline />
      <GuaranteeBlock />
      <CTASection />
      <AboutSection />
    </>
  )
}
