import { createMetadata } from '@/lib/metadata'
import { ZCAL_URL, CONTACT_EMAIL } from '@/lib/constants'
import EmbedWrapper from '@/components/ui/EmbedWrapper'
import TrackRendezVous from './TrackRendezVous'

export const metadata = createMetadata({
  title: 'Réserver un appel gratuit',
  description: '30 minutes pour identifier tes tâches chronophages et te proposer la solution adaptée. Gratuit, sans engagement.',
  path: '/rendez-vous',
})

const steps = [
  {
    title: 'Choisis ton créneau',
    description: 'Sélectionne le moment qui te convient directement dans le calendrier ci-dessous.',
  },
  {
    title: 'Reçois la confirmation',
    description: 'Tu reçois un email de confirmation avec le lien de visioconférence.',
  },
  {
    title: 'On échange 30 minutes',
    description: 'On identifie ensemble tes tâches chronophages et la solution adaptée à ta situation.',
  },
]

export default function RendezVousPage() {
  return (
    <div className="text-white py-24 lg:py-32">
      <TrackRendezVous />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading font-semibold text-3xl md:text-4xl">
          Réserver un appel gratuit
        </h1>
        <p className="text-text-muted text-lg mt-4">
          30 minutes pour identifier tes tâches chronophages et te proposer la solution adaptée.
          Gratuit, sans engagement.
        </p>

        <ol className="grid gap-6 sm:grid-cols-3 mt-10">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-surface border border-border rounded-xl p-6">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white font-heading font-semibold">
                {index + 1}
              </span>
              <h2 className="font-heading font-semibold text-base mt-4">{step.title}</h2>
              <p className="text-text-muted text-sm mt-2">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <h2 className="font-heading font-semibold text-xl mb-4">Choisis ton créneau</h2>
          <EmbedWrapper
            src={ZCAL_URL}
            title="Calendrier de réservation d'appel gratuit"
            height={650}
            fallbackMessage="Le calendrier est temporairement indisponible."
            fallbackContact={CONTACT_EMAIL}
          />
        </div>
      </div>
    </div>
  )
}
