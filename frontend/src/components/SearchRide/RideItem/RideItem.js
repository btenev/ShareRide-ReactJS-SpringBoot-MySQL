import styles from '../SearchRide.module.css';
import { Link } from 'react-router-dom';

export const RideItem = ({
    id,
    departureDate,
    departureTime,
    driver, 
    price,
    departure,
    arrival,
    numberOfSeats,
}) => {

    const date = new Date(departureDate).toLocaleDateString();
   
    return (
        <div className={styles["search__details"]}>
            <ul role="list">
                <li>Date</li>
                <li>{date}</li>
            </ul>
            <ul role="list">
                <li>Driver name: {driver.firstName} {driver.lastName}</li>
                <li>Departure hour: {`${departureTime[0]}:${departureTime[1]}`}</li>
                {/* <li>Arrival hour</li> */}
            </ul>
            <ul role="list">
                <li>Price: {price}</li>
                <li>Departure city: {departure}</li>
                <li>Arrival city: {arrival}</li>
                <li>Number of available seats: {numberOfSeats}</li>
            </ul>
            <ul role="list">
                <button>
                    <Link to={`/details/${id}`}>Details</Link>
                </button>
            </ul>
        </div>
    );
}