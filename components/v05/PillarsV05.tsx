import styles from './PillarsV05.module.css'

const pillars = [
  {
    number: '01',
    title: 'Zonlicht & Licht',
    body: 'Hoe licht je biologie stuurt — van melatonine tot cortisolritme en mitochondriale functie.',
    img: '/images/hero-v02-2.jpg',
  },
  {
    number: '02',
    title: 'Hormonen & Metabolisme',
    body: 'De hormonale architectuur achter energie, gewicht, slaap en vitaliteit. Geen dieet, wel biologie.',
    img: '/images/hero-v02.jpg',
  },
  {
    number: '03',
    title: 'Biologie & Wetenschap',
    body: 'Evidence-based inzichten uit actueel onderzoek, vertaald naar begrijpelijke en toepasbare kennis.',
    img: '/images/hero-v02-4.jpg',
  },
  {
    number: '04',
    title: 'Leefstijlinterventies',
    body: 'Concrete handelingen met groot effect: kou, hitte, beweging, timing en omgevingsfactoren.',
    img: '/images/hero-v04.jpg',
  },
  {
    number: '05',
    title: 'Vruchtbaarheid & Gezin',
    body: 'Optimale gezondheid als fundament voor vruchtbaarheid, zwangerschap en het opgroeien van kinderen.',
    img: '/images/hero-v02-3.jpg',
  },
  {
    number: '06',
    title: 'Voeding & Antropologie',
    body: 'Voeding als tool, niet als therapie. Whole foods, evolutionair eten en carnivoor perspectief.',
    img: '/images/food.jpg',
  },
]

export default function PillarsV05() {
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
        {pillars.map((pillar) => (
          <div
            key={pillar.number}
            className={styles.card}
            style={{ backgroundImage: `url(${pillar.img})` }}
          >
            <div className={styles.overlay} />
            <div className={styles.content}>
              <span className={styles.number}>{pillar.number}</span>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardBody}>{pillar.body}</p>
              <span className={styles.cardLink}>Lees meer →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
