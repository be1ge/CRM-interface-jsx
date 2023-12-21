import React from 'react';
import Header from '../Header/Header';
import styles from './Client.module.css';
import Data from './Client-data.jsx';

function Client() {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.content_container}>
        <div className={styles.topbar}>
          
        </div>
        <div className={styles.main}>
          <Data></Data>
        </div>
      </div>
    </div>
  );
}

export default Client;
