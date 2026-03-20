import Nav from '@/components/Nav'
import KennisKuurPakkettenV05 from '@/components/v05/KennisKuurPakkettenV05'
import Footer from '@/components/Footer'
import styles from './kenniskuur.module.css'

export const metadata = {
  title: 'KennisKuur — Maandelijks wetenschappelijk leefstijlabonnement | OHP',
  description:
    'Word lid van de KennisKuur. 41+ edities, 400+ leden, 98% retentie. Kies het abonnement dat bij jouw niveau van verdieping past.',
}

export default function KennisKuurPage() {
  return (
    <>
      <Nav solid />
      <main>
        <section className={styles.pageHeader}>
          <div className={styles.pageHeaderImage} />
          <span className={styles.eyebrow}>Maandelijks abonnement</span>
          <h1 className={styles.title}>De KennisKuur</h1>
          <p className={styles.subtitle}>
            Elke maand een diepgaande wetenschappelijke publicatie over leefstijl,
            biologie en gezondheidsoptimalisatie. Geen hypes. Geen reclame.
            Alleen kennis die telt.
          </p>
        </section>

        <KennisKuurPakkettenV05 />
      </main>
      <Footer />
    </>
  )
}
