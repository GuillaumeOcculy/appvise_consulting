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
    <div className="bg-light text-dark py-16 lg:py-24">
      <TrackQuiz />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-heading font-bold text-3xl md:text-4xl">
          Combien de temps perds-tu chaque semaine ?
        </h1>
        <p className="text-text-muted text-lg mt-4">
          Réponds à quelques questions pour estimer ton potentiel d&apos;automatisation
          et identifier les tâches à déléguer en priorité. Moins de 2 minutes.
        </p>

        <div className="mt-10">
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
