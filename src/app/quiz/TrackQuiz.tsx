'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/track'

export default function TrackQuiz() {
  // Ouverture du quiz : signal haut de tunnel (retargeting des non-finisseurs).
  useEffect(() => {
    trackEvent('track', 'ViewContent')
  }, [])

  // TEMPORAIRE (debug) : on déclenche QuizComplete au simple chargement de la
  // page /quiz, sans attendre la soumission du formulaire. Objectif : vérifier
  // que l'absence de l'event dans Events Manager ne vient pas de l'embed Tally
  // (postMessage Tally.FormSubmitted qui n'arriverait pas).
  // À REVERT : rebrancher l'écoute postMessage ci-dessous une fois le test fait.
  useEffect(() => {
    trackEvent('trackCustom', 'QuizComplete')
  }, [])

  // --- Version normale (réactiver après le test) ---
  // useEffect(() => {
  //   function onMessage(event: MessageEvent) {
  //     if (event.origin !== 'https://tally.so') return
  //     let data = event.data
  //     if (typeof data === 'string') {
  //       try {
  //         data = JSON.parse(data)
  //       } catch {
  //         return
  //       }
  //     }
  //     if (data && data.event === 'Tally.FormSubmitted') {
  //       trackEvent('trackCustom', 'QuizComplete')
  //     }
  //   }
  //   window.addEventListener('message', onMessage)
  //   return () => window.removeEventListener('message', onMessage)
  // }, [])

  return null
}
