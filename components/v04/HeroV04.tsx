import Image from 'next/image'
import styles from './HeroV04.module.css'

export default function HeroV04() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        <div className={styles.left}>
          <div className={styles.meta}>
            <span className={styles.metaLine} />
            <span className={styles.metaLabel}>Optimale Gezondheid · Philip Sliwinski</span>
          </div>
          <h1 className={styles.headline}>
            <span>Elke dag</span>
            <em className={styles.italic}>iets beter</em>
            <span>dan gisteren.</span>
          </h1>
          <p className={styles.body}>
            Evidence-based leefstijl. Zonlicht, bioritme en bewuste keuzes —
            gebundeld in één platform voor iedereen die serieus bezig is met gezondheid.
          </p>
          <div className={styles.actions}>
            <span className={styles.ctaPrimary}>Start je KennisKuur</span>
            <span className={styles.ctaLink}>Bestel het boek →</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.photoContainer}>
            <div className={styles.photoWrap}>
              <Image
                src="/images/hero-v04.jpg"
                alt="Philip Sliwinski"
                fill
                className={styles.photo}
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>

            {/* Zwevend boekcover linksonder */}
            <div className={styles.floatBook}>
              <Image
                src="/images/kaft.png"
                alt="Een lang leven vitaal"
                fill
                className={styles.floatBookImg}
                sizes="130px"
              />
            </div>

            {/* Zwevend portret rechtsbovenin */}
            <div className={styles.floatPortrait}>
              <Image
                src="/images/philip-portrait.png"
                alt="Philip Sliwinski"
                fill
                className={styles.floatPortraitImg}
                sizes="120px"
              />
            </div>
          </div>

          <p className={styles.caption}>Everyday a little bit better than yesterday.</p>
        </div>

      </div>
    </section>
  )
}
