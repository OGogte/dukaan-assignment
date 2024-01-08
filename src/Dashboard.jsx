import React from 'react'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import styles from './styles/Dashboard.module.css'
import Table from './Components/Table';
export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
        <Table />
      </div>
    </div>
  )
}
