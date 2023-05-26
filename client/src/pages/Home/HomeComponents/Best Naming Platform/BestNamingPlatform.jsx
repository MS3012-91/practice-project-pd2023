import React from 'react';
import styles from '../Best Naming Platform/BestNamingPlatform.module.sass';
import constants from '../../../../constants';

export default function BestNamingPlatform() {
  return (
    <>
      <h2 className={styles.header}> World's #1 Naming Platform </h2>
      <div className={styles.container}>
        <div className={styles.contentBlock}>
          <img
            src={`${constants.STATIC_IMAGES_PATH}NamingIcons/star.svg`}
            alt="Rates"
          />
          <h3> Rated <br/> 4.9 / 5 stars</h3>
          <p>From 35K+ Customers</p>
        </div>
        <div className={styles.contentBlock}>
          <img
            src={`${constants.STATIC_IMAGES_PATH}NamingIcons/reward.svg`}
            alt="Rates"
          />
          <h3> 3 Times <br/> Inc 5000 </h3>
          <p>Fastest Growing Companies For 3 Consecutive Years</p>
        </div>
        <div className={styles.contentBlock}>
          <img
            src={`${constants.STATIC_IMAGES_PATH}NamingIcons/idea.svg`}
            alt="Rates"
          />
          <h3> Most <br/> Innovative</h3>
          <p> Recognized by Inc Magazine</p>
        </div>
        <div className={styles.contentBlock}>
          <img
            src={`${constants.STATIC_IMAGES_PATH}NamingIcons/community.svg`}
            alt="Rates"
          />
          <h3> Powerful Branding <br/> Community </h3>
          <p>Standing 200,000+ Strong</p>
        </div>
      </div>
    </>
  );
}
