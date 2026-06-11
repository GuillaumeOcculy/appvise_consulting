'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed bottom-0 inset-x-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-label="Actions rapides"
    >
      <div className="bg-[#020207]/95 backdrop-blur-md border-t border-border p-3">
        <div className="flex gap-2">
          <Button variant="primary" size="sm" href="/rendez-vous" className="flex-1">
            Appel gratuit
          </Button>
          <Button variant="secondary" size="sm" href="/quiz" className="flex-1">
            Quiz
          </Button>
        </div>
      </div>
    </nav>
  )
}
