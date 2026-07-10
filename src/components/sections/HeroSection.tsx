import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="text-white pt-36 pb-24 lg:pt-52 lg:pb-32">
      <div className="max-w-3xl mx-auto text-center px-4">
        <p className="text-primary text-[13px] font-semibold uppercase tracking-[0.2em] mb-6">
          Intégrateur IA &amp; automatisation
        </p>
        <h1 id="hero-heading" className="font-heading font-semibold text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.03em]">
          Vos relances, vos devis, vos rendez-vous : <span className="text-primary">tout se gère sans vous.</span>
        </h1>
        <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
          Je connecte les outils que vous utilisez déjà et j&apos;intègre l&apos;IA là où elle est utile, pour que le répétitif tourne tout seul. Vous récupérez vos soirées — et la capacité de prendre plus de clients sans embaucher.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button variant="primary" href="/rendez-vous">
            Réserver un appel gratuit
          </Button>
          <Button variant="secondary" href="/quiz">
            Faire le diagnostic
          </Button>
        </div>
        <p className="inline-block bg-surface-2 border border-border-strong rounded-2xl px-6 py-4 mt-12 text-white text-base md:text-lg font-medium">
          Mon seul critère de succès : <span className="text-primary">que vous utilisiez encore l&apos;outil dans six mois.</span>
        </p>
      </div>
    </section>
  )
}
