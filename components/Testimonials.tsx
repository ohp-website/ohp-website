'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Testimonials.module.css'

const screenshots = [
  '/images/testimonials/t1.jpg',
  '/images/testimonials/t2.jpg',
  '/images/testimonials/t3.jpg',
  '/images/testimonials/t4.jpg',
  '/images/testimonials/t5.jpg',
  '/images/testimonials/t6.jpg',
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % screenshots.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const indices = [
    (active + screenshots.length - 1) % screenshots.length,
    active,
    (active + 1) % screenshots.length,
  ]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Wat leden zeggen</p>
          <h2 className={styles.title}>98% van onze leden verlengt maand na maand.</h2>
        </div>

        <div className={styles.carousel}>
          {indices.map((idx, pos) => (
            <div
              key={`${idx}-${pos}`}
              className={`${styles.screenshot} ${pos === 1 ? styles.screenshotCenter : styles.screenshotSide}`}
              onClick={() => pos === 0
                ? setActive((active + screenshots.length - 1) % screenshots.length)
                : pos === 2
                  ? setActive((active + 1) % screenshots.length)
                  : undefined
              }
            >
              <Image
                src={screenshots[idx]}
                alt={`Testimonial ${idx + 1}`}
                fill
                className={styles.screenshotImg}
                sizes="(max-width: 768px) 80vw, 30vw"
              />
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {screenshots.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
