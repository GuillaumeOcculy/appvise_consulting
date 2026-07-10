import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import TrustBar from '@/components/sections/TrustBar'
import CaseStudyCards from '@/components/sections/CaseStudyCards'
import ClientLogos from '@/components/sections/ClientLogos'
import Testimonials from '@/components/sections/Testimonials'
import InlineCTA from '@/components/sections/InlineCTA'
import HonestySection from '@/components/sections/HonestySection'
import AIIntegration from '@/components/sections/AIIntegration'
import MethodTimeline from '@/components/sections/MethodTimeline'
import GuaranteeBlock from '@/components/sections/GuaranteeBlock'
import CTASection from '@/components/sections/CTASection'
import AboutSection from '@/components/sections/AboutSection'
import { createMetadata } from '@/lib/metadata'

export const metadata = {
  ...createMetadata({
    title: 'Appvise Consulting — Intégrateur IA & automatisation pour indépendants et TPE',
    description: 'Intégration IA et automatisation pour indépendants et TPE. Un seul interlocuteur, de l\'audit gratuit à la livraison — et un seul critère de succès : que vous utilisiez encore l\'outil dans 6 mois.',
    path: '',
  }),
  title: { absolute: 'Appvise Consulting — Intégrateur IA & automatisation pour indépendants et TPE' },
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
      <AIIntegration />
      <TrustBar />
      <InlineCTA />
      <HonestySection />
      <AboutSection />
      <CTASection />
    </>
  )
}
