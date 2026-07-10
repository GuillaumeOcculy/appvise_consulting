/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
// `h` is tuned per-logo so every mark carries the same optical weight:
// compact/square logos (wifirst, sidecare) sit taller, wide wordmarks shorter.
type Client = { name: string; src: string; h: string }

const clients: Client[] = [
  { name: 'Effy', src: '/logos/effy.svg', h: 'h-7 lg:h-8' },
  { name: 'Altares D&B', src: '/logos/altares.svg', h: 'h-5 lg:h-6' },
  { name: 'Wifirst', src: '/logos/wifirst.svg', h: 'h-16 lg:h-18' },
  { name: 'SideCare', src: '/logos/sidecare.svg', h: 'h-11 lg:h-12' },
  { name: 'Solocal', src: '/logos/solocal.svg', h: 'h-6 lg:h-7' },
  { name: 'Weezevent', src: '/logos/weezevent.svg', h: 'h-7 lg:h-8' },
  { name: 'Hubflo', src: '/logos/hubflo.svg', h: 'h-7 lg:h-8' },
  { name: 'EasyCrowd', src: '/logos/easycrowd.svg', h: 'h-6 lg:h-7' },
  { name: 'Prium Solutions', src: '/logos/prium.png', h: 'h-6 lg:h-7' },
]

function LogoItem({ name, src, h, hidden = false }: Client & { hidden?: boolean }) {
  return (
    <li className="flex shrink-0 items-center justify-center px-8 lg:px-12" aria-hidden={hidden || undefined}>
      <img
        src={src}
        alt={hidden ? '' : name}
        loading="lazy"
        className={`${h} w-auto max-w-[170px] object-contain opacity-55 transition-opacity duration-200 hover:opacity-100 [filter:brightness(0)_invert(1)]`}
      />
    </li>
  )
}

export default function ClientLogos() {
  return (
    <section aria-labelledby="trust-heading" className="text-white py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 id="trust-heading" className="font-heading font-semibold text-2xl md:text-4xl">
          Une base technique solide.
        </h2>
        <p className="text-text-muted mt-4 text-lg leading-relaxed">
          Avant d&apos;automatiser pour des indépendants, j&apos;ai construit des systèmes pour des grands comptes — des APIs qui servent des millions d&apos;utilisateurs. Aujourd&apos;hui, j&apos;intègre l&apos;IA directement dans les produits et les équipes en entreprise. C&apos;est ce qui me permet de diagnostiquer ce dont vous avez vraiment besoin, et de livrer des solutions qui tiennent.
        </p>
      </div>

      <div className="marquee-group marquee-mask mt-12 overflow-hidden">
        <ul className="animate-marquee flex w-max items-center">
          {clients.map((c) => (
            <LogoItem key={c.name} {...c} />
          ))}
          {clients.map((c) => (
            <LogoItem key={`dup-${c.name}`} {...c} hidden />
          ))}
        </ul>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/cas-clients"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-primary"
        >
          Voir mes références techniques
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  )
}
