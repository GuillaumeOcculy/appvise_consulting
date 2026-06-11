import { createMetadata } from '@/lib/metadata'
import { TALLY_QUIZ_EMBED_URL, CONTACT_EMAIL } from '@/lib/constants'
import EmbedWrapper from '@/components/ui/EmbedWrapper'
import TrackQuiz from './TrackQuiz'

export const metadata = createMetadata({
  title: 'Combien de temps perds-tu ?',
  description: 'Réponds à quelques questions pour estimer ton potentiel d\'automatisation et les tâches à déléguer en priorité.',
  path: '/quiz',
})

export default function QuizPage() {
  return (
    <div className="text-white py-24 lg:py-32">
      <TrackQuiz />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading font-semibold text-3xl md:text-4xl">
          Combien de temps perds-tu chaque semaine ?
        </h1>
        <p className="text-text-muted text-lg mt-4">
          Réponds à quelques questions pour estimer ton potentiel d&apos;automatisation
          et identifier les tâches à déléguer en priorité. Moins de 2 minutes.
        </p>

        <div className="mt-10 bg-paper rounded-2xl p-4 sm:p-6 shadow-[0_24px_64px_rgba(2,2,7,0.55)]">
          <EmbedWrapper
            src={TALLY_QUIZ_EMBED_URL}
            title="Quiz : combien de temps perds-tu ?"
            height={650}
            fallbackMessage="Le quiz est temporairement indisponible."
            fallbackContact={CONTACT_EMAIL}
          />
        </div>
      </div>
    </div>
  )
}
