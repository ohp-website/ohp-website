import Link from 'next/link'
import styles from './ComingSoon.module.css'

type Props = {
  eyebrow: string
  title: string
  body: string
}

export default function ComingSoon({ eyebrow, title, body }: Props) {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{body}</p>
      <Link href="/" className={styles.back}>← Terug naar home</Link>
    </section>
  )
}
