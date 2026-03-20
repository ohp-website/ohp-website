import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from '../privacybeleid/legal.module.css'

export const metadata = {
  title: 'Algemene voorwaarden | Optimal Health Performance',
  description: 'Algemene voorwaarden van Optimal Health Performance.',
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Nav solid />
      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Juridisch</p>
          <h1 className={styles.title}>Algemene voorwaarden</h1>
          <p className={styles.intro}>Laatst bijgewerkt: januari 2025</p>
        </section>
        <section className={styles.content}>
          <div className={styles.inner}>
            <h2>1. Toepasselijkheid</h2>
            <p>Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen en overeenkomsten van Optimal Health Performance (Philip Sliwinski, eenmanszaak, Nederland).</p>

            <h2>2. Abonnementen — KennisKuur</h2>
            <p>De KennisKuur is een maandelijks abonnement. U kunt op elk moment opzeggen via e-mail naar info@optimalhealthperformance.nl. Opzegging geldt per einde van de lopende maand. Reeds betaalde termijnen worden niet terugbetaald.</p>

            <h2>3. Bestellingen — Boek</h2>
            <p>Na bevestiging van uw bestelling wordt het boek zo spoedig mogelijk verzonden via ons fulfillmentpartner. Verzending binnen Nederland is gratis. Levertijd: 2-5 werkdagen.</p>

            <h2>4. Herroepingsrecht</h2>
            <p>Voor digitale producten (KennisKuur) geldt geen herroepingsrecht na activering. Voor het fysieke boek geldt een herroepingstermijn van 14 dagen na ontvangst.</p>

            <h2>5. Aansprakelijkheid</h2>
            <p>De inhoud van de KennisKuur en het boek is uitsluitend bedoeld voor informatieve en educatieve doeleinden. De informatie vormt geen medisch advies en vervangt geen behandeling door een arts of specialist.</p>

            <h2>6. Toepasselijk recht</h2>
            <p>Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden bij voorkeur in onderling overleg opgelost.</p>

            <h2>7. Contact</h2>
            <p>Voor vragen: <a href="mailto:info@optimalhealthperformance.nl">info@optimalhealthperformance.nl</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
