'use client'

import { useEffect, useRef, useState } from 'react'
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

const voorstellenItems = [
  { label: 'V0.1 — Huidig ontwerp', href: '/' },
  { label: 'V0.2 — Nieuw ontwerp', href: '/voorstellen/v02' },
  { label: 'V0.3 — Editorial dark', href: '/voorstellen/v03' },
  { label: 'V0.4 — Licht redactioneel', href: '/voorstellen/v04' },
]

export default function Nav({ light = false }: { light?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${light ? styles.light : ''}`}>
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
            <span className={styles.link}>
              {link.label}
            </span>
          </li>
        ))}
      </ul>

      <div className={styles.voorstellenWrap} ref={dropdownRef}>
        <button
          className={styles.voorstellenBtn}
          onClick={() => setDropdownOpen((v) => !v)}
          aria-expanded={dropdownOpen}
        >
          Voorstellen
          <span className={`${styles.caret} ${dropdownOpen ? styles.caretOpen : ''}`}>▾</span>
        </button>
        {dropdownOpen && (
          <ul className={styles.dropdown}>
            {voorstellenItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.dropdownLink}
                  onClick={() => setDropdownOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.ctaGroup}>
        <span className={styles.ctaSecondary}>
          Bestel het boek
        </span>
        <span className={styles.cta}>
          Word Lid
        </span>
      </div>
    </nav>
  )
}
