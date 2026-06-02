'use client'

import { useEffect } from 'react'

export default function TrackRendezVous() {
  useEffect(() => {
    window.fbq?.('track', 'Schedule')
  }, [])

  return null
}
