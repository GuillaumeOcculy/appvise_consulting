import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="text-white py-24 lg:py-32">
      <div className="max-w-3xl mx-auto text-center px-4">
        <p className="text-primary text-[13px] font-semibold uppercase tracking-[0.2em] mb-6">
          Agence automatisation &amp; IA
        </p>
        <h1 id="hero-heading" className="font-heading font-semibold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.03em]">
          On <span className="text-primary">automatise</span> ce qui peut l&apos;être, on <span className="text-primary">développe</span> ce qui ne peut pas.
        </h1>
        <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
          Automatisation, développement sur-mesure et IA — un seul interlocuteur, de l&apos;audit gratuit à la livraison.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button variant="primary" href="/rendez-vous">
            Réserver un appel gratuit
          </Button>
          <Button variant="secondary" href="/quiz">
            Faire le diagnostic
          </Button>
        </div>
      </div>
    </section>
  )
}
