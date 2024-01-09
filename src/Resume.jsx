import Navbar from './Components/Navbar';
import Header from './Components/Header';
import MainBox from './Components/MainBox';
import styles from './styles/Dashboard.module.css';



const Resume = () => {
    return (
        <div>
            <div className={styles.dashboard}>
                <div className={styles.leftPanel}>
                    <Navbar />
                </div>
                <div>
                    <div className={styles.topBar}>
                        <Header />
                    </div>
                    <div className={styles.mainContent}>
                        This component is yet to be created. Take a look at my <a href='https://drive.google.com/file/d/1bwIvOq_g69eOs6A7CbwujPjrLMKIwIwR/view?usp=sharing' rel="noreferrer" target='_blank'>Resume</a> and we could work on this together.
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Resume;