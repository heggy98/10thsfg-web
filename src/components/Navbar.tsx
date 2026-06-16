import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Navbar.module.css';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <a href="#home" className={styles.navLink} onClick={closeMenu}>
          {t('nav.home')}
        </a>
        <a href="#about" className={styles.navLink} onClick={closeMenu}>
          {t('nav.about')}
        </a>
        <a href="#gallery" className={styles.navLink} onClick={closeMenu}>
          {t('nav.gallery')}
        </a>
        <a href="#contact" className={styles.navLink} onClick={closeMenu}>
          {t('nav.contact')}
        </a>
      </div>

      <button
        type="button"
        className={styles.menuToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={styles.languageSwitcher}>
        <button
          className={`${styles.langButton} ${currentLanguage === 'cs' ? styles.active : ''}`}
          onClick={() => changeLanguage('cs')}
        >
          CS
        </button>
        <button
          className={`${styles.langButton} ${currentLanguage === 'en' ? styles.active : ''}`}
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
      </div>
    </nav>
  );
}
