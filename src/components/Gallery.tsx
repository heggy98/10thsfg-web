import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Gallery.module.css';

export function Gallery() {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://w.behold.so/widget.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="gallery" className={styles.gallery}>
      <h1 className={styles.galleryTitle}>{t('gallery.title')}</h1>

      <div className={styles.instagramContainer}>
        <p className={styles.instagramDescription}>
          {t('gallery.description')}
        </p>

        {/* Behold Instagram Feed Widget */}
        <div className={styles.beholdWrapper}>
          <behold-widget feed-id="8V8WOSFtC1g5ca657iMz" />
        </div>

        <div className={styles.instagramLink}>
          <a
            href="https://www.instagram.com/tenthsfgcz"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitButton}
          >
            {t('gallery.visitButton')}
          </a>
        </div>
      </div>
    </section>
  );
}
