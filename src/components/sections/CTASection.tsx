import Button from '@/components/ui/Button'
import { TALLY_QUIZ_URL, ZCAL_URL } from '@/lib/constants'

export default function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="bg-primary text-white py-16 lg:py-24">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 id="cta-heading" className="font-heading font-bold text-2xl md:text-4xl">
          Prêt à récupérer tes heures ?
        </h2>
        <p className="text-white/80 mt-4 text-lg">
          Appel gratuit &middot; 30 min &middot; Sans engagement
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button variant="inverse" href={ZCAL_URL} target="_blank">
            Réserver un créneau
          </Button>
          <Button variant="secondary" href={TALLY_QUIZ_URL} target="_blank" className="border-white text-white">
            Combien de temps perds-tu ?
          </Button>
        </div>
      </div>
    </section>
  )
}
