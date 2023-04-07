import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <main className={styles["main"]}>
            <section className={styles["service"]}>
                <div className={styles["service__description"]}>
                    <h2 className={styles["description__title"]}>What is carpooling?</h2>
                    <p>Carpooling is the concept of sharing your car to accommodate more than one person at
                        a time,
                        eliminating the need for
                        riders to drive themselves in separate vehicles.</p>
                    <h4 className={styles["description__title"]}>Benefits of carpooling</h4>
                    <ul>
                        <li><span className={styles["description__important"]}>Save money.</span> Share the costs of driving with other
                            riders.</li>
                        <li><span className={styles["description__important"]}>Reduce stress.</span> Read, listen to music, or relax when
                            you’re not
                            driving.
                        </li>
                        <li><span className={styles["description__important"]}>Save time.</span> As a carpool, you can drive in the HOV
                            (high
                            occupancy vehicle)
                            lane.</li>
                        <li><span className={styles["description__important"]}>Help the environment.</span> Carpooling creates cleaner air
                            and safer
                            communities.
                        </li>
                        <li><span className={styles["description__important"]}>Prolong the life of your vehicle.</span> Shared driving
                            puts fewer
                            miles on your
                            own car.</li>
                        <li><span className={styles["description__important"]}>It reduces traffic.</span> When three people carpool, there
                            are two
                            fewer cars on
                            the road.</li>
                    </ul>

                    <p className={styles["description__encouragement"]}>Start carpooling now with ShareRide, a leading company in the
                        carpooling
                        industry!
                    </p>

                    <div className={styles["description__buttons"]}>
                        <Link to={"/search"}>
                            <button className={styles["button-style"]}>Search for a ride</button>
                        </Link>
                        <Link to={"/publish"}>
                            <button className={styles["button-style"]}>Publish a ride</button>
                        </Link>

                    </div>
                </div>

                <div className={styles["service__image"]}>
                    <img src={require('../../images/index-main-01.jpg')} alt="service-image" />
                </div>
            </section>

            <section className={styles["statistic"]}>
                <img className={styles["statistic__image"]} src={require('../../images/index-main-02.jpg')} alt="statistic-image" />
            </section>
        </main>
    );
}