import styles from './PillarsV03.module.css'

const pillars = [
  { number: '01', title: 'Zonlicht & Licht',        body: 'Hoe licht je biologie stuurt — van melatonine tot cortisolritme en mitochondriale functie.' },
  { number: '02', title: 'Hormonen & Metabolisme',  body: 'De hormonale architectuur achter energie, gewicht, slaap en vitaliteit.' },
  { number: '03', title: 'Biologie & Wetenschap',   body: 'Evidence-based inzichten uit actueel onderzoek, vertaald naar toepasbare kennis.' },
  { number: '04', title: 'Leefstijlinterventies',   body: 'Concrete handelingen met groot effect: kou, hitte, beweging, timing en omgeving.' },
  { number: '05', title: 'Vruchtbaarheid & Gezin',  body: 'Optimale gezondheid als fundament voor vruchtbaarheid en het opgroeien van kinderen.' },
  { number: '06', title: 'Voeding & Antropologie',  body: 'Voeding als tool, niet als therapie. Whole foods en evolutionair eten.' },
]

export default function PillarsV03() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Kennisgebieden</p>
        <h2 className={styles.title}>Zes pijlers.<br />Één fundament.</h2>
      </div>

      <div className={styles.list}>
        {pillars.map((p) => (
          <div key={p.number} className={styles.item}>
            <span className={styles.number}>{p.number}</span>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>{p.title}</h3>
              <p className={styles.itemBody}>{p.body}</p>
            </div>
            <span className={styles.arrow}>→</span>
          </div>
        ))}
      </div>
    </section>
  )
}
