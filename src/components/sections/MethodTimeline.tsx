const steps = [
  { title: 'Diagnostic', description: 'On identifie ensemble tes tâches chronophages' },
  { title: 'Proposition', description: 'Je te propose la solution adaptée : automatisation ou développement' },
  { title: 'Réalisation', description: 'Je construis, tu valides à chaque étape' },
  { title: 'Paiement', description: 'Tu ne paies le solde que quand tu es satisfait' },
]

export default function MethodTimeline() {
  return (
    <section aria-labelledby="method-heading" className="bg-surface text-dark py-16 lg:py-24">
      <div className="max-w-2xl mx-auto px-4">
        <h2 id="method-heading" className="font-heading font-bold text-2xl md:text-4xl text-center mb-12">
          Ma méthode en 4 étapes
        </h2>
        <ol role="list" className="relative">
          {steps.map((step, i) => (
            <li key={step.title} role="listitem" aria-label={`Étape ${i + 1} sur 4`} className="relative flex gap-6 pb-10 last:pb-0">
              {i < steps.length - 1 && (
                <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
              )}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-heading font-bold text-sm shrink-0">
                {i + 1}
              </div>
              <div className="pt-1.5">
                <h3 className="font-heading font-bold text-lg">{step.title}</h3>
                <p className="text-text-muted mt-1">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
