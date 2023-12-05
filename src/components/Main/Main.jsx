import React from "react";
import Header from '../Header/Header';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles['content']}>
            <Header />
            <div>
                Main
            </div>
        </div>
    );
}

export default Main;