import styles from './Boek.module.css'

export default function Boek() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.mockup}>
          <div className={styles.bookWrap}>
            <div className={styles.bookSide} />
            <div className={styles.bookFront}>
              <div className={styles.bookContent}>
                <p className={styles.bookLabel}>Philip Sliwinski</p>
                <h3 className={styles.bookTitle}>Een lang leven vitaal</h3>
                <div className={styles.bookDivider} />
                <p className={styles.bookPub}>Optimal Health Performance</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>Boek</p>
          <h2 className={styles.title}>Een lang leven vitaal</h2>
          <p className={styles.body}>
            Ontdek hoe een carnivoor voedingspatroon, gecombineerd met inzicht in bioritme en hormonen,
            bijdraagt aan langdurige vitaliteit. Geen modieus dieetboek — maar een wetenschappelijk
            onderbouwd handboek voor wie de diepte in wil.
          </p>
          <span className={styles.cta}>
            Bestel het boek
          </span>
        </div>
      </div>
    </section>
  )
}
