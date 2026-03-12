import Image from 'next/image'
import styles from '../Publicaties.module.css'
import localStyles from './PublicatiesV02.module.css'

const publicaties = [
  {
    edition: 'Gratis artikel',
    pillar: 'Zonlicht & Licht',
    title: 'Waarom je wekker je gezondheid saboteert',
    intro: 'Wat de wetenschap zegt over ochtendlicht, cortisolpiek en hoe je dag begint voor je lichaam.',
    date: 'Maart 2026',
    free: true,
    image: '/images/hero-v02-2.jpg',
  },
  {
    edition: 'Editie 41',
    pillar: 'Biologie & Wetenschap',
    title: 'Circadiaans Ritme & Metabolisme',
    intro: 'Hoe de timing van je dag je vetverbranding, insulinegevoeligheid en energieniveau bepaalt.',
    date: 'Februari 2026',
    free: false,
    image: '/images/hero-v02.jpg',
  },
  {
    edition: 'Editie 40',
    pillar: 'Hormonen & Metabolisme',
    title: 'Testosteron, Stress & de HPA-as',
    intro: 'De directe link tussen chronische stress, cortisol en de onderdrukking van je geslachtshormonen.',
    date: 'Januari 2026',
    free: false,
    image: '/images/hero-v02-3.jpg',
  },
]

export default function PublicatiesV02() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Kennisbank</p>
            <h2 className={styles.title}>Laatste publicaties</h2>
          </div>
          <span className={styles.allLink}>Alle publicaties →</span>
        </div>

        <div className={styles.grid}>
          {publicaties.map((pub, i) => (
            <div key={i} className={`${styles.card} ${pub.free ? localStyles.freeCard : ''}`}>
              <div className={localStyles.coverWrap}>
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className={localStyles.coverImg}
                  sizes="(max-width: 900px) 100vw, 370px"
                  quality={85}
                />
                <div className={localStyles.coverOverlay} />
                {pub.free && <span className={localStyles.freeBadge}>Gratis te lezen</span>}
                <div className={localStyles.coverText}>
                  <p className={localStyles.coverEdition}>{pub.edition}</p>
                  <p className={localStyles.coverTitle}>{pub.title}</p>
                </div>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.pillarTag}>{pub.pillar}</span>
                <h3 className={styles.cardTitle}>{pub.title}</h3>
                <p className={styles.cardIntro}>{pub.intro}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.date}>{pub.date}</span>
                  {pub.free
                    ? <span className={localStyles.freeLabel}>Gratis artikel</span>
                    : <span className={styles.memberLabel}>Alleen voor leden</span>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
