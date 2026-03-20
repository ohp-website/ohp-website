'use client'

import { useRouter } from 'next/navigation'
import { useCart } from '@/lib/cart'
import styles from './KennisKuurPakkettenV05.module.css'

const pakketten = [
  {
    slug: 'basis',
    id: 'kenniskuur-basis',
    name: 'KennisKuur Basis',
    price: 9,
    period: 'per maand',
    description: 'Toegang tot de maandelijkse KennisKuur editie.',
    features: [
      'Maandelijkse editie (PDF)',
      'Archief laatste 3 edities',
      'Opzegbaar per maand',
    ],
    cta: 'Start Basis',
    highlighted: false,
  },
  {
    slug: 'standaard',
    id: 'kenniskuur-standaard',
    name: 'KennisKuur Standaard',
    price: 17,
    period: 'per maand',
    description: 'De meest gekozen optie voor serieuze lezers.',
    features: [
      'Maandelijkse editie (PDF)',
      'Volledig archief (41+ edities)',
      'Exclusieve audio-samenvatting',
      'Opzegbaar per maand',
    ],
    cta: 'Start Standaard',
    highlighted: true,
    badge: 'Meest gekozen',
  },
  {
    slug: 'plus',
    id: 'kenniskuur-plus',
    name: 'KennisKuur Plus',
    price: 27,
    period: 'per maand',
    description: 'Voor professionals die dieper willen gaan.',
    features: [
      'Alles uit Standaard',
      'Maandelijks Q&A-verslag',
      'Prioriteit bij nieuwe edities',
      'Jaarlijks kennisevent (korting)',
    ],
    cta: 'Start Plus',
    highlighted: false,
  },
  {
    slug: 'elite',
    id: 'kenniskuur-elite',
    name: 'KennisKuur Elite',
    price: 247,
    period: 'per maand',
    description: 'Kennisplatform én persoonlijk coachingstraject — voor wie écht wil transformeren.',
    features: [
      'Alles uit Plus',
      'Exclusieve korting op oude publicaties',
      '5 gratis publicaties naar keuze bij aanmelding',
      '2× per maand 1:1 consult van 30 minuten',
      'Keuze uit consulting-pillars (bijv. Testosteronoptimalisatie, Afvallen, Bio-hacking)',
    ],
    cta: 'Vraag Elite aan',
    highlighted: false,
    badge: 'Coaching',
  },
]

export default function KennisKuurPakkettenV05() {
  const { addItem } = useCart()
  const router = useRouter()

  const handleKies = (pak: typeof pakketten[number]) => {
    addItem({
      id: pak.id,
      type: 'subscription',
      name: pak.name,
      price: pak.price,
      period: pak.period,
    })
    router.push('/winkelwagen/')
  }

  return (
    <section id="kenniskuur-pakketten" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>KennisKuur abonnement</p>
        <h2 className={styles.title}>Kies jouw niveau van verdieping.</h2>
        <p className={styles.subtitle}>
          41 edities. 400+ leden. 98% retentie. Sluit je aan bij de meest serieuze leefstijlgemeenschap van Nederland.
        </p>
      </div>

      <div className={styles.grid}>
        {pakketten.map((pak) => (
          <div
            key={pak.name}
            className={`${styles.card} ${pak.highlighted ? styles.highlighted : ''}`}
          >
            {pak.badge && (
              <span className={styles.badge}>{pak.badge}</span>
            )}
            <div className={styles.cardTop}>
              <h3 className={styles.name}>{pak.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.price}>€{pak.price}</span>
                <span className={styles.period}>{pak.period}</span>
              </div>
              <p className={styles.description}>{pak.description}</p>
            </div>

            <ul className={styles.features}>
              {pak.features.map((f) => (
                <li key={f} className={styles.feature}>
                  <span className={styles.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleKies(pak)}
              className={`${styles.cta} ${pak.highlighted ? styles.ctaHighlighted : ''}`}
            >
              {pak.cta}
            </button>
          </div>
        ))}
      </div>

      <p className={styles.footnote}>
        Alle bedragen zijn inclusief btw. Opzeggen is altijd mogelijk via jouw account.
      </p>
    </section>
  )
}
