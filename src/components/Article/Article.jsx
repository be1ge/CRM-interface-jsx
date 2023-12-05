import React from "react";
import Header from '../Header/Header';
import styles from './Article.module.css';

function Article() {
    return (
        <div className={styles['content']}>
            <Header />
            <div>
                Article
            </div>
        </div>
    );
}

export default Article;