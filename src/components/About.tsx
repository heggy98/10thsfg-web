import { useTranslation } from 'react-i18next';
import styles from '../styles/About.module.css';

export function About() {
  const { t } = useTranslation();

  const offers = t('about.offers', { returnObjects: true }) as string[];
  const activities = t('about.activities', { returnObjects: true }) as string[];
  const expectations = t('about.expectations', { returnObjects: true }) as string[];
  const equipment = t('about.equipment', { returnObjects: true }) as string[];

  return (
    <section id="about" className={styles.about}>

      {/* Team Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>1–2</span>
          <span className={styles.statLabel}>{t('about.statMissions')}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>~15</span>
          <span className={styles.statLabel}>{t('about.statMembers')}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>18–35</span>
          <span className={styles.statLabel}>{t('about.statAge')}</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>CZ</span>
          <span className={styles.statLabel}>{t('about.statTravel')}</span>
        </div>
      </div>
      {/* Main sections grid */}
      <div className={styles.sectionsGrid}>

        {/* What We Offer */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('about.whatWeOffer')}</h2>
          <ul className={styles.list}>
            {offers.map((offer: string, idx: number) => (
              <li key={idx}>
                {offer}
                {idx === 6 && (
                  <ul className={styles.subList}>
                    {activities.map((activity: string, actIdx: number) => (
                      <li key={actIdx}>{activity}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* What We Expect */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('about.whatWeExpect')}</h2>
          <ul className={styles.list}>
            {expectations.map((expectation: string, idx: number) => (
              <li key={idx}>
                {expectation}
                {idx === 7 && (
                  <ul className={styles.subList}>
                    {equipment.map((item: string, eqIdx: number) => (
                      <li key={eqIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* How to Join */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('about.howToJoin')}</h2>
          <p className={styles.description}>{t('about.joinDescription')}</p>

          <h3 className={styles.subSectionTitle}>{t('about.joinProcessTitle')}</h3>
          <ol className={styles.stepList}>
            {(t('about.joinSteps', { returnObjects: true }) as string[]).map((step: string, i: number) => (
              <li key={i}>
                <span className={styles.stepNumber}>0{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <a href="mailto:tenthsfgcz@gmail.com" className={styles.joinButton}>
            {t('about.joinButton')}
          </a>
        </div>

        {/* Discord */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('about.discordTitle')}</h2>
          <p className={styles.description}>{t('about.discordDescription')}</p>
          <ul className={styles.list}>
            {(t('about.discordFeatures', { returnObjects: true }) as string[]).map((f: string, i: number) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

      </div>{/* end sectionsGrid */}

      {/* Follow Us */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('about.followUs')}</h2>
        <p className={styles.description}>
          <strong>{t('about.facebook')}:</strong>{' '}
          <a 
            href="https://www.facebook.com/profile.php?id=61565007811368" 
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('about.facebookLink')}
          </a>
          <br />
          <strong>{t('about.instagram')}:</strong>{' '}
          <a 
            href="https://www.instagram.com/tenthsfgcz" 
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            @tenthsfgcz
          </a>
        </p>
      </div>
    </section>
  );
}
