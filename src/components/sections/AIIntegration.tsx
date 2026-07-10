import Link from 'next/link'
import { Bot, FileCheck2, GraduationCap, ArrowRight } from 'lucide-react'

const bricks = [
  {
    icon: Bot,
    title: 'Chatbots IA spécialisés',
    body: 'Des assistants métier qui accompagnent des milliers de collaborateurs, conformes RGPD et sécurisés (via Mistral AI).',
  },
  {
    icon: FileCheck2,
    title: 'Vérification documentaire par IA',
    body: 'Contrôle automatisé des pièces (CNI, bulletins de salaire, KBIS…) pour des milliers d\'entreprises : moteur OCR + Mistral AI.',
  },
  {
    icon: GraduationCap,
    title: 'Formation des équipes à l\'IA',
    body: 'Montée en compétence des équipes marketing et produit sur les outils IA, dont Claude Code.',
  },
]

export default function AIIntegration() {
  return (
    <section aria-labelledby="ai-heading" className="text-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-surface border border-border rounded-[24px] p-7 lg:p-10">
          <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.2em]">
            Intégration IA en entreprise
          </p>
          <h2 id="ai-heading" className="font-heading font-semibold text-2xl md:text-4xl mt-3 tracking-[-0.02em]">
            L&apos;IA intégrée pour de vrai, pas en théorie.
          </h2>
          <p className="text-text-muted mt-4 text-lg leading-relaxed max-w-3xl">
            En poste dans une scale-up santé/RH (SideCare), j&apos;intègre l&apos;IA là où elle produit des
            résultats — dans les produits comme dans les équipes :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {bricks.map((b) => (
              <div key={b.title} className="bg-surface-2 border border-border rounded-2xl p-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-4">
                  <b.icon size={20} className="text-primary" />
                </span>
                <h3 className="font-heading font-semibold text-base">{b.title}</h3>
                <p className="text-text-muted text-sm mt-2 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-white/80 leading-relaxed">
              Ce que j&apos;intègre à l&apos;échelle d&apos;une scale-up, je l&apos;adapte pour les
              <span className="text-primary"> indépendants et les TPE.</span>
            </p>
            <Link
              href="/cas-clients#experience-ia-heading"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-primary shrink-0"
            >
              Voir le détail
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
