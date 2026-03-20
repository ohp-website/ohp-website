'use client'

import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useCart } from '@/lib/cart'
import styles from './winkelwagen.module.css'

export default function WinkelwagenPage() {
  const { items, removeItem, updateQuantity } = useCart()

  const products = items.filter(i => i.type === 'product')
  const subscription = items.find(i => i.type === 'subscription')

  const productTotal = products.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const hasItems = items.length > 0

  return (
    <>
      <Nav solid />
      <main className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.breadcrumb}>
            <Link href="/">← Verder winkelen</Link>
          </div>

          <h1 className={styles.pageTitle}>Jouw winkelwagen</h1>

          {!hasItems ? (
            <div className={styles.empty}>
              <p className={styles.emptyText}>Je winkelwagen is leeg.</p>
              <div className={styles.emptyLinks}>
                <Link href="/kenniskuur/" className={styles.emptyBtn}>Bekijk KennisKuur</Link>
                <Link href="/boek/" className={styles.emptyBtnSecondary}>Bekijk het boek</Link>
              </div>
            </div>
          ) : (
            <div className={styles.layout}>
              {/* Cart items */}
              <div className={styles.cart}>

                {/* Abonnement */}
                {subscription && (
                  <div className={styles.cartSection}>
                    <p className={styles.cartSectionLabel}>Abonnement</p>
                    <div className={styles.cartItem}>
                      <div className={styles.itemIcon}>KK</div>
                      <div className={styles.itemDetails}>
                        <p className={styles.itemTitle}>{subscription.name}</p>
                        <p className={styles.itemMeta}>Digitaal abonnement · maandelijks opzegbaar</p>
                        <button
                          className={styles.removeBtn}
                          onClick={() => removeItem(subscription.id)}
                        >
                          Verwijderen
                        </button>
                      </div>
                      <div className={styles.itemPrice}>
                        <span className={styles.priceMain}>€ {subscription.price.toFixed(2).replace('.', ',')}</span>
                        <span className={styles.pricePeriod}>{subscription.period}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Producten */}
                {products.length > 0 && (
                  <div className={styles.cartSection}>
                    <p className={styles.cartSectionLabel}>Producten</p>
                    {products.map(item => (
                      <div key={item.id} className={styles.cartItem}>
                        <Image
                          src="/images/kaft.png"
                          alt={item.name}
                          width={72}
                          height={100}
                          className={styles.itemImg}
                        />
                        <div className={styles.itemDetails}>
                          <p className={styles.itemTitle}>{item.name}</p>
                          <p className={styles.itemMeta}>Paperback · Nederlandstalig · gratis verzending</p>
                          <div className={styles.qtyRow}>
                            <button
                              className={styles.qtyBtn}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              aria-label="Minder"
                            >−</button>
                            <span className={styles.qtyNum}>{item.quantity}</span>
                            <button
                              className={styles.qtyBtn}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              aria-label="Meer"
                            >+</button>
                          </div>
                          <button
                            className={styles.removeBtn}
                            onClick={() => removeItem(item.id)}
                          >
                            Verwijderen
                          </button>
                        </div>
                        <div className={styles.itemPrice}>
                          <span className={styles.priceMain}>
                            € {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Totalen */}
                <div className={styles.cartTotals}>
                  {subscription && (
                    <div className={styles.totalRow}>
                      <span>Abonnement</span>
                      <span>€ {subscription.price.toFixed(2).replace('.', ',')} / maand</span>
                    </div>
                  )}
                  {products.length > 0 && (
                    <>
                      <div className={styles.totalRow}>
                        <span>Subtotaal producten</span>
                        <span>€ {productTotal.toFixed(2).replace('.', ',')}</span>
                      </div>
                      <div className={styles.totalRow}>
                        <span>Verzending</span>
                        <span className={styles.free}>Gratis</span>
                      </div>
                    </>
                  )}
                  {products.length > 0 && (
                    <div className={`${styles.totalRow} ${styles.totalFinal}`}>
                      <span>Vandaag te betalen</span>
                      <span>€ {(productTotal + (subscription?.price ?? 0)).toFixed(2).replace('.', ',')}</span>
                    </div>
                  )}
                  {subscription && !products.length && (
                    <div className={`${styles.totalRow} ${styles.totalFinal}`}>
                      <span>Eerste betaling</span>
                      <span>€ {subscription.price.toFixed(2).replace('.', ',')}</span>
                    </div>
                  )}
                  <p className={styles.vatNote}>Inclusief BTW</p>
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
                  {products.length > 0 && (
                    <>
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
                    </>
                  )}
                </div>

                <div className={styles.sepaNote}>
                  <span className={styles.sepaIcon}>🔒</span>
                  <p>Betaling via iDEAL of SEPA-incasso, verwerkt door Mollie. Je gegevens worden nooit gedeeld.</p>
                </div>

                <button className={styles.payBtn} disabled>
                  Doorgaan naar betaling
                  <span className={styles.payNote}>via Mollie — iDEAL, SEPA-incasso</span>
                </button>
                <p className={styles.comingSoon}>Betaalintegratie wordt binnenkort live gezet.</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
