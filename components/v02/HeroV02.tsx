'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './HeroV02.module.css'

const slides = [
  { src: '/images/hero-v02-2.jpg', alt: 'Zonlicht door bladeren',           position: 'center 50%' },
  { src: '/images/hero-v02.jpg',   alt: 'Oceaan bij schemering',            position: 'center 60%' },
  { src: '/images/hero-v02-4.jpg', alt: 'Groene bladeren met dauwdruppels', position: 'center 50%' },
  { src: '/images/hero-v02-3.jpg', alt: 'Vrouw op het strand',              position: 'center 40%' },
  { src: '/images/hero-v02-5.jpg', alt: 'Kronkelende weg door bos',         position: 'center 50%' },
]

export default function HeroV02() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Alle slides altijd in DOM — geen herstart van animatie */}
      <div className={styles.bg}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${styles[`slide${i + 1}`]} ${i === current ? styles.slideVisible : ''}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={styles.bgImage}
              style={{ objectPosition: slide.position }}
              priority={i === 0}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className={styles.overlay} />
      <div className={styles.overlaySide} />
      <div className={styles.grain} />

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.label}>Optimal Health Performance</p>
        <h1 className={styles.title}>Terug naar de kern van gezondheid.</h1>
        <p className={styles.keywords}>
          <span>Zonlicht</span>
          <span className={styles.dot}>.</span>
          <span>Bioritme</span>
          <span className={styles.dot}>.</span>
          <span>Voeding</span>
          <span className={styles.dot}>.</span>
          <span>Wetenschap</span>
          <span className={styles.dot}>.</span>
        </p>
        <p className={styles.subtitle}>
          Evidence-based leefstijloptimalisatie. Geen hypes, geen trucjes.<br />
          <em>Gewoon de wetenschap, vertaald naar jouw leven.</em>
        </p>
        <div className={styles.ctas}>
          <span className={styles.btnPrimary}>Start je kenniskuur</span>
          <span className={styles.btnSecondary}>
            Ontdek meer <span className={styles.arrow}>↓</span>
          </span>
        </div>
      </div>

      {/* Slide indicators */}
      <div className={styles.indicators}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.indicator} ${i === current ? styles.indicatorActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

      <div className={styles.bottomLine} />
    </section>
  )
}
