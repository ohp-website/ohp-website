'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.css'
import { useCart } from '@/lib/cart'

const navLinks = [
  { label: 'Over Philip', href: '/over' },
  { label: 'KennisKuur', href: '/kenniskuur' },
  { label: 'Publicaties', href: '/publicaties' },
  { label: 'Boek', href: '/boek' },
  { label: 'Community', href: '/community' },
]

export default function Nav({ light = false, solid = false }: { light?: boolean; solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${(scrolled || solid) ? styles.scrolled : ''} ${light ? styles.light : ''}`}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Optimal Health Performance"
          height={96}
          width={240}
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

      <div className={styles.ctaGroup}>
        <Link href="/winkelwagen/" className={styles.cartIcon} aria-label="Winkelwagen">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </Link>
        <Link href="/boek/" className={styles.ctaSecondary}>
          Bestel het boek
        </Link>
        <Link href="/kenniskuur" className={styles.cta}>
          Word Lid
        </Link>
      </div>
    </nav>
  )
}
