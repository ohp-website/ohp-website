import Image from 'next/image'
import styles from './MissieV03.module.css'

export default function MissieV03() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Over Philip</p>
          <h2 className={styles.title}>
            Gezondheid is geen geluk.<br />Het is een keuze.
          </h2>
          <p className={styles.body}>
            Na jaren van eigen onderzoek en samenwerking met wetenschappers, artsen en leefstijlexperts
            richtte ik OHP op. Niet om een dieet te verkopen, maar om te laten zien hoe zonlicht, bioritme
            en bewuste keuzes je gezondheid fundamenteel kunnen veranderen.
          </p>
          <blockquote className={styles.pullquote}>
            "Ik geloof dat de meeste gezondheidsproblemen te voorkomen zijn — als je weet waar je op moet letten."
          </blockquote>
          <span className={styles.link}>Lees mijn verhaal →</span>
        </div>

        <div className={styles.portrait}>
          <Image
            src="/images/philip.png"
            alt="Philip Sliwinski"
            fill
            className={styles.portraitImg}
            sizes="50vw"
          />
          <div className={styles.portraitOverlay} />
        </div>
      </div>
    </section>
  )
}
