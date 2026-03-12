import styles from './KennisKuurV04.module.css'

const stats = [
  { num: '400', label: 'Actieve leden' },
  { num: '41+', label: 'Edities verschenen' },
  { num: '98%', label: 'Jaarlijkse retentie' },
]

export default function KennisKuurV04() {
  return (
    <section className={styles.section}>

      {/* Grote stats als visueel ankerpunt */}
      <div className={styles.statsBar}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            {i > 0 && <div className={styles.statRule} />}
            <div className={styles.statContent}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content + editie */}
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Maandelijks abonnement</p>
          <h2 className={styles.title}>De KennisKuur</h2>
          <p className={styles.body}>
            Elke maand een diepgaande wetenschappelijke publicatie over leefstijl, biologie
            en gezondheidsoptimalisatie. Geen oppervlakkige tips. Geen reclame. Alleen kennis die telt.
          </p>
          <ul className={styles.features}>
            <li>Maandelijkse editie van 20–30 pagina's</li>
            <li>Gebaseerd op peer-reviewed onderzoek</li>
            <li>Toegang tot het volledige archief (41+ edities)</li>
            <li>Community van gelijkgestemde leden</li>
          </ul>
          <span className={styles.cta}>Start je KennisKuur</span>
        </div>

        <div className={styles.editionPanel}>
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
