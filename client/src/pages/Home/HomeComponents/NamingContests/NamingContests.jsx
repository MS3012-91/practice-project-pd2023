import React from 'react';
import styles from '../NamingContests/NamingContests.module.sass'
import constants from '../../../../constants';


export default function NamingContests() {
  return (
    <div className={styles.container}>
          <img src={`${constants.STATIC_IMAGES_PATH}h-icon.svg`} alt="img" width="70px" />
    
      <div className={styles.box}>
        <div className='text_block'>
        <h3>Naming Contests</h3>
        <p>
          {' '}
          Custom name suggestions from 100s of naming experts as you are guided
          through our naming agency-style process{' '}
        </p>
        </div>
      <div className={styles.button}> 
      <a href='#'>Get a Custom Name</a>
      </div>
      </div>
    </div>
  );
}
