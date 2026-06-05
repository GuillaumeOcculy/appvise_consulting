'use client'

import { useEffect } from 'react'
import { fbqTrack } from '@/lib/fbpixel'

export default function TrackRendezVous() {
  useEffect(() => {
    fbqTrack('track', 'Schedule')
  }, [])

  return null
}
