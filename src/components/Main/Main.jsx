import React from "react";
import Header from '../Header/Header';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles['content']}>
            <Header />
            <div className={styles['topbar']}>
                
            </div>
        </div>
    );
}

export default Main;