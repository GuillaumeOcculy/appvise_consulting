import { X } from 'lucide-react'

const items = [
  'Pas de devis surprise — tu sais exactement ce que tu paies avant de commencer',
  'Pas de livraison bâclée — itérations illimitées jusqu\'à ta satisfaction',
  'Pas de jargon technique — on parle résultats, pas technologies',
]

export default function HonestySection() {
  return (
    <section aria-labelledby="honesty-heading" className="bg-dark text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="honesty-heading" className="font-heading font-bold text-2xl md:text-4xl text-center mb-12">
          Ce que je ne ferai pas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item} className="bg-white/[0.04] rounded-2xl p-6">
              <X size={24} className="text-primary mb-3" />
              <p className="text-white/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
