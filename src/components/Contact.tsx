import { useTranslation } from 'react-i18next';
import styles from '../styles/Contact.module.css';
import crest from '../assets/de oppresso liber.png';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactHeader}>
        <div>
          <h1 className={styles.contactTitle}>{t('contact.title')}</h1>
          <p className={styles.contactSubtitle}>{t('contact.subtitle')}</p>
        </div>
        <img src={crest} alt="De Oppresso Liber" className={styles.contactCrest} />
      </div>
      <ul className={styles.contactList}>
        <li>
          <span className={styles.contactLabel}>Instagram: </span>
          <a
            href="https://www.instagram.com/tenthsfgcz"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            @tenthsfgcz
          </a>
        </li>
                <li>
          <span className={styles.contactLabel}>Facebook: </span>
          <a
            href="https://www.facebook.com/profile.php?id=61565007811368"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            {t('contact.facebookLink')}
          </a>
        </li>
        <li>
          <span className={styles.contactLabel}>Facebook Messenger: </span>
          <a
            href="https://m.me/61565007811368"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            {t('contact.messengerLink')}
          </a>
        </li>
        <li>
          <span className={styles.contactLabel}>Email: </span>
          <a
            href="mailto:tenthsfgcz@gmail.com"
            className={styles.contactLink}
          >
            tenthsfgcz@gmail.com
          </a>
        </li>
      </ul>
    </section>
  );
}
