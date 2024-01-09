import React from 'react'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import styles from './styles/Dashboard.module.css'
import MainBox from './Components/MainBox';
export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
        <MainBox />
      </div>
    </div>
  )
}
