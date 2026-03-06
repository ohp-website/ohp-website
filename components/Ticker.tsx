import styles from './Ticker.module.css'

const items = [
  '400+ leden',
  '98% retentie',
  '41 publicaties',
  '5.000+ orders',
  'Evidence-based',
  'Onafhankelijk',
  'Geen reclame',
  'Peer-reviewed',
]

export default function Ticker() {
  const repeated = [...items, ...items, ...items]

  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
