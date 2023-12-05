import React from "react";
import Header from '../Header/Header';
import styles from './Workers.module.css';

function Workers() {
    return (
        <div className={styles['content']}>
            <Header />
            <div>
                Workers
            </div>
        </div>
    );
}

export default Workers;