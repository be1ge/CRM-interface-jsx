import React from "react";
import Header from '../Header/Header';
import styles from './Project.module.css';

function Project() {
    return (
        <div className={styles['content']}>
            <Header />
            <div>
                Project
            </div>
        </div>
    );
}

export default Project;