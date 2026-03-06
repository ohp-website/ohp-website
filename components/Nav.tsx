'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.css'

const navLinks = [
  { label: 'Over Philip', href: '/over' },
  { label: 'KennisKuur', href: '/kenniskuur' },
  { label: 'Publicaties', href: '/publicaties' },
  { label: 'Boek', href: '/boek' },
  { label: 'Community', href: '/community' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Optimal Health Performance"
          height={80}
          width={200}
          className={styles.logo}
          priority
        />
      </Link>

      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/kenniskuur" className={styles.cta}>
        Word Lid
      </Link>
    </nav>
  )
}
