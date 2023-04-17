import styles from './CreateRide.module.css';
import * as utilityService from '../../services/utilityService';

import { useJsApiLoader, GoogleMap, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';

import { useContext, useEffect, useRef, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';


const center = { lat: 42.6977, lng: 23.3219 };
export const CreateRide = () => {

    const [libraries] = useState(['places']);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const { onPublishRideSubmit, errors } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        departure: '',
        arrival: '',
        departureDate: '',
        departureTime: '',
        numberOfSeats: 'NONE',
        baggageQuantity: 'NONE',
        price: '',
        tripInformation: '',
        brand: '',
        model: '',
        color: '',
        licensePlate: '',

    }, onPublishRideSubmit)

    const [enums, setEnums] = useState({
        baggageQuantity: [],
        numberOfSeats: [],
    })

    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();

    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef();

    async function calculateRoute() {
        if (originRef.current.value === '' || destinationRef.current.value === '') {
            return;
        }

        //eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            //eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        });

        setDirectionsResponse(results);
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text);
        values.departure = originRef.current.value;
        values.arrival = destinationRef.current.value;
    }

    function clearRoute() {
        setDirectionsResponse(null);
        setDistance('');
        setDuration('');
        originRef.current.value = '';
        destinationRef.current.value = ''
        values.departure = '';
        values.arrival = ''
    }

    useEffect(() => {
        utilityService
            .getRideEnums()
            .then(data => {
                setEnums(data);
            })

    }, [])

    if (!isLoaded) {
        return <p>Is loading</p>
    }
    return (
        <main className={styles["main"]}>
            <section className={styles["travel-directions"]}>

                <div className={styles["input__fields"]}>
                    <label htmlFor="origin">Origin</label>
                    <Autocomplete>
                        <input
                            type="text"
                            id="origin"
                            // name="origin"
                            ref={originRef}
                        // value={values.departure}
                        // onChange={changeHandler}
                        />
                    </Autocomplete>

                    {errors.toString().includes("Please, enter your origin location!") &&
                        (<p className={styles["error"]}>Please, enter your origin location!</p>)}

                </div>

                <div className={styles["input__fields"]}>
                    <label htmlFor="arrival">Arrival</label>
                    <Autocomplete>
                        <input
                            type="text"
                            id="arrival"
                            // name="arrival"
                            ref={destinationRef}
                        // value={values.arrival}
                        // onChange={changeHandler}
                        />
                    </Autocomplete>

                    {errors.toString().includes("Please, enter your destination location!") &&
                        (<p className={styles["error"]}>Please, enter your destination location!</p>)}

                </div>
                <button onClick={calculateRoute} className={styles["calculate"]}>Calculate</button>
                <button onClick={clearRoute} className={styles["clear"]}>Clear</button>

                <p>Distance: {distance}</p>
                <p>Duration: {duration}</p>
            </section>

            <section className={styles["googleMap"]}>
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        fullscreenControl: false,
                        mapTypeControl: false,
                    }}
                >
                    {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
                </GoogleMap>
            </section>

            <section className={styles["travel-details"]}>
                <form onSubmit={onSubmit}>
                    <div className={styles["date-time"]}>
                        <p>Date & time</p>

                        <div className={styles["collection-input"]}>
                            <div className={styles["input__fields"]}>
                                <label htmlFor="departureDate">Departure date</label>
                                <input
                                    type="date"
                                    id="departureDate"
                                    name="departureDate"
                                    value={values.departureDate}
                                    onChange={changeHandler}
                                />
                                {errors.toString().includes("Please, enter your departure date!") &&
                                    (<p className={styles["error"]}>Please, enter your departure date!</p>)}

                                {errors.toString().includes("Date should be in the future!") &&
                                    (<p className={styles["error"]}>Date should be in the future!</p>)}
                            </div>

                            <div className={styles["input__fields"]}>
                                <label htmlFor="departureTime">Departure time</label>
                                <input
                                    type="time"
                                    id="departureTime"
                                    name="departureTime"
                                    value={values.departureTime}
                                    onChange={changeHandler}
                                />

                                {errors.toString().includes("Please, enter your departure time!") &&
                                    (<p className={styles["error"]}>Please, enter your departure time!</p>)}
                            </div>

                        </div>

                    </div>

                    <div className={styles["more-details"]}>
                        <p>More details</p>

                        <div className={styles["collection-input"]}>
                            <div className={styles["input__fields"]}>
                                <label htmlFor="numberOfSeats">Number of seats</label>
                                <select
                                    id="numberOfSeats"
                                    name="numberOfSeats"
                                    value={values.numberOfSeats}
                                    onChange={changeHandler}
                                >

                                    {enums.numberOfSeats.map(x => {
                                        if (x === "NONE") {
                                            return <option key={x} value={x}>Select...</option>
                                        } else {
                                            return <option key={x} value={x}>{x}</option>
                                        }
                                    })}
                                </select>

                                {errors.toString().includes("Please, select the number of available car seats!") &&
                                    (<p className={styles["error"]}>Please, select the number of available car seats!</p>)}
                            </div>

                            <div className={styles["input__fields"]}>
                                <label htmlFor="baggageQuantity">Allowed luggage</label>
                                <select
                                    id="baggageQuantity"
                                    name="baggageQuantity"
                                    value={values.baggageQuantity}
                                    onChange={changeHandler}
                                >

                                    {enums.baggageQuantity.map(x => {
                                        if (x === "NONE") {
                                            return <option key={x} value={x}>Select...</option>
                                        } else {
                                            return <option key={x} value={x}>{x}</option>
                                        }
                                    })}
                                </select>

                                {errors.toString().includes("Please, select the size of the allowed luggage!") &&
                                    (<p className={styles["error"]}>Please, select the size of the allowed luggage!</p>)}
                            </div>

                            <div className={styles["input__fields"]}>
                                <label htmlFor="price">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    placeholder="price"
                                    value={values.price}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className={styles["input__fields"]}>
                                <label htmlFor="tripInformation">Extra trip information</label>
                                <textarea
                                    id="tripInformation"
                                    name="tripInformation"
                                    value={values.tripInformation}
                                    onChange={changeHandler}
                                ></textarea>
                            </div>

                        </div>
                    </div>

                    <div className={styles["car-details"]}>
                        <p>Car details</p>

                        <div className={styles["collection-input"]}>

                            <div className={styles["input__fields"]}>
                                <label htmlFor="brand">Brand</label>
                                <input
                                    type="text"
                                    id="brand"
                                    name="brand"
                                    value={values.brand}
                                    onChange={changeHandler}
                                />

                                {errors.toString().includes("Please, enter the brand of the ride vehicle!") &&
                                    (<p className={styles["error"]}>Please, enter the brand of the ride vehicle!</p>)}
                            </div>

                            <div className={styles["input__fields"]}>
                                <label htmlFor="model">Model</label>
                                <input
                                    type="text"
                                    id="model"
                                    name="model"
                                    value={values.model}
                                    onChange={changeHandler}
                                />

                                {errors.toString().includes("Please, enter the model of the ride vehicle!") &&
                                    (<p className={styles["error"]}>Please, enter the model of the ride vehicle!</p>)}
                            </div>

                            <div className={styles["input__fields"]}>
                                <label htmlFor="color">Color</label>
                                <input
                                    type="text"
                                    id="color"
                                    name="color"
                                    value={values.color}
                                    onChange={changeHandler}
                                />

                                {errors.toString().includes("Please, enter the color of the ride vehicle!") &&
                                    (<p className={styles["error"]}>Please, enter the color of the ride vehicle!</p>)}
                            </div>

                            <div className={styles["input__fields"]}>
                                <label htmlFor="licensePlate">License plate</label>
                                <input
                                    type="text"
                                    id="licensePlate"
                                    name="licensePlate"
                                    value={values.licensePlate}
                                    onChange={changeHandler}
                                />

                                {errors.toString().includes("Please, enter the license plate of the ride vehicle!") &&
                                    (<p className={styles["error"]}>Please, enter the license plate of the ride vehicle!</p>)}
                            </div>

                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </section>
        </main>
    );
}