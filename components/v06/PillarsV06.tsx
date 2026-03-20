import Link from 'next/link'
import styles from './PillarsV06.module.css'

const pillars = [
  {
    number: '01',
    title: 'Zonlicht & Licht',
    body: 'Hoe licht je biologie stuurt — van melatonine tot cortisolritme en mitochondriale functie.',
    img: '/images/hero-v02-2.jpg',
    href: '/kennisbank/zonlicht-lichttherapie/',
  },
  {
    number: '02',
    title: 'Hormonen & Metabolisme',
    body: 'De hormonale architectuur achter energie, gewicht, slaap en vitaliteit. Geen dieet, wel biologie.',
    img: '/images/hero-v02.jpg',
    href: null,
  },
  {
    number: '03',
    title: 'Biologie & Wetenschap',
    body: 'Evidence-based inzichten uit actueel onderzoek, vertaald naar begrijpelijke en toepasbare kennis.',
    img: '/images/hero-v02-4.jpg',
    href: null,
  },
  {
    number: '04',
    title: 'Leefstijlinterventies',
    body: 'Concrete handelingen met groot effect: kou, hitte, beweging, timing en omgevingsfactoren.',
    img: '/images/hero-v04.jpg',
    href: null,
  },
  {
    number: '05',
    title: 'Vruchtbaarheid & Gezin',
    body: 'Optimale gezondheid als fundament voor vruchtbaarheid, zwangerschap en het opgroeien van kinderen.',
    img: '/images/hero-v02-3.jpg',
    href: null,
  },
  {
    number: '06',
    title: 'Voeding & Antropologie',
    body: 'Voeding als tool, niet als therapie. Whole foods, evolutionair eten en carnivoor perspectief.',
    img: '/images/food.jpg',
    href: null,
  },
]

export default function PillarsV06() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Kennisgebieden</p>
        <h2 className={styles.title}>Zes pijlers. Één fundament.</h2>
        <p className={styles.subtitle}>
          Gezondheid is geen toeval. Het is het resultaat van inzicht in de systemen die je lichaam aansturen.
        </p>
      </div>

      <div className={styles.grid}>
        {pillars.map((pillar, i) => {
          const cardContent = (
            <div className={styles.flipInner}>
              <div className={styles.front}>
                <span className={styles.number}>{pillar.number}</span>
                <div className={styles.divider} />
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardBody}>{pillar.body}</p>
                <span className={styles.cardLink}>Lees meer →</span>
              </div>
              <div
                className={styles.back}
                style={{ backgroundImage: `url(${pillar.img})` }}
              >
                <div className={styles.backOverlay} />
                <div className={styles.backContent}>
                  <h3 className={styles.backTitle}>{pillar.title}</h3>
                  <span className={styles.backLink}>Lees meer →</span>
                </div>
              </div>
            </div>
          )

          return pillar.href ? (
            <Link
              key={pillar.number}
              href={pillar.href}
              className={`${styles.flipWrap} ${i === 0 ? styles.flippedDefault : ''}`}
            >
              {cardContent}
            </Link>
          ) : (
            <div key={pillar.number} className={`${styles.flipWrap} ${i === 0 ? styles.flippedDefault : ''}`}>
              {cardContent}
            </div>
          )
        })}
      </div>
    </section>
  )
}
