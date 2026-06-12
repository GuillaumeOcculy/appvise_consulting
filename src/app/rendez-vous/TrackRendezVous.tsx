'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/track'

export default function TrackRendezVous() {
  useEffect(() => {
    trackEvent('track', 'Schedule')
  }, [])

  return null
}
