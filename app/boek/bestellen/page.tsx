'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styles from './bestellen.module.css'

export default function BestellenPage() {
  const [qty, setQty] = useState(1)

  return (
    <>
      <Nav solid />
      <main className={styles.page}>
        <div className={styles.inner}>

          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/boek/">← Terug naar boek</Link>
          </div>

          <h1 className={styles.pageTitle}>Jouw winkelwagen</h1>

          <div className={styles.layout}>

            {/* Cart item */}
            <div className={styles.cart}>
              <div className={styles.cartItem}>
                <Image
                  src="/images/kaft.png"
                  alt="Een lang leven vitaal"
                  width={80}
                  height={110}
                  className={styles.itemImg}
                />
                <div className={styles.itemDetails}>
                  <p className={styles.itemTitle}>Een lang leven vitaal</p>
                  <p className={styles.itemAuthor}>Philip Sliwinski</p>
                  <p className={styles.itemFormat}>Paperback · Nederlandstalig</p>
                  <div className={styles.qtyRow}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      aria-label="Minder"
                    >−</button>
                    <span className={styles.qtyNum}>{qty}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => setQty(qty + 1)}
                      aria-label="Meer"
                    >+</button>
                  </div>
                </div>
                <div className={styles.itemPrice}>
                  € {(24.95 * qty).toFixed(2).replace('.', ',')}
                </div>
              </div>

              <div className={styles.cartTotals}>
                <div className={styles.totalRow}>
                  <span>Subtotaal</span>
                  <span>€ {(24.95 * qty).toFixed(2).replace('.', ',')}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Verzending</span>
                  <span className={styles.free}>Gratis</span>
                </div>
                <div className={`${styles.totalRow} ${styles.totalFinal}`}>
                  <span>Totaal</span>
                  <span>€ {(24.95 * qty).toFixed(2).replace('.', ',')}</span>
                </div>
                <p className={styles.vatNote}>Inclusief BTW</p>
              </div>
            </div>

            {/* Checkout form placeholder */}
            <div className={styles.checkout}>
              <h2 className={styles.checkoutTitle}>Bezorggegevens</h2>
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
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.label}>Straat en huisnummer</label>
                  <input type="text" className={styles.input} placeholder="Voorbeeldstraat 12" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Postcode</label>
                  <input type="text" className={styles.input} placeholder="1234 AB" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Stad</label>
                  <input type="text" className={styles.input} placeholder="Amsterdam" />
                </div>
              </div>

              <button className={styles.payBtn} disabled>
                Doorgaan naar betaling
                <span className={styles.payNote}>via Mollie — iDEAL, creditcard, SEPA</span>
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
