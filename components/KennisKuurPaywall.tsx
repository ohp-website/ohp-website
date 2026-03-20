import Link from 'next/link'
import styles from './KennisKuurPaywall.module.css'

interface Props {
  editie: string
}

export default function KennisKuurPaywall({ editie }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.fade} aria-hidden="true" />
      <div className={styles.block}>
        <p className={styles.eyebrow}>KennisKuur — Exclusief voor leden</p>
        <h2 className={styles.title}>
          Lees dit artikel volledig
        </h2>
        <p className={styles.sub}>
          Dit artikel is gebaseerd op <strong>{editie}</strong> en is exclusief
          beschikbaar voor KennisKuur-leden. Word lid en krijg direct toegang.
        </p>
        <ul className={styles.benefits}>
          <li>Maandelijkse verdieping op basis van actuele wetenschap</li>
          <li>Volledige bronvermelding en protocollen per editie</li>
          <li>40+ edities beschikbaar — direct toegankelijk</li>
          <li>98% retentie — leden blijven omdat het werkt</li>
        </ul>
        <div className={styles.actions}>
          <Link href="/kenniskuur/" className={styles.btnPrimary}>
            Word KennisKuur lid
          </Link>
          <Link href="/login/" className={styles.btnSecondary}>
            Al abonnee? Log hier in
          </Link>
        </div>
      </div>
    </div>
  )
}
