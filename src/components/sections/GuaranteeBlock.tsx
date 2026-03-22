import { ShieldCheck } from 'lucide-react'
import CheckItem from '@/components/ui/CheckItem'

export default function GuaranteeBlock() {
  return (
    <section aria-labelledby="guarantee-heading" className="bg-guarantee text-white py-16 lg:py-24">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="bg-primary/20 p-4 rounded-full inline-flex mx-auto mb-6">
          <ShieldCheck size={56} className="text-primary" />
        </div>
        <h2 id="guarantee-heading" className="font-heading font-bold text-2xl md:text-4xl">
          Paiement à la satisfaction
        </h2>
        <p className="text-white/80 mt-4 text-lg">
          Je prends le risque à ta place. Tu ne paies le solde que quand le résultat te convient.
        </p>
        <div className="text-left inline-block mt-8 space-y-3">
          <CheckItem>Acompte de 30% pour démarrer</CheckItem>
          <CheckItem>Solde uniquement quand tu es satisfait</CheckItem>
          <CheckItem>Itérations illimitées incluses</CheckItem>
          <CheckItem>Aucun engagement au-delà du projet</CheckItem>
        </div>
      </div>
    </section>
  )
}
