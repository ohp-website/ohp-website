import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from '../privacybeleid/legal.module.css'

export const metadata = {
  title: 'Contact | Optimal Health Performance',
  description: 'Neem contact op met Optimal Health Performance.',
}

export default function ContactPage() {
  return (
    <>
      <Nav solid />
      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.title}>Neem contact op</h1>
          <p className={styles.intro}>We reageren doorgaans binnen 1-2 werkdagen.</p>
        </section>
        <section className={styles.content}>
          <div className={styles.inner}>
            <h2>E-mail</h2>
            <p><a href="mailto:info@optimalhealthperformance.nl">info@optimalhealthperformance.nl</a></p>

            <h2>KennisKuur — vragen over je abonnement</h2>
            <p>Voor vragen over je abonnement, opzeggen of facturatie: stuur een e-mail naar <a href="mailto:info@optimalhealthperformance.nl">info@optimalhealthperformance.nl</a> met je naam en e-mailadres.</p>

            <h2>Boek — bezorging en retouren</h2>
            <p>Voor vragen over je boekbestelling, bezorging of retourzending: stuur een e-mail met je bestelnummer.</p>

            <h2>Samenwerking & media</h2>
            <p>Voor samenwerkingsverzoeken, interviews of mediaverzoeken: stuur een e-mail met een korte omschrijving van je voorstel.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
