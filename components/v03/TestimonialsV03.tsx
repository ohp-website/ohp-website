'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './TestimonialsV03.module.css'

const screenshots = [
  '/images/testimonials/t1.jpg',
  '/images/testimonials/t2.jpg',
  '/images/testimonials/t3.jpg',
  '/images/testimonials/t4.jpg',
  '/images/testimonials/t5.jpg',
  '/images/testimonials/t6.jpg',
]

const row1 = [...screenshots, ...screenshots, ...screenshots]
const row2 = [...[...screenshots].reverse(), ...[...screenshots].reverse(), ...[...screenshots].reverse()]

const stats = [
  { number: '400+', label: 'Actieve leden' },
  { number: '98%',  label: 'Verlengt elke maand' },
  { number: '41+',  label: 'Edities gepubliceerd' },
  { number: '4,9',  label: 'Gemiddelde beoordeling' },
]

export default function TestimonialsV03() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [paused, setPaused] = useState(false)

  return (
    <section className={styles.section}>

      {/* ── Hero quote ── */}
      <div className={styles.quoteWrap}>
        <p className={styles.eyebrow}>Wat leden zeggen</p>
        <blockquote className={styles.quote}>
          <span className={styles.quoteMark}>"</span>
          Ik had altijd aangenomen dat vermoeidheid na de veertig normaal was.
          De KennisKuur liet me inzien dat dit niet klopt — en wat ik eraan kon doen.
          <span className={styles.quoteMarkClose}>"</span>
        </blockquote>
        <cite className={styles.author}>— Thomas K., lid sinds editie 12</cite>
      </div>

      {/* ── Stats ── */}
      <div className={styles.statsBar}>
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.statNumber}>{s.number}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Dubbele carousel ── */}
      <div
        className={styles.rows}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={styles.track}>
          <div className={`${styles.inner} ${styles.innerLeft} ${paused ? styles.paused : ''}`}>
            {row1.map((src, i) => (
              <div key={i} className={styles.card} onClick={() => setLightbox(src)}>
                <Image src={src} alt={`Testimonial ${(i % screenshots.length) + 1}`} fill className={styles.cardImg} sizes="200px" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.track}>
          <div className={`${styles.inner} ${styles.innerRight} ${paused ? styles.paused : ''}`}>
            {row2.map((src, i) => (
              <div key={i} className={styles.card} onClick={() => setLightbox(src)}>
                <Image src={src} alt={`Testimonial ${(i % screenshots.length) + 1}`} fill className={styles.cardImg} sizes="200px" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
            <Image src={lightbox} alt="Testimonial" width={480} height={680} className={styles.lightboxImg} />
          </div>
        </div>
      )}
    </section>
  )
}
