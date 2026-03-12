import styles from './PillarsV04.module.css'

const pillars = [
  { number: '01', title: 'Zonlicht & Licht',       body: 'Hoe licht je biologie stuurt — van melatonine tot cortisolritme en mitochondriale functie.' },
  { number: '02', title: 'Hormonen & Metabolisme', body: 'De hormonale architectuur achter energie, gewicht, slaap en vitaliteit.' },
  { number: '03', title: 'Biologie & Wetenschap',  body: 'Evidence-based inzichten uit actueel onderzoek, vertaald naar toepasbare kennis.' },
  { number: '04', title: 'Leefstijlinterventies',  body: 'Concrete handelingen met groot effect: kou, hitte, beweging, timing en omgeving.' },
  { number: '05', title: 'Vruchtbaarheid & Gezin', body: 'Optimale gezondheid als fundament voor vruchtbaarheid en het opgroeien van kinderen.' },
  { number: '06', title: 'Voeding & Antropologie', body: 'Voeding als tool, niet als therapie. Whole foods en evolutionair eten.' },
]

export default function PillarsV04() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerMeta}>
          <span className={styles.metaLine} />
          <span className={styles.eyebrow}>Kennisgebieden</span>
        </div>
        <h2 className={styles.title}>Zes pijlers.<br />Één fundament.</h2>
      </div>

      <div className={styles.grid}>
        {pillars.map((p) => (
          <div key={p.number} className={styles.pillar}>
            <span className={styles.number}>{p.number}</span>
            <div className={styles.rule} />
            <h3 className={styles.pillarTitle}>{p.title}</h3>
            <p className={styles.pillarBody}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
