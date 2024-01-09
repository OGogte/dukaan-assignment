import React from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/Nishyan.png';
import down from '../assets/down.svg';
import home from '../assets/home.svg';
import orders from '../assets/orders.svg';
import products from '../assets/products.svg';
import delivery from '../assets/delivery.svg';
import marketing from '../assets/marketing.svg';
import analytics from '../assets/analytics.svg';
import payments from '../assets/payments.svg';
import tools from '../assets/tools.svg';
import discounts from '../assets/discounts.svg';
import audience from '../assets/audience.svg';
import appearance from '../assets/appearance.svg';
import plugins from '../assets/plugins.svg';
import wallet from '../assets/wallet.svg';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/resume');
    };
    const handleClicks = () => {
        navigate('/');
      };
    return (
        <div className={styles.navbar}>
            <div className={styles.navBox}>
                <div className={styles.companyBox}>
                    <img src={logo} alt='logo' className={styles.companyImg} />
                    <div className={styles.companyInfo}>
                        <p className={styles.companyTitle}>Nishyan</p>
                        <a href='/resume' className={styles.companyData}>Visit Store</a>
                    </div>
                    <img src={down} alt='down arrow' className={styles.down} />
                </div>
                <div className={styles.navButtons}>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={home} alt='home' className={styles.navIcon} />
                        <p className={styles.navName}>Home</p>
                    </div>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={orders} alt='orders' className={styles.navIcon} />
                        <p className={styles.navName}>Orders</p>
                    </div>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={products} alt='products' className={styles.navIcon} />
                        <p className={styles.navName}>Products</p>
                    </div>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={delivery} alt='delivery' className={styles.navIcon} />
                        <p className={styles.navName}>Delivery</p>
                    </div>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={marketing} alt='marketing' className={styles.navIcon} />
                        <p className={styles.navName}>Marketing</p>
                    </div>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={analytics} alt='analytics' className={styles.navIcon} />
                        <p className={styles.navName}>Analytics</p>
                    </div>
                    <div onClick={handleClicks} className={styles.navButtonPayments}>
                        <img src={payments} alt='payments' className={styles.navIcon} />
                        <p className={styles.navName}>Payments</p>
                    </div>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={tools} alt='tools' className={styles.navIcon} />
                        <p className={styles.navName}>Tools</p>
                    </div>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={discounts} alt='discounts' className={styles.navIcon} />
                        <p className={styles.navName}>Discounts</p>
                    </div>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={audience} alt='audience' className={styles.navIcon} />
                        <p className={styles.navName}>Audience</p>
                    </div>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={appearance} alt='appearance' className={styles.navIcon} />
                        <p className={styles.navName}>Appearance</p>
                    </div>
                    <div  onClick={handleClick} className={styles.navButton}>
                        <img src={plugins} alt='plugins' className={styles.navIcon} />
                        <p className={styles.navName}>Plugins</p>
                    </div>
                </div>
                <div className={styles.navWallet}>
                    <div className={styles.navWalletIconContainer}>
                        <img src={wallet} alt='wallet' className={styles.navWalletIcon} />
                    </div>
                    <div className={styles.navWalletBox}>
                        <p className={styles.navWalletTitle}>Available Credits</p>
                        <p className={styles.navWalletMoney}>222.10</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
