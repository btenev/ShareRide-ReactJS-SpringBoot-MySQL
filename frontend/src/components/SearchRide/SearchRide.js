import styles from './SearchRide.module.css';

export const SearchRide = () => {
    return (
        <main className={styles["main"]}>
            <section className={styles["search"]}>
                <img className={styles["search__image"]} src={require("../../images/search.jpg")} alt="search__image" />

                <div className={styles["search__container"]}>
                    <div className={styles["container__choose"]}>
                        <form action="">
                            <input className={styles["input__fields"]} type="text" placeholder="" />
                            <input className={styles["input__fields"]} type="text" placeholder="" />
                            <input className={styles["input__fields"]} type="date" />
                            <input className={styles["input__fields"]} type="time" />
                            <button>Find a ride</button>
                        </form>
                    </div>

                    <div className={styles["search__details"]}>
                        <ul role="list">
                            <li>Date</li>
                        </ul>
                        <ul role="list">
                            <li>Driver name</li>
                            <li>Departure hour</li>
                            <li>Arrival hour</li>
                        </ul>
                        <ul role="list">
                            <li>Price</li>
                            <li>Departure city</li>
                            <li>Arrival city</li>
                            <li>Number of available seats</li>
                        </ul>
                    </div>

                    <div className={styles["search__details"]}>
                        <ul role="list">
                            <li>Date</li>
                        </ul>
                        <ul role="list">
                            <li>Driver name</li>
                            <li>Departure hour</li>
                            <li>Arrival hour</li>
                        </ul>
                        <ul role="list">
                            <li>Price</li>
                            <li>Departure city</li>
                            <li>Arrival city</li>
                            <li>Number of available seats</li>
                        </ul>
                    </div>

                    <div className={styles["search__details"]}>
                        <ul role="list">
                            <li>Date</li>
                        </ul>
                        <ul role="list">
                            <li>Driver name</li>
                            <li>Departure hour</li>
                            <li>Arrival hour</li>
                        </ul>
                        <ul role="list">
                            <li>Price</li>
                            <li>Departure city</li>
                            <li>Arrival city</li>
                            <li>Number of available seats</li>
                        </ul>
                    </div>
                </div >
            </section >
        </main >
    );
}