import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import TrustBar from '@/components/sections/TrustBar'
import CaseStudyCards from '@/components/sections/CaseStudyCards'
import ClientLogos from '@/components/sections/ClientLogos'
import Testimonials from '@/components/sections/Testimonials'
import InlineCTA from '@/components/sections/InlineCTA'
import HonestySection from '@/components/sections/HonestySection'
import MethodTimeline from '@/components/sections/MethodTimeline'
import GuaranteeBlock from '@/components/sections/GuaranteeBlock'
import CTASection from '@/components/sections/CTASection'
import AboutSection from '@/components/sections/AboutSection'
import { createMetadata } from '@/lib/metadata'

export const metadata = {
  ...createMetadata({
    title: 'Appvise Consulting — Automatisation, développement sur-mesure et IA',
    description: 'Automatisation n8n, développement sur-mesure et IA pour entrepreneurs. Un seul interlocuteur, de l\'audit gratuit à la livraison.',
    path: '',
  }),
  title: { absolute: 'Appvise Consulting — Automatisation, développement sur-mesure et IA' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <MethodTimeline />
      <GuaranteeBlock />
      <Testimonials />
      <CaseStudyCards />
      <ClientLogos />
      <TrustBar />
      <InlineCTA />
      <HonestySection />
      <AboutSection />
      <CTASection />
    </>
  )
}
