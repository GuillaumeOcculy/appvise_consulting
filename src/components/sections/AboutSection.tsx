import Image from 'next/image'
import { Youtube } from 'lucide-react'
import { YOUTUBE_URL } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="bg-dark text-white py-16 lg:py-24">
      <div className="text-center max-w-2xl mx-auto px-4">
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
        <p className="text-white/80 mt-4 text-lg leading-relaxed">
          Développeur web depuis plus de 12 ans et double certifié n8n, j&apos;aide les entrepreneurs à récupérer leur temps en automatisant ce qui peut l&apos;être — et en développant sur-mesure ce qui ne peut pas.
        </p>
        {YOUTUBE_URL && (
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline mt-6"
          >
            <Youtube size={20} />
            Ma chaîne YouTube
          </a>
        )}
      </div>
    </section>
  )
}
