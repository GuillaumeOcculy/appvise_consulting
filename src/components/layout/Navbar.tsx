'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  // La navbar n'est transparente que par-dessus le hero sombre de la home.
  // Sur les autres pages (fond clair), elle reste solide pour rester lisible.
  const solid = scrolled || pathname !== '/'
  const menuRef = useRef<HTMLDivElement>(null)
  const openButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        openButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  // Focus trap
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !menuRef.current) return

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }, [])

  // Move focus into dialog on open
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      const closeBtn = menuRef.current.querySelector<HTMLElement>('button[aria-label="Fermer le menu"]')
      closeBtn?.focus()
    }
  }, [menuOpen])

  // Sur les landing pages métier (/avocats, /geometres), on masque le
  // raccourci "Diagnostic" pour concentrer la navigation sur le CTA d'appel.
  const hideDiagnostic = pathname === '/avocats' || pathname === '/geometres'
  const navLinks: { label: string; href: string; external?: boolean }[] = hideDiagnostic
    ? []
    : [{ label: 'Diagnostic', href: '/quiz' }]

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          solid ? 'bg-[#020207]/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" aria-label="Appvise Consulting — accueil" className="inline-flex items-center">
            <Image
              src="/images/wordmark-appvise.png"
              alt="Appvise Consulting"
              width={1944}
              height={200}
              priority
              className="h-6 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Button variant="primary" size="sm" href="/rendez-vous">
              Appel gratuit
            </Button>
          </div>

          <button
            ref={openButtonRef}
            className="lg:hidden p-2 text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="fixed inset-0 bg-signature z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          onKeyDown={handleKeyDown}
        >
          <div className="flex items-center justify-between px-4 h-16">
            <Link href="/" aria-label="Appvise Consulting — accueil" className="inline-flex items-center" onClick={() => setMenuOpen(false)}>
              <Image
                src="/images/wordmark-appvise.png"
                alt="Appvise Consulting"
                width={1944}
                height={200}
                className="h-6 w-auto"
              />
            </Link>
            <button
              onClick={() => { setMenuOpen(false); openButtonRef.current?.focus() }}
              className="p-2 text-white"
              aria-label="Fermer le menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg text-white hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="p-4">
            <Button variant="primary" href="/rendez-vous" className="w-full" onClick={() => setMenuOpen(false)}>
              Appel gratuit
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
