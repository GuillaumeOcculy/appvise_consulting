import Button from '@/components/ui/Button'

export default function InlineCTA() {
  return (
    <section aria-label="Discuter de votre projet" className="py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-surface border border-border rounded-2xl px-6 py-6 lg:px-10 lg:py-7 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <p className="font-heading font-semibold text-lg lg:text-xl text-white">
              Un projet similaire au vôtre ?
            </p>
            <p className="text-text-muted text-sm mt-1">
              Audit gratuit de 30 min, sans engagement.
            </p>
          </div>
          <Button variant="primary" href="/rendez-vous" className="shrink-0">
            Réserver un appel
          </Button>
        </div>
      </div>
    </section>
  )
}
