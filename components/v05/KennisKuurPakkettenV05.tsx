import styles from './KennisKuurPakkettenV05.module.css'

const pakketten = [
  {
    name: 'Basis',
    price: '€9',
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
    name: 'Standaard',
    price: '€17',
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
    name: 'Plus',
    price: '€27',
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
    name: 'Jaarlijks',
    price: '€149',
    period: 'per jaar',
    description: 'Beste waarde — twee maanden gratis.',
    features: [
      'Alles uit Plus',
      'Twee maanden gratis',
      'Fysieke editie per post',
      'Persoonlijk welkomstgesprek',
    ],
    cta: 'Start Jaarlijks',
    highlighted: false,
    badge: 'Beste waarde',
  },
]

export default function KennisKuurPakkettenV05() {
  return (
    <section className={styles.section}>
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
                <span className={styles.price}>{pak.price}</span>
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

            <span className={`${styles.cta} ${pak.highlighted ? styles.ctaHighlighted : ''}`}>
              {pak.cta}
            </span>
          </div>
        ))}
      </div>

      <p className={styles.footnote}>
        Alle bedragen zijn inclusief btw. Opzeggen is altijd mogelijk via jouw account.
      </p>
    </section>
  )
}
