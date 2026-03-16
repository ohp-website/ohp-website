import styles from './TestimonialsQuoteV07.module.css'

const stats = [
  { number: '400+', label: 'Actieve leden' },
  { number: '41+',  label: 'Edities gepubliceerd' },
  { number: '4,9',  label: 'Gemiddelde beoordeling' },
]

export default function TestimonialsQuoteV07() {
  return (
    <section className={styles.section}>
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

      <div className={styles.statsBar}>
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.statNumber}>{s.number}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
