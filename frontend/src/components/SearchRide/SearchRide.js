import { useState } from 'react';
import styles from './SearchRide.module.css';

export const SearchRide = () => {
    const [ values, setValues ] = useState({
        departure: '',
        arrival: '',
        departureDate: '',
        departureTime: '',
    });

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(values);
    }

    const onSearchSubmit = (data) => {
        try {
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className={styles["main"]}>
            <section className={styles["search"]}>
                <img className={styles["search__image"]} src={require("../../images/search.jpg")} alt="search__image" />

                <div className={styles["search__container"]}>
                    <div className={styles["container__choose"]}>
                        <form onSubmit={onSubmit}>
                            <input
                                className={styles["input__fields"]}
                                type="text"
                                name="departure"
                                placeholder="Departure"
                                value={values.departure}
                                onChange={changeHandler}

                            />
                            <input
                                className={styles["input__fields"]}
                                type="text"
                                name="arrival"
                                placeholder="Arrival"
                                value={values.arrival}
                                onChange={changeHandler}
                            />
                            <input
                                className={styles["input__fields"]}
                                type="date"
                                name="departureDate"
                                value={values.departureDate}
                                onChange={changeHandler}
                            />
                            <input
                                className={styles["input__fields"]}
                                type="time"
                                name="departureTime"
                                value={values.departureTime}
                                onChange={changeHandler}
                            />
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