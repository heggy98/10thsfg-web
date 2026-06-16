import { useTranslation } from 'react-i18next';
import styles from '../styles/Hero.module.css';
import crest from '../assets/de oppresso liber.png';
import headerBg from '../assets/header_bg.png';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground} 
           style={{ backgroundImage: `url(${headerBg})` }} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
          <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>
        </div>
        <div className={styles.heroCrest}>
          <img src={crest} alt="De Oppresso Liber" className={styles.crestImage} />
        </div>
      </div>
    </section>
  );
}
