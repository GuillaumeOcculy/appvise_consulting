import { Star, BadgeCheck } from 'lucide-react'

type Testimonial = {
  quote: string
  name: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Pour moi qui ne suis pas un adepte des applications, c'est un bon interlocuteur. À l'écoute, disponible, efficace.",
    name: 'Thierry',
    company: 'Dirigeant, Savoirs Sucrés',
  },
  {
    quote:
      "J'ai apprécié sa patience sur des technologies que je ne maîtrisais pas.",
    name: 'Jordan',
    company: 'JDN Consulting',
  },
  {
    quote:
      "Impressionné par sa capacité à comprendre les besoins et à livrer dans un temps record.",
    name: 'Fabien',
    company: 'CTO, Hubflo',
  },
]

function TestimonialCard({ quote, name, company }: Testimonial) {
  return (
    <figure className="flex flex-col h-full bg-surface border border-border rounded-2xl p-6 lg:p-7 transition-colors duration-200 hover:border-border-strong hover:bg-surface-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-primary" aria-label="Note 5 sur 5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-current" strokeWidth={0} />
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-text-muted text-xs">
          <BadgeCheck size={15} className="text-primary" />
          Avis vérifié
        </span>
      </div>

      <blockquote className="mt-5 text-[15px] leading-relaxed text-white/85">
        «&nbsp;{quote}&nbsp;»
      </blockquote>

      <figcaption className="mt-auto flex flex-col border-t border-border pt-5">
        <span className="font-heading font-semibold text-sm text-white">{name}</span>
        <span className="text-text-muted text-xs mt-0.5">{company}</span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section aria-labelledby="reviews-heading" className="text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.2em] text-center mb-4">
          Avis clients
        </p>
        <h2 id="reviews-heading" className="font-heading font-semibold text-2xl md:text-4xl text-center">
          Ce qu&apos;ils en disent
        </h2>
        <p className="text-text-muted text-center mt-3 text-lg">
          Avis vérifiés sur Malt.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
