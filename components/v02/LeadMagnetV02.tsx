'use client'

import styles from './LeadMagnetV02.module.css'

export default function LeadMagnetV02() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Gratis gids</p>
          <h2 className={styles.title}>
            5 Wetenschappelijk Bewezen Leefstijlinterventies Die Je Huisarts Niet Kent
          </h2>
          <p className={styles.body}>
            Sluit je aan bij 400+ gezondheidsbewuste Nederlanders en ontvang direct de gratis mini-gids.
            Geen spam. Geen reclame. Alleen kennis.
          </p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Jouw e-mailadres"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.btn}>
            Stuur mij de gids
          </button>
          <p className={styles.fine}>
            Je kunt je op elk moment uitschrijven. Wij respecteren je privacy.
          </p>
        </form>
      </div>
    </section>
  )
}
