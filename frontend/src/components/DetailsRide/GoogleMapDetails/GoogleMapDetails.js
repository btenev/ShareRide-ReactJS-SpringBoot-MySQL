import styles from '../DetailsRide.module.css';
import { useState, useRef } from 'react';
import { useJsApiLoader, GoogleMap, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';

const center = { lat: 42.6977, lng: 23.3219 };
export const GoogleMapDetails = () => {
    const [libraries] = useState(['places']);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');


    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();

    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef();

    async function calculateRoute() {

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


        if (!isLoaded) {
            return <p>Is loading</p>
        }
    }
    return (
        <div id="googleMap" className={styles["information__map"]}>
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
            <div className="googleOutput">
                <div className={styles["input__fields"]}>
                    <label htmlFor="origin">Origin</label>
                    <Autocomplete>
                        <input
                            type="text"
                            id="origin"
                            ref={originRef}
                        />
                    </Autocomplete>
                </div>

                <div className={styles["input__fields"]}>
                    <label htmlFor="arrival">Arrival</label>
                    <Autocomplete>
                        <input
                            type="text"
                            id="arrival"
                            // name="arrival"
                            ref={destinationRef}
                        />
                    </Autocomplete>
                </div>
                <p>Duration: {duration}</p>
                <p>Distance: {distance}</p>
                <button onClick={calculateRoute}>Calculate</button>
            </div>
        </div>

    );
}