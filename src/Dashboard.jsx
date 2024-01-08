import React from 'react'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import styles from './styles/Dashboard.module.css'
export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div>
        <Navbar />
      </div>

    </div>
  )
}
