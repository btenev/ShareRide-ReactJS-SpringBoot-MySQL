import styles from './DetailsRide.module.css';
import * as utilityService from '../../services/rideService';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GoogleMapDetails } from './GoogleMapDetails/GoogleMapDetails';

export const DetailsRide = () => {
    const { id } = useParams();

    const [rideInfo, setRideInfo] = useState({
        driver: {
            firstName: '',
            lastName: '',
            gender: '',
            communication: '',
            smoking: '',
            pet: '',
        },
        departureTime: '',
        departure: '',
        arrival: '',
        car: {
            brand: '',
            model: '',
            color: '',
            licensePlate: '',
        },
        numberOfSeats: '',
        price: '',
        baggageQuantity: '',
    });

    useEffect(() => {
        utilityService
            .getRide(id)
            .then(data => {
                try {
                    setRideInfo(data);
                } catch (error) {
                    console.log(error.message)
                }
            })
    }, [id]);

    const fullName = rideInfo.driver.firstName + " " + rideInfo.driver.lastName;
    const formattedTime = rideInfo.departureTime[0] + ":" + rideInfo.departureTime[1];

    return (
        <main className={styles["main"]}>
            <section className={styles["ride-information"]}>
                <div className={styles["information__details"]}>
                    <h1>Ride details</h1>
                    <h3>Trip information</h3>
                    <div className={styles["information__details__trip"]}>
                        <ul role="list">
                            <li>Driver name: {fullName}</li>
                            <li>Departure time: {formattedTime}</li>
                            <li>Departure: {rideInfo.departure}</li>
                            <li>Arrival: {rideInfo.arrival}</li>
                        </ul>
                        <p>Price: {rideInfo.price}</p>
                    </div>

                    <h3>Car information</h3>
                    <div className={[styles["information__details__trip"], styles["second"]].join(' ')}>
                        <ul role="list">
                            <li>Car brand: {rideInfo.car.brand}</li>
                            <li>Car model: {rideInfo.car.model}</li>
                            <li>Car color: {rideInfo.car.color}</li>
                            <li>Car plate: {rideInfo.car.licensePlate}</li>
                        </ul>

                        <ul role="list">
                            <li>Free seats: {rideInfo.numberOfSeats}</li>
                            <li>Allowed luggage: {rideInfo.baggageQuantity}</li>
                        </ul>
                    </div>

                    <h3>Driver information</h3>
                    <div className={[styles["information__details__trip"], styles["third"]].join(' ')}>
                        <ul role="list">
                            <li>Gender: {rideInfo.driver.gender}</li>
                            <li>Age</li>
                            <li>Communication preferences: {rideInfo.driver.communication}</li>
                            <li>Smoking preferences: {rideInfo.driver.smoking}</li>
                            <li>Pet preferences: {rideInfo.driver.pet}</li>
                        </ul>

                        <textarea className="tripInformation" name="tripInformation" id="" cols="20" rows="10"></textarea>
                    </div>
                </div>

                <GoogleMapDetails />

            </section>
        </main>
    );
}