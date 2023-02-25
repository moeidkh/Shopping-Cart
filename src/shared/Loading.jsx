import React from 'react';
import styles from '../Styles/Loading.module.css'
const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.load1}></div>
            <div className={styles.load2}></div>
            <div className={styles.load3}></div>
        </div>
    );
};

export default Loading;