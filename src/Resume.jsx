import Navbar from './Components/Navbar';
import Header from './Components/Header';
import styles from './styles/Dashboard.module.css';
import resume from './assets/OmGogteResume.jpg';
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
                        This component is yet to be created. Take a look at my resume and we could work on this together🤝.
                        <div className={styles.pdfViewer}>
                        <img src ={resume} alt='Resume' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Resume;