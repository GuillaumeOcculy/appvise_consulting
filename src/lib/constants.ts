export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.appvise-consulting.com'
export const TALLY_QUIZ_URL = process.env.NEXT_PUBLIC_TALLY_QUIZ_URL ?? 'https://tally.so/r/7RXkg6'
// Version "embed" (iframe) du quiz, dérivée de l'URL publique du formulaire.
export const TALLY_QUIZ_EMBED_URL =
  process.env.NEXT_PUBLIC_TALLY_QUIZ_EMBED_URL ??
  TALLY_QUIZ_URL.replace('/r/', '/embed/') +
    (TALLY_QUIZ_URL.includes('?') ? '&' : '?') +
    'alignLeft=1&hideTitle=1&transparentBackground=1'
export const ZCAL_URL = process.env.NEXT_PUBLIC_ZCAL_URL ?? ''
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? ''
export const SITE_NAME = 'Appvise Consulting'
export const SITE_DESCRIPTION = 'Automatisation, développement sur-mesure et IA pour entrepreneurs'
export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? ''
export const YOUTUBE_URL = process.env.NEXT_PUBLIC_YOUTUBE_URL ?? ''
