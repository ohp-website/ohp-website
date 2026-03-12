import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.bg}>
        <Image
          src="/images/BG-02.jpg"
          alt="Zonsondergang aan het water"
          fill
          className={styles.bgImage}
          priority
          quality={90}
        />
      </div>

      {/* Overlays */}
      <div className={styles.overlay} />
      <div className={styles.overlaySide} />
      <div className={styles.grain} />
      <div className={styles.sunGlow} />

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.label}>Optimal Health Performance</p>

        <h1 className={styles.title}>Terug naar de kern van gezondheid.</h1>

        <p className={styles.keywords}>
          <span>Zonlicht</span>
          <span className={styles.dot}>.</span>
          <span>Bioritme</span>
          <span className={styles.dot}>.</span>
          <span>Voeding</span>
          <span className={styles.dot}>.</span>
          <span>Wetenschap</span>
          <span className={styles.dot}>.</span>
        </p>

        <p className={styles.subtitle}>
          Evidence-based leefstijloptimalisatie. Geen hypes, geen trucjes.<br />
          <em>Gewoon de wetenschap, vertaald naar jouw leven.</em>
        </p>

        <div className={styles.ctas}>
          <span className={styles.btnPrimary}>
            Start je kenniskuur
          </span>
          <span className={styles.btnSecondary}>
            Ontdek meer <span className={styles.arrow}>↓</span>
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

      {/* Bottom line */}
      <div className={styles.bottomLine} />
    </section>
  )
}
