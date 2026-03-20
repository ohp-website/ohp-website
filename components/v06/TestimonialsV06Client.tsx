'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './TestimonialsV06.module.css'

type Testimonial = {
  id: string
  image_url: string
  is_featured: boolean
}

export default function TestimonialsV06Client({ items }: { items: Testimonial[] }) {
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
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.item} ${item.is_featured ? styles.featured : ''}`}
            onClick={() => setLightbox(item.image_url)}
          >
            {item.is_featured && (
              <span className={styles.featuredBadge}>★</span>
            )}
            <Image
              src={item.image_url}
              alt="Testimonial"
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
