'use client'

import { useEffect, useRef, useState } from 'react'

interface EmbedWrapperProps {
  src: string
  title: string
  height: number
  fallbackMessage: string
  fallbackContact: string
}

export default function EmbedWrapper({ src, title, height, fallbackMessage, fallbackContact }: EmbedWrapperProps) {
  const [loaded, setLoaded] = useState(false)
  const [timedOut, setTimedOut] = useState(false)
  const loadedRef = useRef(false)

  const handleLoad = () => {
    loadedRef.current = true
    setLoaded(true)
  }

  useEffect(() => {
    if (!src) {
      setTimedOut(true)
      return
    }

    const id = setTimeout(() => {
      if (!loadedRef.current) setTimedOut(true)
    }, 10000)

    return () => clearTimeout(id)
  }, [src])

  if (timedOut) {
    return (
      <div className="bg-surface border border-border rounded-xl p-8 text-center">
        <p className="text-text-muted mb-2">{fallbackMessage}</p>
        {fallbackContact && (
          <a href={`mailto:${fallbackContact}`} className="text-primary hover:underline">
            {fallbackContact}
          </a>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      {!loaded && (
        <div
          className="bg-border animate-pulse rounded-xl"
          style={{ height }}
        />
      )}
      <iframe
        src={src}
        title={title}
        width="100%"
        height={height}
        loading="lazy"
        onLoad={handleLoad}
        className={loaded ? '' : 'absolute inset-0 opacity-0'}
        style={{ border: 'none' }}
      />
    </div>
  )
}
