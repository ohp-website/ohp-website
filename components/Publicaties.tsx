import styles from './Publicaties.module.css'

const publicaties = [
  {
    edition: 'Editie 41',
    pillar: 'Biologie & Wetenschap',
    title: 'Circadiaans Ritme & Metabolisme',
    intro: 'Hoe de timing van je dag je vetverbranding, insulinegevoeligheid en energieniveau bepaalt.',
    date: 'Februari 2026',
  },
  {
    edition: 'Editie 40',
    pillar: 'Hormonen & Metabolisme',
    title: 'Testosteron, Stress & de HPA-as',
    intro: 'De directe link tussen chronische stress, cortisol en de onderdrukking van je geslachtshormonen.',
    date: 'Januari 2026',
  },
  {
    edition: 'Editie 39',
    pillar: 'Zonlicht & Licht',
    title: 'Rood Licht & Mitochondriale Functie',
    intro: 'Waarom het spectrum van zonlicht essentieel is voor cellulaire energieproductie.',
    date: 'December 2025',
  },
]

export default function Publicaties() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Kennisbank</p>
            <h2 className={styles.title}>Laatste publicaties</h2>
          </div>
          <span className={styles.allLink}>
            Alle publicaties →
          </span>
        </div>

        <div className={styles.grid}>
          {publicaties.map((pub, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardCover}>
                <p className={styles.coverEdition}>{pub.edition}</p>
                <p className={styles.coverTitle}>{pub.title}</p>
                <p className={styles.coverSub}>KennisKuur · OHP</p>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.pillarTag}>{pub.pillar}</span>
                <h3 className={styles.cardTitle}>{pub.title}</h3>
                <p className={styles.cardIntro}>{pub.intro}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.date}>{pub.date}</span>
                  <span className={styles.memberLabel}>Alleen voor leden</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
