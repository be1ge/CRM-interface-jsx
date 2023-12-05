import React from 'react';
import Header from '../Header/Header';
import styles from './Instruction.module.css';

function Instruction() {
    return (
        <div className={styles['content']}>
            <Header />
            <div>Instruction</div>
        </div>
    );
}

export default Instruction;
