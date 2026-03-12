'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './TestimonialsV02.module.css'

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

export default function TestimonialsV02() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [paused, setPaused] = useState(false)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Wat leden zeggen</p>
        <h2 className={styles.title}>98% van onze leden verlengt maand na maand.</h2>
        <p className={styles.sub}>Klik op een screenshot om te vergroten.</p>
      </div>

      <div
        className={styles.rows}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Rij 1 — scrollt naar links */}
        <div className={styles.track}>
          <div className={`${styles.inner} ${styles.innerLeft} ${paused ? styles.paused : ''}`}>
            {row1.map((src, i) => (
              <div key={i} className={styles.card} onClick={() => setLightbox(src)}>
                <Image
                  src={src}
                  alt={`Testimonial ${(i % screenshots.length) + 1}`}
                  fill
                  className={styles.cardImg}
                  sizes="220px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Rij 2 — scrollt naar rechts */}
        <div className={styles.track}>
          <div className={`${styles.inner} ${styles.innerRight} ${paused ? styles.paused : ''}`}>
            {row2.map((src, i) => (
              <div key={i} className={styles.card} onClick={() => setLightbox(src)}>
                <Image
                  src={src}
                  alt={`Testimonial ${(i % screenshots.length) + 1}`}
                  fill
                  className={styles.cardImg}
                  sizes="220px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
            <Image
              src={lightbox}
              alt="Testimonial"
              width={480}
              height={680}
              className={styles.lightboxImg}
            />
          </div>
        </div>
      )}
    </section>
  )
}
