'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './bestellen.module.css'

const pakketten: Record<string, { name: string; price: string; priceNum: number; period: string; features: string[] }> = {
  basis: {
    name: 'KennisKuur Basis',
    price: '€9',
    priceNum: 9,
    period: 'per maand',
    features: ['Maandelijkse editie (PDF)', 'Archief laatste 3 edities', 'Opzegbaar per maand'],
  },
  standaard: {
    name: 'KennisKuur Standaard',
    price: '€17',
    priceNum: 17,
    period: 'per maand',
    features: ['Maandelijkse editie (PDF)', 'Volledig archief (41+ edities)', 'Exclusieve audio-samenvatting', 'Opzegbaar per maand'],
  },
  plus: {
    name: 'KennisKuur Plus',
    price: '€27',
    priceNum: 27,
    period: 'per maand',
    features: ['Alles uit Standaard', 'Maandelijks Q&A-verslag', 'Prioriteit bij nieuwe edities', 'Jaarlijks kennisevent (korting)'],
  },
  elite: {
    name: 'KennisKuur Elite',
    price: '€247',
    priceNum: 247,
    period: 'per maand',
    features: ['Alles uit Plus', '5 gratis publicaties bij aanmelding', '2× per maand 1:1 consult (30 min)', 'Persoonlijk coachingstraject'],
  },
}

function BestellenContent() {
  const searchParams = useSearchParams()
  const slug = searchParams.get('pakket') ?? 'standaard'
  const pakket = pakketten[slug] ?? pakketten.standaard

  return (
    <>
      <Nav solid />
      <main className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.breadcrumb}>
            <Link href="/kenniskuur/">← Terug naar KennisKuur</Link>
          </div>

          <h1 className={styles.pageTitle}>Jouw abonnement</h1>

          <div className={styles.layout}>
            {/* Geselecteerd pakket */}
            <div className={styles.cart}>
              <div className={styles.cartItem}>
                <div className={styles.itemIcon}>KK</div>
                <div className={styles.itemDetails}>
                  <p className={styles.itemTitle}>{pakket.name}</p>
                  <p className={styles.itemFormat}>Digitaal abonnement · maandelijks opzegbaar</p>
                  <ul className={styles.itemFeatures}>
                    {pakket.features.map((f) => (
                      <li key={f}><span className={styles.check}>✓</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.itemPrice}>
                  <span className={styles.priceMain}>{pakket.price}</span>
                  <span className={styles.pricePeriod}>{pakket.period}</span>
                </div>
              </div>

              <div className={styles.cartTotals}>
                <div className={styles.totalRow}>
                  <span>Maandelijks bedrag</span>
                  <span>{pakket.price}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Eerste betaling</span>
                  <span>{pakket.price}</span>
                </div>
                <div className={`${styles.totalRow} ${styles.totalFinal}`}>
                  <span>Vandaag te betalen</span>
                  <span>{pakket.price}</span>
                </div>
                <p className={styles.vatNote}>Inclusief BTW · automatische incasso via SEPA</p>
              </div>

              <div className={styles.changePlan}>
                <Link href="/kenniskuur/" className={styles.changePlanLink}>
                  Ander abonnement kiezen
                </Link>
              </div>
            </div>

            {/* Checkout form */}
            <div className={styles.checkout}>
              <h2 className={styles.checkoutTitle}>Jouw gegevens</h2>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Voornaam</label>
                  <input type="text" className={styles.input} placeholder="Jan" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Achternaam</label>
                  <input type="text" className={styles.input} placeholder="de Vries" />
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>E-mailadres</label>
                  <input type="email" className={styles.input} placeholder="jan@voorbeeld.nl" />
                </div>
              </div>

              <div className={styles.sepaNote}>
                <span className={styles.sepaIcon}>🔒</span>
                <p>Betaling via SEPA-incasso of iDEAL, verwerkt door Mollie. Je gegevens worden nooit gedeeld.</p>
              </div>

              <button className={styles.payBtn} disabled>
                Abonnement starten
                <span className={styles.payNote}>via Mollie — iDEAL, SEPA-incasso</span>
              </button>
              <p className={styles.comingSoon}>Betaalintegratie wordt binnenkort live gezet.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function BestellenPage() {
  return (
    <Suspense fallback={null}>
      <BestellenContent />
    </Suspense>
  )
}
