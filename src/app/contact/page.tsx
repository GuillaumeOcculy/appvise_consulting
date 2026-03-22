import { createMetadata } from '@/lib/metadata'
import { ZCAL_URL, TALLY_CONTACT_FORM_URL, CONTACT_EMAIL } from '@/lib/constants'
import EmbedWrapper from '@/components/ui/EmbedWrapper'

export const metadata = createMetadata({
  title: 'Contact',
  description: '30 minutes pour identifier tes tâches chronophages et te proposer la solution adaptée.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="bg-light text-dark py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading font-bold text-3xl md:text-4xl">
          Réserver un appel gratuit
        </h1>
        <p className="text-text-muted text-lg mt-4">
          30 minutes pour identifier tes tâches chronophages et te proposer la solution adaptée.
        </p>

        <div className="mt-10">
          <EmbedWrapper
            src={ZCAL_URL}
            title="Calendrier de réservation d'appel gratuit"
            height={400}
            fallbackMessage="Le calendrier est temporairement indisponible."
            fallbackContact={CONTACT_EMAIL}
          />
        </div>

        <div className="flex items-center gap-4 my-8">
          <hr className="flex-1 border-border" />
          <span className="text-text-muted">ou</span>
          <hr className="flex-1 border-border" />
        </div>

        <EmbedWrapper
          src={TALLY_CONTACT_FORM_URL}
          title="Formulaire de contact"
          height={600}
          fallbackMessage="Le formulaire est temporairement indisponible."
          fallbackContact={CONTACT_EMAIL}
        />

        <div className="bg-surface border border-border rounded-xl p-6 mt-8">
          <p className="text-text-muted text-sm">
            Après ta demande : réponse sous 48h, puis diagnostic gratuit de 30 min.
          </p>
        </div>
      </div>
    </div>
  )
}
