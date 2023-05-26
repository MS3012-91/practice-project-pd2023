import React from 'react';
import styles from '../Got Questions/GotQuestions.module.sass';
import constants from '../../../../constants';

export default function GotQuestions() {
  return (
    <div className={styles.gotQuestions}>
      <div className={styles.textModule}>
        <h3>Got Questions? </h3>
        <p>
          Speak with a Squadhelp platform expert to learn more and get your
          questions answered.
        </p>
        <button className={styles.shedule}> Shedule Consultation</button>
      </div>
      <div className={styles.contact_block}>
        <ul>
          <li>
            <img src = {`${constants.STATIC_IMAGES_PATH}icon-phone-white.svg`} alt ='phone' /> 
            <a className={styles.links} href={`tel:${constants.CONTACT_TEL}}`}> 
            {constants.CONTACT_TEL}</a>
          </li>
          <li>
            <img src = {`${constants.STATIC_IMAGES_PATH}icon-chat-white.svg`} alt ='chat' /> 
            <a className={styles.links} href="google.com"> Live Chat</a>
          </li>
          <li>
            <img src = {`${constants.STATIC_IMAGES_PATH}icon-mail-white.svg`} alt ='mail' /> 
            <a className={styles.links} href="mailto:google.com"> Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
