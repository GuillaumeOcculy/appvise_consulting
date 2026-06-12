import { NextRequest, NextResponse } from 'next/server'
import { FB_PIXEL_ID } from '@/lib/fbpixel'

// Conversions API (CAPI) : on envoie l'event à Meta côté serveur, en direct.
// Le pixel navigateur envoie le même event avec le même event_id en parallèle ;
// Meta déduplique sur (event_name + event_id). Aucun double comptage.

// Version de l'API Graph. Surchargée via env si Meta déprécie la version.
const GRAPH_VERSION = process.env.META_GRAPH_VERSION || 'v21.0'

// Cet endpoint ne doit jamais être mis en cache.
export const dynamic = 'force-dynamic'

type TrackBody = {
  name?: string
  eventId?: string
  customData?: Record<string, unknown> | null
  url?: string
}

export async function POST(req: NextRequest) {
  const token = process.env.META_CAPI_ACCESS_TOKEN
  const pixelId = process.env.META_PIXEL_ID || FB_PIXEL_ID

  // Pas de token configuré : on ne casse rien côté client, le pixel navigateur
  // continue de fonctionner seul.
  if (!token) {
    return NextResponse.json({ ok: false, reason: 'no-token' })
  }

  let body: TrackBody
  try {
    body = (await req.json()) as TrackBody
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad-json' }, { status: 400 })
  }

  const { name, eventId, customData, url } = body
  if (!name || !eventId) {
    return NextResponse.json({ ok: false, reason: 'missing-fields' }, { status: 400 })
  }

  // Données d'appariement (match quality). IP et user-agent sont envoyés bruts
  // (Meta les hashe). _fbp / _fbc viennent des cookies posés par le pixel.
  const fbp = req.cookies.get('_fbp')?.value
  const fbc = req.cookies.get('_fbc')?.value
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    undefined
  const ua = req.headers.get('user-agent') || undefined

  const userData: Record<string, unknown> = {}
  if (ip) userData.client_ip_address = ip
  if (ua) userData.client_user_agent = ua
  if (fbp) userData.fbp = fbp
  if (fbc) userData.fbc = fbc
  // Note : si un jour on capture email/téléphone (ex. soumission Tally), il faut
  // les ajouter ici hashés en SHA-256 (em / ph) pour booster le match quality.

  const event: Record<string, unknown> = {
    event_name: name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: 'website',
    user_data: userData,
  }
  if (url) event.event_source_url = url
  if (customData) event.custom_data = customData

  const payload: Record<string, unknown> = { data: [event] }
  // Code de test (Events Manager > Test events) pour valider l'intégration.
  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${token}`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      },
    )

    if (!res.ok) {
      const detail = await res.json().catch(() => ({}))
      console.error('[CAPI] Meta a rejeté l’event', res.status, JSON.stringify(detail))
      return NextResponse.json({ ok: false, status: res.status }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('[CAPI] Erreur réseau vers Meta', e)
    return NextResponse.json({ ok: false }, { status: 502 })
  }
}
