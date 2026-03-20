'use client'

import { useState, useTransition } from 'react'
import Image from 'next/image'
import { uploadTestimonial, deleteTestimonial, toggleFeatured } from './actions'
import styles from './TestimonialsAdmin.module.css'

type Testimonial = {
  id: string
  image_url: string
  is_featured: boolean
  sort_order: number
  created_at: string
}

export default function TestimonialsAdmin({
  initialTestimonials,
}: {
  initialTestimonials: Testimonial[]
}) {
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [isFeatured, setIsFeatured] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setPreview(URL.createObjectURL(file))
  }

  async function handleUpload(formData: FormData) {
    setError(null)
    startTransition(async () => {
      const result = await uploadTestimonial(formData)
      if (result.error) {
        setError(result.error)
        return
      }
      if (result.testimonial) {
        setTestimonials((prev) =>
          result.testimonial!.is_featured
            ? [result.testimonial!, ...prev]
            : [...prev, result.testimonial!]
        )
      }
      setPreview(null)
      setIsFeatured(false)
      const form = document.getElementById('upload-form') as HTMLFormElement
      form?.reset()
    })
  }

  async function handleDelete(id: string) {
    if (!confirm('Weet je het zeker?')) return
    startTransition(async () => {
      await deleteTestimonial(id)
      setTestimonials((prev) => prev.filter((t) => t.id !== id))
    })
  }

  async function handleToggleFeatured(id: string, current: boolean) {
    startTransition(async () => {
      await toggleFeatured(id, !current)
      setTestimonials((prev) =>
        prev.map((t) => (t.id === id ? { ...t, is_featured: !current } : t))
          .sort((a, b) => Number(b.is_featured) - Number(a.is_featured))
      )
    })
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Testimonials beheren</h1>

      {/* Upload formulier */}
      <form
        id="upload-form"
        action={handleUpload}
        className={styles.uploadForm}
      >
        <h2 className={styles.sectionTitle}>Nieuwe testimonial uploaden</h2>

        <div className={styles.field}>
          <label className={styles.label}>Afbeelding (screenshot)</label>
          <input
            type="file"
            name="file"
            accept="image/*"
            required
            onChange={handleFileChange}
            className={styles.fileInput}
          />
        </div>

        {preview && (
          <div className={styles.previewWrap}>
            <Image src={preview} alt="Preview" width={200} height={300} className={styles.preview} />
          </div>
        )}

        <div className={styles.field}>
          <label className={styles.toggleLabel}>
            <input
              type="checkbox"
              name="is_featured"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.toggleText}>
              <strong>Featured</strong> — altijd bovenaan weergeven
            </span>
          </label>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" disabled={isPending} className={styles.btn}>
          {isPending ? 'Uploaden...' : 'Uploaden'}
        </button>
      </form>

      {/* Overzicht */}
      <div className={styles.overview}>
        <h2 className={styles.sectionTitle}>
          Alle testimonials ({testimonials.length})
        </h2>

        {testimonials.length === 0 && (
          <p className={styles.empty}>Nog geen testimonials geüpload.</p>
        )}

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={`${styles.card} ${t.is_featured ? styles.cardFeatured : ''}`}>
              <Image
                src={t.image_url}
                alt="Testimonial"
                width={200}
                height={300}
                className={styles.cardImg}
              />
              <div className={styles.cardActions}>
                <span className={t.is_featured ? styles.badgeFeatured : styles.badgeRegular}>
                  {t.is_featured ? '★ Featured' : 'Regular'}
                </span>
                <button
                  onClick={() => handleToggleFeatured(t.id, t.is_featured)}
                  disabled={isPending}
                  className={styles.btnSecondary}
                >
                  {t.is_featured ? 'Zet op Regular' : 'Zet op Featured'}
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  disabled={isPending}
                  className={styles.btnDelete}
                >
                  Verwijderen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
