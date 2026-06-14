import { ShieldCheck } from 'lucide-react'
import CheckItem from '@/components/ui/CheckItem'

export default function GuaranteeBlock() {
  return (
    <section aria-labelledby="guarantee-heading" className="text-white py-16 lg:py-24">
      <div className="text-center max-w-2xl mx-auto px-4 bg-surface border border-border rounded-[24px] py-12 lg:py-16 lg:px-12 shadow-[0_24px_64px_rgba(2,2,7,0.55)]">
        <div className="bg-primary/15 p-4 rounded-full inline-flex mx-auto mb-6">
          <ShieldCheck size={56} className="text-primary" />
        </div>
        <h2 id="guarantee-heading" className="font-heading font-semibold text-2xl md:text-4xl">
          Vous ne payez que si le résultat vous convient.
        </h2>
        <p className="text-white/80 mt-4 text-lg">
          La plupart des prestataires encaissent, livrent, et disparaissent. Moi, je prends le risque à votre place.
        </p>
        <div className="text-left inline-block mt-8 space-y-3">
          <CheckItem>Acompte de 30% pour démarrer</CheckItem>
          <CheckItem>Le solde, seulement quand vous êtes satisfait</CheckItem>
          <CheckItem>Itérations illimitées incluses</CheckItem>
          <CheckItem>Aucun engagement au-delà du projet</CheckItem>
        </div>
        <p className="text-white/80 mt-8 text-lg leading-relaxed border-t border-border pt-8">
          Et ce qui me convient, à moi, ce n&apos;est pas que vous payiez. C&apos;est que vous utilisiez encore l&apos;outil dans <span className="text-primary">6 mois.</span> C&apos;est mon seul critère.
        </p>
      </div>
    </section>
  )
}
