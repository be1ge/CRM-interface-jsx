import React from "react";
import Header from '../Header/Header';
import styles from './Bet.module.css';

function Bet() {
    return (
        <div className={styles['content']}>
            <Header />
            <div>
                Bet
            </div>
        </div>
    );
}

export default Bet;