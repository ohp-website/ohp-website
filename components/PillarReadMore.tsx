'use client'

import { useState } from 'react'
import styles from './PillarReadMore.module.css'

export default function PillarReadMore({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={styles.wrap}>
      <div className={`${styles.content} ${expanded ? styles.expanded : ''}`}>
        {children}
        {!expanded && <div className={styles.fade} aria-hidden="true" />}
      </div>
      {!expanded && (
        <div className={styles.ctaRow}>
          <button className={styles.btn} onClick={() => setExpanded(true)}>
            Lees meer
          </button>
        </div>
      )}
    </div>
  )
}
