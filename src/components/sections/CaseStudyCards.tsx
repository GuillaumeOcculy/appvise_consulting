const missions = [
  {
    label: 'Géomètre-expert',
    title: 'Ne parler qu\'aux clients qui ont vraiment besoin de lui.',
    body: 'Un site clair, un questionnaire qui trie les demandes en amont, des rendez-vous qui se calent seuls. Fini les appels avec des prospects hors cible.',
  },
  {
    label: 'Confiserie — Savoirs Sucrés',
    title: 'Connaître le coût réel de chaque produit.',
    body: 'Un outil sur-mesure calcule le prix de revient de ses 10 références. Fini le tableur à la main.',
    stat: {
      value: '15–30 min / produit',
      caption: 'de calcul manuel en moins',
    },
  },
]

export default function CaseStudyCards() {
  return (
    <section id="cas-clients" aria-labelledby="cases-heading" className="text-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 id="cases-heading" className="font-heading font-semibold text-2xl md:text-4xl text-center mb-12">
          Quelques missions concrètes.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missions.map((m) => (
            <div
              key={m.label}
              className="bg-surface border border-border rounded-2xl p-7 lg:p-8"
            >
              <span className="text-primary text-[11px] font-semibold uppercase tracking-[0.2em]">
                {m.label}
              </span>
              <h3 className="font-heading font-semibold text-xl mt-3">{m.title}</h3>
              <p className="text-text-muted text-[15px] leading-relaxed mt-3">{m.body}</p>
              {m.stat && (
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-heading font-semibold text-primary text-2xl md:text-3xl tracking-[-0.02em]">
                    {m.stat.value}
                  </p>
                  <p className="text-text-muted text-[13px] mt-1">{m.stat.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
