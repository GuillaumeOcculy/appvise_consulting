import { Award, BadgeCheck, ShieldCheck, Phone, User } from 'lucide-react'
import Badge from '@/components/ui/Badge'

const badges = [
  { icon: Award, label: '+10 ans d\'exp' },
  { icon: BadgeCheck, label: 'Double certif n8n' },
  { icon: ShieldCheck, label: 'Paiement à la satisfaction' },
  { icon: Phone, label: 'Appel gratuit' },
  { icon: User, label: 'Un seul interlocuteur' },
]

export default function TrustBar() {
  return (
    <section aria-label="Badges de confiance" className="bg-[#081525] py-6">
      <div className="max-w-6xl mx-auto px-4">
        <ul role="list" className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {badges.map((badge) => (
            <Badge key={badge.label} icon={badge.icon} label={badge.label} />
          ))}
        </ul>
      </div>
    </section>
  )
}
