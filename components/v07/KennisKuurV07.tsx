import styles from '@/components/KennisKuur.module.css'

export default function KennisKuurV07() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Maandelijks abonnement</p>
          <h2 className={styles.title}>De KennisKuur</h2>
          <p className={styles.body}>
            Elke maand een diepgaande wetenschappelijke publicatie over leefstijl, biologie en gezondheidsoptimalisatie.
            Geen oppervlakkige tips. Geen reclame. Alleen kennis die telt.
          </p>

          <ul className={styles.features}>
            <li>Maandelijkse editie van 20–30 pagina's</li>
            <li>Gebaseerd op peer-reviewed onderzoek</li>
            <li>Toegang tot het volledige archief (41+ edities)</li>
            <li>Community van gelijkgestemde leden</li>
          </ul>

          <div className={styles.proof}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>400+</span>
              <span className={styles.statLabel}>Leden</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>41+</span>
              <span className={styles.statLabel}>Edities</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Retentie</span>
            </div>
          </div>

          <a href="#kenniskuur-pakketten" className={styles.cta}>
            Start je KennisKuur
          </a>
        </div>

        <div className={styles.covers}>
          <div className={`${styles.cover} ${styles.coverBack}`} />
          <div className={`${styles.cover} ${styles.coverMid}`} />
          <div className={`${styles.cover} ${styles.coverFront}`}>
            <div className={styles.coverInner}>
              <p className={styles.coverLabel}>KennisKuur</p>
              <p className={styles.coverEdition}>Editie 41</p>
              <p className={styles.coverTitle}>Circadiaans Ritme & Metabolisme</p>
              <p className={styles.coverSub}>Optimal Health Performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
