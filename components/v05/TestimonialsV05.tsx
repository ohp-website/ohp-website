'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './TestimonialsV05.module.css'

const screenshots = [
  '/images/testimonials/t1.jpg',
  '/images/testimonials/t2.jpg',
  '/images/testimonials/t3.jpg',
  '/images/testimonials/t4.jpg',
  '/images/testimonials/t5.jpg',
  '/images/testimonials/t6.jpg',
]

const repeated = [...screenshots, ...screenshots, ...screenshots]

export default function TestimonialsV05() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Wat leden zeggen</p>
        <h2 className={styles.title}>98% van onze leden verlengt maand na maand.</h2>
      </div>

      <div className={styles.track} onMouseEnter={(e) => {
        const el = e.currentTarget.querySelector(`.${styles.inner}`) as HTMLElement
        if (el) el.style.animationPlayState = 'paused'
      }} onMouseLeave={(e) => {
        const el = e.currentTarget.querySelector(`.${styles.inner}`) as HTMLElement
        if (el) el.style.animationPlayState = 'running'
      }}>
        <div className={styles.inner}>
          {repeated.map((src, i) => (
            <div
              key={i}
              className={styles.card}
              onClick={() => setLightbox(src)}
            >
              <Image
                src={src}
                alt={`Testimonial ${(i % screenshots.length) + 1}`}
                fill
                className={styles.cardImg}
                sizes="360px"
              />
            </div>
          ))}
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
