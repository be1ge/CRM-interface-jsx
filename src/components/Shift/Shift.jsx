import React from "react";
import Header from '../Header/Header';
import styles from './Shift.module.css';

function Shift() {
    return (
        <div className={styles['content']}>
            <Header />
            <div>
                Shift
            </div>
        </div>
    );
}

export default Shift;