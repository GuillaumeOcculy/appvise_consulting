'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export default function TrackRendezVous() {
  useEffect(() => {
    window.fbq?.('track', 'Schedule')
  }, [])

  return null
}
