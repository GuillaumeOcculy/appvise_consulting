import { fbqTrack } from './fbpixel'

type FbCommand = 'track' | 'trackCustom'

// Génère un identifiant d'event partagé entre le pixel navigateur et la CAPI.
// Meta déduplique sur (event_name + event_id), donc le MÊME id doit être envoyé
// aux deux canaux.
function newEventId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

// Envoie un event sur les deux canaux :
//   1. Pixel navigateur (avec eventID pour la déduplication)
//   2. Conversions API côté serveur (/api/track) avec le même eventID
// Résilient : si la CAPI échoue, le pixel a déjà fait son travail.
export function trackEvent(
  command: FbCommand,
  name: string,
  customData?: Record<string, unknown>,
) {
  const eventId = newEventId()

  // 1) Pixel navigateur. Le 4e argument {eventID} active la déduplication Meta.
  fbqTrack(command, name, customData ?? {}, { eventID: eventId })

  // 2) Conversions API (serveur). Fire-and-forget, keepalive pour survivre à la
  // navigation / fermeture d'onglet.
  if (typeof window !== 'undefined') {
    try {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name,
          eventId,
          customData: customData ?? null,
          url: window.location.href,
        }),
        keepalive: true,
      }).catch(() => {})
    } catch {
      // on ignore : le pixel navigateur reste la source de secours
    }
  }
}
