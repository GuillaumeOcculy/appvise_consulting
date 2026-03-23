import Image from 'next/image'
import { Youtube, Briefcase, Globe, Code, Brain } from 'lucide-react'
import { YOUTUBE_URL } from '@/lib/constants'

const highlights = [
  { icon: Code, label: '+10 ans de développement web' },
  { icon: Briefcase, label: '15+ missions freelance' },
  { icon: Globe, label: 'Paris & Londres' },
  { icon: Brain, label: 'Double certifié n8n' },
]

const sectors = [
  'Énergie', 'Santé', 'Télécoms', 'Data Intelligence',
  'Assurance', 'Tourisme', 'Événementiel', 'Crowdfunding',
]

export default function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="bg-dark text-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <Image
            src="/images/profile_picture.png"
            alt="Guillaume Occuly"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full mx-auto object-cover"
          />
          <h2 id="about-heading" className="font-heading font-bold text-2xl md:text-4xl mt-6">
            Guillaume Occuly
          </h2>
          <p className="text-white/80 mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
            Développeur web depuis plus de 10 ans et double certifié n8n, j&apos;aide les entrepreneurs à récupérer leur temps en automatisant ce qui peut l&apos;être — et en développant sur-mesure ce qui ne peut pas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {highlights.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2 p-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <item.icon size={20} className="text-primary" />
              </span>
              <span className="text-sm text-white/80">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-white/50 uppercase tracking-wider mb-4">Secteurs d&apos;intervention</p>
          <div className="flex flex-wrap justify-center gap-2">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/70"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-white/60 text-sm leading-relaxed">
            Des startups early-stage aux grands groupes (Effy, Altares D&amp;B, Solocal, Wifirst), j&apos;ai construit des APIs servant des millions d&apos;utilisateurs, lancé mon propre produit mobile, et accompagné des entrepreneurs dans l&apos;automatisation de leur quotidien. Aujourd&apos;hui, je combine cette expérience pour offrir un diagnostic unique : automatiser quand c&apos;est possible, développer quand c&apos;est nécessaire.
          </p>
        </div>

        {YOUTUBE_URL && (
          <div className="text-center mt-8">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Youtube size={20} />
              Ma chaîne YouTube
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
