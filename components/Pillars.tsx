import Link from 'next/link'
import styles from './Pillars.module.css'

const pillars = [
  {
    number: '01',
    title: 'Zonlicht & Licht',
    body: 'Hoe licht je biologie stuurt — van melatonine tot cortisolritme en mitochondriale functie.',
    href: '/publicaties?pillar=zonlicht',
  },
  {
    number: '02',
    title: 'Hormonen & Metabolisme',
    body: 'De hormonale architectuur achter energie, gewicht, slaap en vitaliteit. Geen dieet, wel biologie.',
    href: '/publicaties?pillar=hormonen',
  },
  {
    number: '03',
    title: 'Biologie & Wetenschap',
    body: 'Evidence-based inzichten uit actueel onderzoek, vertaald naar begrijpelijke en toepasbare kennis.',
    href: '/publicaties?pillar=wetenschap',
  },
  {
    number: '04',
    title: 'Leefstijlinterventies',
    body: 'Concrete handelingen met groot effect: kou, hitte, beweging, timing en omgevingsfactoren.',
    href: '/publicaties?pillar=leefstijl',
  },
  {
    number: '05',
    title: 'Vruchtbaarheid & Gezin',
    body: 'Optimale gezondheid als fundament voor vruchtbaarheid, zwangerschap en het opgroeien van kinderen.',
    href: '/publicaties?pillar=gezin',
  },
  {
    number: '06',
    title: 'Voeding & Dieet',
    body: 'Voeding als tool, niet als therapie. Whole foods, seizoensgebonden eten en carnivoor perspectief.',
    href: '/publicaties?pillar=voeding',
  },
]

export default function Pillars() {
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
          <Link key={pillar.number} href={pillar.href} className={styles.card}>
            <span className={styles.number}>{pillar.number}</span>
            <h3 className={styles.cardTitle}>{pillar.title}</h3>
            <p className={styles.cardBody}>{pillar.body}</p>
            <span className={styles.cardLink}>Lees meer →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
