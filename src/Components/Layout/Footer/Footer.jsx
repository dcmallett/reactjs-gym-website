
import styles from './Footer.module.css';

const Footer = (props) => {

    const footerDate = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            {/*container div */}
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles["col-1"]}>
                        {/*change to link soon */}
                        <h2>ReactFitness</h2>
                        <ul>
                            {/*find Icons for this and swap to them */}
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["col-2"]}>
                        <ul>
                            <li>
                                <a href="#">Classes</a>
                            </li>
                            <li>
                                <a href="#">Plans</a>
                            </li>
                            <li>
                                <a href="#">Testamonials</a>
                            </li>
                            <li>
                                <a href="#">Signup/Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <p>Copyright {footerDate}</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;