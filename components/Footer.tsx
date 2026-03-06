import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image
            src="/logo.png"
            alt="Optimal Health Performance"
            width={160}
            height={64}
            className={styles.logo}
          />
          <p className={styles.tagline}>
            &ldquo;Everyday a little bit better than yesterday.&rdquo;
          </p>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:info@optimalhealthperformance.nl" className={styles.socialLink} aria-label="E-mail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        <nav className={styles.nav}>
          <div className={styles.navCol}>
            <p className={styles.navHeading}>Platform</p>
            <Link href="/over" className={styles.navLink}>Over Philip</Link>
            <Link href="/kenniskuur" className={styles.navLink}>De KennisKuur</Link>
            <Link href="/publicaties" className={styles.navLink}>Publicaties</Link>
            <Link href="/community" className={styles.navLink}>Community</Link>
          </div>
          <div className={styles.navCol}>
            <p className={styles.navHeading}>Meer</p>
            <Link href="/boek" className={styles.navLink}>Boek</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
            <Link href="/privacy" className={styles.navLink}>Privacybeleid</Link>
            <Link href="/voorwaarden" className={styles.navLink}>Algemene voorwaarden</Link>
          </div>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Optimal Health Performance. Alle rechten voorbehouden.
        </p>
        <p className={styles.made}>
          Website door <a href="https://greencreatives.nl" target="_blank" rel="noopener noreferrer" className={styles.madeLink}>Green Creatives</a>
        </p>
      </div>
    </footer>
  )
}
