import styles from './Register.module.css';

export const Register = () => {
    return (
        <main className={styles["main"]}>
            <section className={styles["register"]}>
                <img className={styles["register__image"]} src={require("../../images/register-main-01.jpg")} alt="register-picture" />

                <div className={styles["register__input"]}>

                    <form className={styles["input"]} action="">
                        <div className={[styles["input__fields"], styles["box1"]].join(' ')}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" />
                        </div>

                        <div className={[styles["input__fields"], styles["box2"]].join(' ')}>
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country" defaultValue={"selected"}>
                                <option value="selected">Select...</option>
                                <option value="">Bulgaria</option>
                                <option value="">Uk</option>
                                <option value="">USA</option>
                            </select>
                        </div>

                        <div className={[styles["input__fields"], styles["box3"]].join(' ')}>
                            <label htmlFor="firstName">First name</label>
                            <input type="text" id="firstName" name="firstName" />
                        </div>

                        <div className={[styles["input__fields"], styles["box4"]].join(' ')}>
                            <label htmlFor="city">City</label>
                            <select id="city" name="city" defaultValue={"selected"}>
                                <option value="selected">Select...</option>
                                <option value="">Sofia</option>
                                <option value="">Plovdiv</option>
                                <option value="">Varna</option>
                            </select>
                        </div>

                        <div className={[styles["input__fields"], styles["box5"]].join(' ')}>
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" id="lastName" />
                        </div>

                        <div className={[styles["input__fields"], styles["box6"]].join(' ')}>
                            <label htmlFor="Street">Street</label>
                            <input type="text" id="Street" name="Street" />
                        </div>

                        <div className={[styles["input__fields"], styles["box7"]].join(' ')}>
                            <label htmlFor="Gender">Gender</label>
                            <select id="Gender" name="Gender" defaultValue={"selected"}>
                                <option value="selected">Select...</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>

                        <div className={[styles["input__fields"], styles["box8"]].join(' ')}>
                            <label htmlFor="postalCode">Postal code</label>
                            <input type="text" id="postalCode" name="postalCode" />
                        </div>

                        <div className={[styles["input__fields"], styles["box9"]].join(' ')}>
                            <label htmlFor="birthDate">Birth date</label>
                            <input type="date" id="birthDate" name="birthDate" />
                        </div>

                        <div className={[styles["input__fields"], styles["box10"]].join(' ')}>
                            <label htmlFor="communication">Communication</label>
                            <select id="communication" name="communication" defaultValue={"selected"}>
                                <option value="selected">Select...</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>

                        <div className={[styles["input__fields"], styles["box11"]].join(' ')}>
                            <label htmlFor="phoneNumber">Phone number</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" />
                        </div>

                        <div className={[styles["input__fields"], styles["box12"]].join(' ')}>
                            <label htmlFor="smoking">Smoking</label>
                            <select id="smoking" name="smoking" defaultValue={"selected"}>
                                <option value="selected">Select...</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>

                        <div className={[styles["input__fields"], styles["box13"]].join(' ')}>
                            <label htmlFor="music">Music</label>
                            <select id="music" name="music" defaultValue={"selected"}>
                                <option value="selected">Select...</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>

                        <div className={[styles["input__fields"], styles["box14"]].join(' ')}>
                            <label htmlFor="pets">Pets</label>
                            <select id="pets" name="pets" defaultValue={"selected"}>
                                <option value="selected">Select...</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>

                        <div className={[styles["input__fields"], styles["box15"]].join(' ')}>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>

    );
}