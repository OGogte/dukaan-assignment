import React from 'react'
import styles from '../styles/Header.module.css';
import question from '../assets/question.svg';
import search from '../assets/search.svg';

import messages from '../assets/messages.svg';
import headerDown from '../assets/headerDown.svg';
export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.leftTextBox}>
                <div className={styles.title}> Payments</div>
                <div className={styles.info}>
                    <img className={styles.infoIcon} src={question} alt='question' />
                    <div className={styles.infoText}>How it works
                    </div>
                </div>
            </div>
            <div className={styles.searchBarBox}>
                <img className={styles.searchBarIcon} src={search} alt='Search' />
                <div className={styles.searchBarText} >Search features, tutorials, etc.</div>
            </div>
            <div className={styles.iconBox}>
                <img src={messages} alt='messages' className={styles.icon} />
                <img src={headerDown} alt='down arrow' className={styles.icon} />
            </div>
        </div>
    )
}
