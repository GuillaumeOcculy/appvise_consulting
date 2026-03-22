import Link from 'next/link'
import { Linkedin, Youtube } from 'lucide-react'
import { LINKEDIN_URL, YOUTUBE_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <Link href="/" className="font-heading font-bold text-xl">
              Appvise Consulting
            </Link>
            <p className="text-text-muted text-sm mt-2">
              Automatisation et développement sur-mesure pour entrepreneurs.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-text-muted hover:text-white transition-colors text-sm">Accueil</Link></li>
              <li><Link href="/#cas-clients" className="text-text-muted hover:text-white transition-colors text-sm">Cas clients</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Suivez-moi</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              {LINKEDIN_URL && (
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              )}
              {YOUTUBE_URL && (
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-text-muted hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
          <span>&copy; 2026 Appvise Consulting</span>
        </div>
      </div>
    </footer>
  )
}
