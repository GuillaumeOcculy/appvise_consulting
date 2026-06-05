'use client'

import { useEffect } from 'react'
import { fbqTrack } from '@/lib/fbpixel'

// Tally émet des messages postMessage depuis l'iframe du formulaire.
// On déclenche l'event Meta Pixel uniquement quand le quiz est soumis.
export default function TrackQuiz() {
  // Ouverture du quiz : signal haut de tunnel (retargeting des non-finisseurs).
  useEffect(() => {
    fbqTrack('track', 'ViewContent')
  }, [])

  // Soumission du quiz : conversion.
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== 'https://tally.so') return

      let data = event.data
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data)
        } catch {
          return
        }
      }

      if (data && data.event === 'Tally.FormSubmitted') {
        fbqTrack('trackCustom', 'QuizComplete')
      }
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return null
}
