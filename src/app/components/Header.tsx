"use client";
// Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Link href="/">
          <img src="/logo.webp" alt="Logo" />
        </Link>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <Link legacyBehavior href="/">
          <a>Strona Główna</a>
        </Link>
        <Link legacyBehavior href="/about">
          <a>O nas</a>
        </Link>
        <Link legacyBehavior href="/students-parents">
          <a>Uczniowie i Rodzice</a>
        </Link>
        <Link legacyBehavior href="/recruitment">
          <a>Rekrutacja</a>
        </Link>
        <Link legacyBehavior href="/projects">
          <a>Projekty</a>
        </Link>
        <Link legacyBehavior href="/safety">
          <a>Bezpieczeństwo</a>
        </Link>
        <Link legacyBehavior href="/e-school">
          <a>E-Szkoła</a>
        </Link>
      </nav>
      <button className={styles.toggle} onClick={toggleMenu}>☰</button>
    </header>
  );
};

export default Header;
