import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';

const Header = (props) => {
    return (
        <header className={styles.header}>
            {/* change a logo?? */}
            <h2>ReactFitness</h2>
            <Navigation />
        </header>
    );
}

export default Header;