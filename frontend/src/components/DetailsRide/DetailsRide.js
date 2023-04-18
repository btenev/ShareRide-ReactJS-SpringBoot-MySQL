import styles from './DetailsRide.module.css';

export const DetailsRide = () => {
    return (
        <main className={styles["main"]}>
            <section className={styles["ride-information"]}>
                <div className={styles["ride-information"]}>
                    <h1>Ride details</h1>
                    <h3>Trip information</h3>
                    <div className={styles["information__details__trip"]}>
                        <ul role="list">
                            <li>Driver name</li>
                            <li>Departure time</li>
                            <li>Departure place</li>
                            <li>Arrival place</li>
                        </ul>
                        <p>Price</p>
                    </div>

                    <h3>Car information</h3>
                    <div className={styles["information__details__trip second"]}>
                        <ul role="list">
                            <li>Car brand</li>
                            <li>Car model</li>
                            <li>Car color</li>
                            <li>Car plate</li>
                        </ul>

                        <ul role="list">
                            <li>Free seats</li>
                            <li>Allowed luggage</li>
                        </ul>
                    </div>

                    <h3>Driver information</h3>
                    <div className={styles["information__details__trip third"]}>
                        <ul role="list">
                            <li>Gender</li>
                            <li>Age</li>
                            <li>Communication preferences</li>
                            <li>Smoking preferences</li>
                        </ul>

                        <p>Pet preferences</p>
                    </div>
                </div>


                <div id="googleMap" className={styles["information__map"]}>
                    <input type="hidden" id="from" class="text" />
                    <input type="hidden" id="to" class="text" />
                </div>
            </section>
        </main>
    );
}