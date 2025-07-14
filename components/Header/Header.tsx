'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(`.${styles.burger}`)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoContainer} onClick={() => setMenuOpen(false)}>
        <Image
          src="/logoMK.png"
          alt="Logo MK Detailing"
          width={40}
          height={40}
          className={styles.logoImage}
        />
        <h1 className={styles.logo}>MK Detailing</h1>
      </Link>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>

      <nav
        id="primary-navigation"
        className={`${styles.nav} ${menuOpen ? styles.show : ''}`}
        ref={navRef}
      >
        <ul className={styles.navList}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}






