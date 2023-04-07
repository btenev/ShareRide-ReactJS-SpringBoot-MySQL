import style from './CreateRide.module.css';

export const CreateRide = () => {
    return (
        <>
            <main className={style["main"]}>
                <section className={style["travel-directions"]}>
                    <div className={style["input__fields"]}>
                        <label htmlFor="from">Departure</label>
                        <input type="text" id="from" name="from" />
                    </div>

                    <div className={style["input__fields"]}>
                        <label htmlFor="to">Arrival</label>
                        <input type="text" id="to" name="to" />
                    </div>
                    <button>Calculate</button>
                </section>

                <section className="googleMap">
                </section>

                <section className={style["travel-details"]}>
                    <form action="">
                        <div className={style["date-time"]}>
                            <p>Date & time</p>

                            <div className={style["collection-input"]}>
                                <div className={style["input__fields"]}>
                                    <label htmlFor="departureDate">Departure date</label>
                                    <input type="date" id="departureDate" name="departureDate" />
                                </div>

                                <div className={style["input__fields"]}>
                                    <label htmlFor="departureTime">Departure time</label>
                                    <input type="time" id="departureTime" name="departureTime" />
                                </div>

                                <div className={style["input__fields"]}>
                                    <label htmlFor="returnDate">Return date</label>
                                    <input type="date" id="returnDate" name="returnDate" />
                                </div>

                                <div className={style["input__fields"]}>
                                    <label htmlFor="returnTime">Return time</label>
                                    <input type="time" id="returnTime" name="returnTime" />
                                </div>
                            </div>

                        </div>

                        <div className={style["more-details"]}>
                            <p>More details</p>

                            <div className={style["collection-input"]}>
                                <div className={style["input__fields"]}>
                                    <label htmlFor="numberOfSeats">Number of seats</label>
                                    <select id="numberOfSeats" name="numberOfSeats" defaultValue={"selected"}>
                                        <option value="selected">Select...</option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </div>

                                <div className={style["input__fields"]}>
                                    <label htmlFor="allowedLuggage">Allowed luggage</label>
                                    <select id="allowedLuggage" name="allowedLuggage" defaultValue={"selected"}>
                                        <option value="selected" >Select...</option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </div>

                                <div className={style["input__fields"]}>
                                    <label htmlFor="estimatedPrice">Estimated price</label>
                                    <input type="text" id="estimatedPrice" name="estimatedPrice" placeholder="price" />
                                </div>

                                <div className={style["input__fields"]}>
                                    <label htmlFor="tripInformation">Extra trip information</label>
                                    <textarea id="tripInformation"></textarea>
                                </div>

                            </div>
                        </div>
                        <button>Submit</button>
                    </form>
                </section>
            </main>
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfYtwqdbf2aEIkKukIKEqwbKyYkxC4n0c&libraries=places"></script>
            <script src="./google-map.js"></script>
        </>
    );
}