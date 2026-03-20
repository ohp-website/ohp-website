import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './legal.module.css'

export const metadata = {
  title: 'Privacybeleid | Optimal Health Performance',
  description: 'Privacybeleid van Optimal Health Performance.',
}

export default function PrivacybeleidPage() {
  return (
    <>
      <Nav solid />
      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Juridisch</p>
          <h1 className={styles.title}>Privacybeleid</h1>
          <p className={styles.intro}>Laatst bijgewerkt: januari 2025</p>
        </section>
        <section className={styles.content}>
          <div className={styles.inner}>
            <h2>1. Wie zijn wij?</h2>
            <p>Optimal Health Performance is een eenmanszaak van Philip Sliwinski, gevestigd in Nederland. KvK-nummer: [in te vullen]. E-mail: info@optimalhealthperformance.nl</p>

            <h2>2. Welke gegevens verzamelen wij?</h2>
            <p>Wij verzamelen de volgende persoonsgegevens wanneer u zich aanmeldt voor de KennisKuur of het boek bestelt:</p>
            <ul>
              <li>Naam en e-mailadres</li>
              <li>Betalingsgegevens (verwerkt via Mollie)</li>
              <li>Bezorgadres (bij boekbestelling)</li>
            </ul>

            <h2>3. Waarvoor gebruiken wij uw gegevens?</h2>
            <p>Uw gegevens worden uitsluitend gebruikt voor het uitvoeren van uw abonnement of bestelling, en voor het versturen van de KennisKuur-edities waarvoor u zich heeft aangemeld.</p>

            <h2>4. Bewaartermijn</h2>
            <p>Wij bewaren uw gegevens niet langer dan noodzakelijk is voor de genoemde doeleinden, of zolang de wet dat vereist.</p>

            <h2>5. Uw rechten</h2>
            <p>U heeft het recht op inzage, correctie en verwijdering van uw persoonsgegevens. Neem daarvoor contact op via info@optimalhealthperformance.nl.</p>

            <h2>6. Vragen?</h2>
            <p>Voor vragen over dit privacybeleid kunt u contact opnemen via <a href="mailto:info@optimalhealthperformance.nl">info@optimalhealthperformance.nl</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
