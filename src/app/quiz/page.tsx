import { createMetadata } from '@/lib/metadata'
import { TALLY_QUIZ_EMBED_URL, CONTACT_EMAIL } from '@/lib/constants'
import EmbedWrapper from '@/components/ui/EmbedWrapper'
import TrackQuiz from './TrackQuiz'

export const metadata = createMetadata({
  title: 'Diagnostic automatisation',
  description: 'Quelques questions pour repérer ce qui peut être automatisé dans votre activité et par quoi commencer. Gratuit, moins de 2 minutes.',
  path: '/quiz',
})

export default function QuizPage() {
  return (
    <div className="text-white py-24 lg:py-32">
      <TrackQuiz />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading font-semibold text-3xl md:text-4xl">
          Votre diagnostic automatisation en 2 minutes
        </h1>
        <p className="text-text-muted text-lg mt-4">
          Quelques questions pour repérer ce qui peut être automatisé dans votre activité
          — et par quoi commencer.
        </p>

        <div className="mt-10 bg-paper rounded-2xl p-4 sm:p-6 shadow-[0_24px_64px_rgba(2,2,7,0.55)]">
          <EmbedWrapper
            src={TALLY_QUIZ_EMBED_URL}
            title="Diagnostic automatisation"
            height={650}
            fallbackMessage="Le quiz est temporairement indisponible."
            fallbackContact={CONTACT_EMAIL}
          />
        </div>
      </div>
    </div>
  )
}
