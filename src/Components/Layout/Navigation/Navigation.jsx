import { Fragment } from "react";
import styles from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <Fragment>
         <ul className={styles['navigation-menu']}>
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
        </Fragment>
    )
}


export default Navigation;