/* eslint-disable @next/next/no-img-element */
const clients = [
  { name: 'Effy', src: '/logos/effy.svg' },
  { name: 'Altares D&B', src: '/logos/altares.svg' },
  { name: 'Wifirst', src: '/logos/wifirst.svg' },
  { name: 'SideCare', src: '/logos/sidecare.svg' },
  { name: 'Solocal', src: '/logos/solocal.svg' },
  { name: 'Weezevent', src: '/logos/weezevent.svg' },
  { name: 'Hubflo', src: '/logos/hubflo.svg' },
  { name: 'EasyCrowd', src: '/logos/easycrowd.svg' },
  { name: 'Prium Solutions', src: '/logos/prium.png' },
]

function LogoItem({ name, src, hidden = false }: { name: string; src: string; hidden?: boolean }) {
  return (
    <li className="flex shrink-0 items-center justify-center px-8 lg:px-12" aria-hidden={hidden || undefined}>
      <img
        src={src}
        alt={hidden ? '' : name}
        loading="lazy"
        className="h-7 lg:h-8 w-auto max-w-[150px] object-contain opacity-55 transition-opacity duration-200 hover:opacity-100 [filter:brightness(0)_invert(1)]"
      />
    </li>
  )
}

export default function ClientLogos() {
  return (
    <section aria-labelledby="trust-heading" className="text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="trust-heading" className="font-heading font-semibold text-2xl md:text-4xl text-center">
          Ils nous font confiance
        </h2>
        <p className="text-text-muted text-center mt-3 text-base">
          +15 missions réalisées — startups, PME et grands groupes.
        </p>
      </div>

      <div className="marquee-group marquee-mask mt-12 overflow-hidden">
        <ul className="animate-marquee flex w-max items-center">
          {clients.map((c) => (
            <LogoItem key={c.name} name={c.name} src={c.src} />
          ))}
          {clients.map((c) => (
            <LogoItem key={`dup-${c.name}`} name={c.name} src={c.src} hidden />
          ))}
        </ul>
      </div>
    </section>
  )
}
