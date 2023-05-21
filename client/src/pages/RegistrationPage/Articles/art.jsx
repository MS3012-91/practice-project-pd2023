import articles from './articles';
import styles from '../../RegistrationPage/Articles/artsList.module.sass';
import CONSTANTS from '../../../constants';

import React from 'react';
console.log(articles['first_column']);
const a = JSON.stringify(articles);
export default function Footer() {
  console.log(articles);
  return (
    <div className={styles.footer}>
      <div className={styles.articlesMainContainer}>
        <div className={styles.ColumnContainer}>
          {articles['first_column'].map((article) => (
            <div key={article.title} className={styles.headerArticle}>
              <h3> {article.title} </h3>
              <div className={styles.article}>
                <p> {article.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ColumnContainer}>
          {articles['second_column'].map((article) => (
            <div key={article.title} className={styles.headerArticle}>
              <h3> {article.title} </h3>
              <div className={styles.article}>
                <p> {article.text}</p>
              </div>
            </div>
          ))}
          <div className={styles.headerArticle}>
            <h3>
                I have other questions! How can I get in touch with Squadhelp?
            </h3>
            <div className={styles.article}>
              <p>
                {' '}
                Check out our Check out our{' '}
                <span className={styles.orangeSpan}>FAQs</span> or send us a {' '}
                <a href='mailto:https://google.com'className={styles.orangeSpan}> 
                message. </a> For
                assistance with launching a contest, you can also call us at
                <a href= {`tel:${CONSTANTS.CONTACT_TEL}`}> {CONSTANTS.CONTACT_TEL} </a> or schedule a{' '}
                <a href='https://google.com' target='_blank' className={styles.orangeSpan}>
                  Branding Consultation{' '}
                </a>
                FAQs or send us amessage. For assistance with launching a
                contest, you can also call us at <a href= {`tel:${CONSTANTS.CONTACT_TEL}`}> {CONSTANTS.CONTACT_TEL} </a> or schedule
                a Branding Consultation.
              </p>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
