const blocks = [
  {
    title: 'Le répétitif vous prend vos soirées.',
    body: 'Relancer les mêmes devis. Renvoyer les mêmes mails. Recopier les mêmes infos d\'un outil à l\'autre. Des heures chaque semaine, sur des tâches qui ne font rien avancer.',
  },
  {
    title: 'Plus vous réussissez, pire c\'est.',
    body: 'Chaque nouveau client, c\'est plus d\'administratif. Vous finissez par refuser des missions — pas faute de demande, faute de temps.',
  },
  {
    title: 'Et des choses passent à la trappe.',
    body: 'Un rappel oublié. Un paiement qui traîne. Un client relancé trop tard. À la main, ça finit toujours par arriver.',
  },
]

export default function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="problem-heading" className="font-heading font-semibold text-2xl md:text-4xl">
            Le problème, ce n&apos;est pas votre métier. C&apos;est tout ce qu&apos;il y a autour.
          </h2>
          <p className="text-text-muted text-lg mt-4">
            Vous êtes doué pour ce que vous faites. Mais votre journée part ailleurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {blocks.map((block) => (
            <div key={block.title} className="bg-surface border border-border rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-lg text-white">{block.title}</h3>
              <p className="text-text-muted text-[15px] leading-relaxed mt-3">{block.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center mt-12 space-y-4">
          <p className="text-white/85 text-lg leading-relaxed">
            Vous le savez : il faudrait que tout ça tourne sans vous. Mais vous n&apos;avez pas le temps de vous y mettre — et l&apos;idée d&apos;un outil de plus à apprendre vous épuise d&apos;avance.
          </p>
          <p className="text-white/85 text-lg leading-relaxed">
            Et si vous avez déjà essayé quelque chose qui a fini oublié dans un coin : <span className="text-primary">ce n&apos;est pas vous, le problème.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
