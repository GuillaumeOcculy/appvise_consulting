import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// Image de preview (Open Graph + Twitter) dédiée à la page /avocats.
// Générée aux couleurs de la charte : near-black + gradient signature,
// corail en accent, Inter, point carré.
export const alt =
  'Création de site internet pour avocat — conforme déontologie & référencé'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const FONTS = 'src/app/avocats/_fonts'

export default async function Image() {
  const [regular, semibold] = await Promise.all([
    readFile(join(process.cwd(), FONTS, 'Inter-Regular.woff')),
    readFile(join(process.cwd(), FONTS, 'Inter-SemiBold.woff')),
  ])

  const meta = [
    'Conformité RIN',
    'Accompagné jusqu’à la validation',
    'Forfait clair',
  ]

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '70px 80px',
          backgroundColor: '#020207',
          backgroundImage:
            'radial-gradient(640px 560px at 12% 118%, #9C1A50 0%, transparent 62%), radial-gradient(560px 500px at 10% -6%, #102A8F 0%, transparent 62%)',
          fontFamily: 'Inter',
        }}
      >
        {/* Wordmark + point carré */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              fontSize: 33,
              fontWeight: 600,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            Appvise Consulting
          </span>
          <span
            style={{
              width: 14,
              height: 14,
              backgroundColor: '#FF4D6D',
              marginLeft: 14,
            }}
          />
        </div>

        {/* Eyebrow + titre */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#FF4D6D',
            }}
          >
            Sites internet pour avocats
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 26,
              fontSize: 60,
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: '#FFFFFF' }}>Conforme à votre déontologie.</span>
            <span style={{ color: '#FF4D6D' }}>Trouvé sur votre spécialité.</span>
          </div>
        </div>

        {/* Ligne de réassurance */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 23,
            color: '#B4B4BC',
          }}
        >
          {meta.map((item, i) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && (
                <span
                  style={{
                    width: 7,
                    height: 7,
                    backgroundColor: '#FF4D6D',
                    margin: '0 16px',
                  }}
                />
              )}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: regular, weight: 400, style: 'normal' },
        { name: 'Inter', data: semibold, weight: 600, style: 'normal' },
      ],
    },
  )
}
