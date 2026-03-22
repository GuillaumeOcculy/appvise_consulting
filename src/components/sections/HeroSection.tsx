import Button from '@/components/ui/Button'
import { TALLY_QUIZ_URL, ZCAL_URL } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="bg-dark text-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 id="hero-heading" className="font-heading font-bold text-[32px] md:text-[44px] lg:text-[56px] leading-tight">
          Tu perds <span className="text-primary">10h/semaine</span> sur des tâches que tu pourrais automatiser ?
        </h1>
        <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
          Automatisation n8n et développement sur-mesure — un seul interlocuteur, de l&apos;audit gratuit à la livraison.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button variant="primary" href={ZCAL_URL} target="_blank">
            Réserver un appel gratuit
          </Button>
          <Button variant="secondary" href={TALLY_QUIZ_URL} target="_blank" className="border-white text-white">
            Combien de temps perds-tu ?
          </Button>
        </div>
      </div>
    </section>
  )
}
