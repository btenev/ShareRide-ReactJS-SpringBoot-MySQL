import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles["footer"]} >
            <ul className={styles["footer__list"]} role="list">
                <li className={styles["nav__item"]}><a href="#">Home</a></li>
                <li className={styles["nav__item"]}><a href="#">Features</a></li>
                <li className={styles["nav__item"]} ><a href="#">Pricing</a></li>
                <li className={styles["nav__item"]} ><a href="#">FAQs</a></li>
                <li className={styles["nav__item"]} ><a href="#">About</a></li>
            </ul>
            <p>© 2022 Company, Inc</p>
        </footer>
    );
}