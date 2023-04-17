import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

export const Header = () => {
    const { isAuthenticated, firstName, lastName } = useContext(AuthContext);
    return (
        <header className={styles["header"]}>
            <Link className={styles["logo"]} to={"/"}>
                <img className={styles["logo__image"]} src={require('../../images/car-sharing-nav.png')} alt="car-sharing-nav" />
                <h2 className={styles["logo__title"]}>ShareRide</h2>
            </Link>

            <nav className={styles["nav"]}>
                <ul className={styles["nav__list"]} role="list">
                    {isAuthenticated && (
                        <li className={styles["nav__item"]}>
                            <a href="#">MyRides</a>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li className={styles["nav__item"]}>
                            <a href="#">Ride requests</a>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li className={styles["nav__item"]}>
                            <Link to={"/publish"}>Publish a ride</Link>
                        </li>
                    )}

                    <li className={styles["nav__item"]}>
                        <Link to={"/search"}>Search for a ride</Link>
                    </li>



                    {/* <li className={styles["nav__item"]}>
                        <a href="#">Admin</a>
                    </li> */}
                </ul>
            </nav>

            <button className={styles["header__btn"]}>
                <FontAwesomeIcon icon="fa-solid fa-circle-user" size="2x" style={{ color: "#ffffff", }} />
                <div className={styles["header__dropdown"]}>
                    {isAuthenticated ? <p>{`Welcome, ${firstName} ${lastName}!`}</p> : <p>Welcome, User!</p>}
                    <hr />
                    {isAuthenticated && (
                        <a href="#">Profile</a>
                    )}
                    {!isAuthenticated && (
                        <Link to={"/login"}>Sign in</Link>
                    )}
                    {!isAuthenticated && (
                        <Link to={"/register"}>Sign up</Link>
                    )}
                    {isAuthenticated && (
                        <a href="#">Logout</a>
                    )}
                </div>
            </button>
        </header>
    );
}