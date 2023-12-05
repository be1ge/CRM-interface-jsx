import React from "react";
import Header from '../Header/Header';
import styles from './Client.module.css';

function Client() {
    return (
        <div className={styles['content']}>
            <Header />
            <div>
                Client
            </div>
        </div>
    );
}

export default Client;