export const FB_PIXEL_ID = '4518512965138257'

// Déclenche un événement Meta Pixel de façon fiable.
// Si fbq n'est pas encore chargé (race au premier rendu d'un accès direct),
// on réessaie jusqu'à ce qu'il le soit. Comme fbq n'existe qu'une fois le
// snippet de base exécuté (init compris), l'ordre init -> track est garanti.
export function fbqTrack(...args: unknown[]) {
  if (typeof window === 'undefined') return

  if (typeof window.fbq === 'function') {
    window.fbq(...args)
    return
  }

  let tries = 0
  const id = window.setInterval(() => {
    tries += 1
    if (typeof window.fbq === 'function') {
      window.clearInterval(id)
      window.fbq(...args)
    } else if (tries > 50) {
      window.clearInterval(id) // abandon après ~10s
    }
  }, 200)
}
