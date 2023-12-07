import React from "react";
import Header from '../Header/Header';
import styles from './Client.module.css';

function Client() {
    return (
        <div className={styles['content']}>
            <Header />
            <div className={styles['topbar']}>
                
            </div>
        </div>
    );
}

export default Client;