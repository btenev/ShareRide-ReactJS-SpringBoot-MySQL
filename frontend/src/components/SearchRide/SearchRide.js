import styles from './SearchRide.module.css';

import { useState } from 'react';
import * as rideServices from '../../services/rideService';
import { RideItem } from './RideItem/RideItem';


export const SearchRide = () => {
    const [values, setValues] = useState({
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

        if (values.departure === '' && values.arrival === '') {
            return;
        }

        onSearchSubmit(values);
    }

    const [travelData, setTravelData] = useState([]);

    const onSearchSubmit = async (data) => {
        try {
            const result = await rideServices.rideSearch(data);

            setTravelData(result);
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

                    {travelData.map(x => <RideItem key={x.id}  {...x} />)}
               
                </div >

            </section >
        </main >
    );
}