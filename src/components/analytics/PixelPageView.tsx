'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { fbqTrack } from '@/lib/fbpixel'

// Next.js navigue côté client : le snippet de base ne s'exécute qu'au premier
// chargement. On renvoie donc un PageView à chaque changement de route.
// Le tout premier PageView est déjà envoyé par le snippet inline du layout,
// on saute donc le rendu initial pour éviter un double comptage.
export default function PixelPageView() {
  const pathname = usePathname()
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    fbqTrack('track', 'PageView')
  }, [pathname])

  return null
}
