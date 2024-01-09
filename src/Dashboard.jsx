import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import MainBox from './Components/MainBox';
import styles from './styles/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.leftPanel}>
        <Navbar />
      </div>
      <div>
        <div className={styles.topBar}>
          <Header />
        </div>
        <div className={styles.mainContent}>
          <MainBox />
        </div>
      </div>
    </div>
  );
}