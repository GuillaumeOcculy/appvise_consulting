import { Star, BadgeCheck } from 'lucide-react'

type Testimonial = {
  quote: string
  name: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Guillaume est à l'écoute et disponible. Efficace. Pour moi qui ne suis pas un adepte des applications, c'est un bon interlocuteur. Je souhaite poursuivre cette collaboration pour la poursuite du développement de mes outils.",
    name: 'Thierry',
    company: 'Dirigeant chez Savoirs Sucrés',
  },
  {
    quote:
      "Guillaume est un développeur Ruby on Rails qui a des connaissances solides et une expertise technique exceptionnelle. En freelance, il s'assure toujours que les attentes sont atteintes. Je recommande vivement Guillaume pour tout projet de développement nécessitant une expertise en Ruby on Rails.",
    name: 'Omar',
    company: 'Dirigeant chez Omar Harras Dev',
  },
  {
    quote:
      "Rapide et efficace, Guillaume a su comprendre le besoin de la mission afin de livrer une brique essentielle au fonctionnement d'une application mobile : l'API. J'ai apprécié l'accompagnement (et la patience dont il a fait preuve) sur des technologies que je ne maîtrisais pas. Je recommande les compétences humaines et techniques de Guillaume.",
    name: 'Jordan',
    company: 'Dirigeant chez JDN Consulting',
  },
  {
    quote:
      "Pendant 10 mois, nous avons eu la chance de collaborer avec Guillaume, qui nous a aidés à développer la première version de notre plateforme. Il a su coder de très nombreuses fonctionnalités tout en utilisant les dernières technologies, comme Ruby on Rails 7, et le tout dans un temps record. J'ai été impressionné par sa capacité à comprendre rapidement les besoins de la plateforme et à les traduire en fonctionnalités performantes. Je n'hésiterais pas à travailler à nouveau avec lui et je le recommande vivement pour tout projet.",
    name: 'Fabien Akunda',
    company: 'CTO chez Hubflo',
  },
  {
    quote:
      "J'ai eu l'opportunité de travailler avec Guillaume sur un sujet de migration d'une application depuis la version 3 de Rails vers la version 6. Il a été un membre précieux de l'équipe, apportant ses compétences techniques et son expertise pour mener à bien ce projet complexe. Il a su s'intégrer facilement à l'équipe et travailler de manière efficace en full remote, démontrant ainsi son professionnalisme et son autonomie.",
    name: 'Zouheir I.',
    company: 'Lead Tech chez Solocal',
  },
]

function TestimonialCard({ quote, name, company }: Testimonial) {
  return (
    <figure className="break-inside-avoid mb-6 bg-surface border border-border rounded-2xl p-6 lg:p-7">
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

      <figcaption className="mt-6 flex flex-col border-t border-border pt-5">
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
          Témoignages vérifiés
        </p>
        <h2 id="reviews-heading" className="font-heading font-semibold text-2xl md:text-4xl text-center">
          Ce qu&apos;ils en disent
        </h2>
        <p className="text-text-muted text-center mt-3 text-lg">
          Des entrepreneurs et des équipes tech qui ont travaillé avec moi.
        </p>

        <div className="mt-12 gap-6 columns-1 md:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
