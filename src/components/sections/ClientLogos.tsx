const clients = [
  { name: 'Effy', url: 'https://www.effy.fr' },
  { name: 'Altares D&B', url: 'https://www.altares.com' },
  { name: 'Wifirst', url: 'https://www.wifirst.com' },
  { name: 'SideCare', url: 'https://www.sidecare.com' },
  { name: 'Solocal', url: 'https://www.solocal.com' },
  { name: 'Weezevent', url: 'https://www.weezevent.com' },
  { name: 'Hubflo', url: 'https://www.hubflo.com' },
]

export default function ClientLogos() {
  return (
    <section aria-label="Clients" className="bg-surface py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-text-muted text-sm font-medium uppercase tracking-wider mb-8">
          +15 missions réalisées — startups, PME et grands groupes
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
              aria-label={client.name}
            >
              <span className="text-lg font-heading font-bold text-text-muted/50 group-hover:text-primary transition-colors duration-200">
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
