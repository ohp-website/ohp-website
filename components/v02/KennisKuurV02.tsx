import styles from './KennisKuurV02.module.css'

export default function KennisKuurV02() {
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

          <span className={styles.cta}>
            Start je KennisKuur
          </span>
        </div>

        <div className={styles.editionWrap}>
          <div className={styles.editionStack}>
            <div className={`${styles.editionCard} ${styles.card1}`} />
            <div className={`${styles.editionCard} ${styles.card2}`} />
            <div className={`${styles.editionCard} ${styles.card3}`}>
              <p className={styles.cardBrand}>OHP · KennisKuur</p>
              <p className={styles.cardNum}>43</p>
              <div className={styles.cardDivider} />
              <p className={styles.cardTitle}>Koude Blootstelling</p>
              <p className={styles.cardMeta}>Maandelijkse editie · 28 pagina's</p>
            </div>
          </div>
          <span className={styles.editionLink}>Bekijk de prijzen →</span>
        </div>
      </div>
    </section>
  )
}
