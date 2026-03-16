'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './TestimonialsV06.module.css'

const screenshots = [
  '/images/testimonials-leefstijl/Screenshot_20240326-105424_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240326-121455_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240405-101509_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240405-191834_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240406-051841_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240406-052021_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240406-052043_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240406-052325_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240406-124551_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240411-103252_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240411-103258_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240412-095544_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240509-060129_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240517-174847_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240615-052432_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240626-050021_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240627-045134_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240627-045932_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240728-062411_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240802-061707_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240811-065014_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240815-053034_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240816-054211_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240818-104239_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20240818-104247_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241002-111727_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241002-111738_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241003-052405_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241003-092850_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241018-151252_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241024-143221_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241030-112844_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241102-101702_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241105-053951_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20241120-063317_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20250307-053323_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20250311-053330_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20250317-055015_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20250822-152714_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20251002-062027_Instagram.jpg',
  '/images/testimonials-leefstijl/Screenshot_20260106_160421_Instagram.jpg',
]

export default function TestimonialsV06() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Wat leden zeggen</p>
        <h2 className={styles.title}>98% van onze leden verlengt maand na maand.</h2>
        <p className={styles.subtitle}>
          Echte berichten van echte leden — over energie, focus, slaap en alles wat daartussen zit.
        </p>
      </div>

      <div className={styles.masonry}>
        {screenshots.map((src, i) => (
          <div
            key={i}
            className={styles.item}
            onClick={() => setLightbox(src)}
          >
            <Image
              src={src}
              alt={`Testimonial ${i + 1}`}
              width={400}
              height={600}
              className={styles.img}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
            <Image
              src={lightbox}
              alt="Testimonial"
              width={480}
              height={720}
              className={styles.lightboxImg}
            />
          </div>
        </div>
      )}
    </section>
  )
}
