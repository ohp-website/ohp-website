import Image from 'next/image'
import styles from '../Missie.module.css'

export default function MissieV02() {
  return (
    <section className={styles.section} id="meer">
      <div className={styles.inner}>
        <div className={styles.portrait}>
          <Image
            src="/images/philip.png"
            alt="Philip Sliwinski — Optimal Health Performance"
            fill
            className={styles.portraitImg}
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>Over Philip</p>
          <h2 className={styles.title}>
            Ik geloof dat de meeste gezondheidsproblemen te voorkomen zijn — als je weet waar je op moet letten.
          </h2>
          <p className={styles.body}>
            Na jaren van eigen onderzoek en samenwerking met wetenschappers, artsen en leefstijlexperts
            richtte ik OHP op. Niet om een dieet te verkopen, maar om te laten zien hoe zonlicht, bioritme
            en bewuste keuzes je gezondheid fundamenteel kunnen veranderen. Evidence-based, zonder hype.
          </p>
          <span className={styles.link}>
            Lees mijn verhaal <span className={styles.arrow}>→</span>
          </span>
        </div>
      </div>
    </section>
  )
}
