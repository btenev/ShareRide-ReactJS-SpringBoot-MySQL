import styles from './Register.module.css';
import * as utilityService from '../../services/utilityService';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';

export const Register = () => {
    const { onRegisterSubmit, errors } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        firstName: '',
        lastName: '',
        gender: 'NONE',
        birthDate: '',
        phoneNumber: '',
        country: '',
        city: '',
        street: '',
        postalCode: '',
        communication: 'NONE',
        smoking: 'NONE',
        music: 'NONE',
        pet: 'NONE',
        language: 'NONE',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    const [enums, setEnums] = useState({
        gender: [],
        communication: [],
        language: [],
        music: [],
        pet: [],
        smoking: [],
    })

    useEffect(() => {
        utilityService
            .getRegisterEnums()
            .then(data => {
                setEnums(data);
            })
    }, []);



    // const firstNameLength = errors.includes("First name must be between 2 and 30 characters!");

    // const lastNameBlank = errors.includes("Please enter your last name!");
    // const lastNameLength = errors.includes("Last name must be between 2 and 30 characters!");
    // console.log(errors.forEach(e => console.log(e)));

    return (
        <main className={styles["main"]}>
            <section className={styles["register"]}>
                <img className={styles["register__image"]} src={require("../../images/register-main-01.jpg")} alt="register" />

                <div className={styles["register__input"]}>

                    <form className={styles["input"]} onSubmit={onSubmit}>
                        <div className={[styles["input__fields"], styles["box1"]].join(' ')}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={changeHandler}
                            />

                            {errors.toString().includes("Please, enter your email!") &&
                                (<p className={styles["error"]}>Please, enter your email!</p>)}
                            {errors.toString().includes("User email should be valid!") &&
                                (<p className={styles["error"]}>User email should be valid!</p>)}
                            {errors.toString().includes("User email should be unique!") &&
                                (<p className={styles["error"]}>User email should be unique!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box2"]].join(' ')}>
                            <label htmlFor="country">Country</label>
                            <select
                                id="country"
                                name="country"
                                value={values.country}
                                onChange={changeHandler}
                            >
                                <option>Select...</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Uk">Uk</option>
                                <option value="USA">USA</option>
                            </select>
                        </div>

                        <div className={[styles["input__fields"], styles["box3"]].join(' ')}>
                            <label htmlFor="firstName">First name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={values.firstName}
                                onChange={changeHandler}
                            />

                            {errors.toString().includes("First name must be between 2 and 30 characters!") &&
                                (<p className={styles["error"]}>First name must be between 2 and 30 characters!</p>)}
                            {errors.toString().includes("Please enter your first name!") &&
                                (<p className={styles["error"]}>Please enter your first name!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box4"]].join(' ')}>
                            <label htmlFor="city">City</label>
                            <select
                                id="city"
                                name="city"
                                value={values.city}
                                onChange={changeHandler}
                            >
                                <option disabled>Select...</option>
                                <option value="Sofia">Sofia</option>
                                <option value="Plovdiv">Plovdiv</option>
                                <option value="Varna">Varna</option>
                            </select>
                        </div>

                        <div className={[styles["input__fields"], styles["box5"]].join(' ')}>
                            <label htmlFor="lastName">Last name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={values.lastName}
                                onChange={changeHandler}
                            />

                            {errors.toString().includes("Last name must be between 2 and 30 characters!")
                                && (<p className={styles["error"]}>Last name must be between 2 and 30 characters!</p>)}
                            {errors.toString().includes("Please enter your last name!") &&
                                (<p className={styles["error"]}>Please enter your last name!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box6"]].join(' ')}>
                            <label htmlFor="street">Street</label>
                            <input
                                type="text"
                                id="street"
                                name="street"
                                value={values.street}
                                onChange={changeHandler}
                            />

                            {errors.toString().includes("Please, enter your street!") &&
                                (<p className={styles["error"]}>Please, enter your street!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box9"]].join(' ')}>
                            <label htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={values.gender}
                                onChange={changeHandler}
                            >

                                {enums.gender.map(x => {
                                    if (x === "NONE") {
                                        return <option key={x} value={x}>Select...</option>
                                    } else {
                                        return <option key={x} value={x}>{x}</option>
                                    }
                                })}
                            </select>

                            {errors.toString().includes("Please, select your gender!") &&
                                (<p className={styles["error"]}>Please, select your gender!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box7"]].join(' ')}>
                            <label htmlFor="language">Language</label>
                            <select
                                id="language"
                                name="language"
                                value={values.language}
                                onChange={changeHandler}
                            >

                                {enums.language.map(x => {
                                    if (x === "NONE") {
                                        return <option key={x} value={x}>Select...</option>
                                    } else {
                                        return <option key={x} value={x}>{x}</option>
                                    }
                                })}
                            </select>

                            {errors.toString().includes("Please select your language!") &&
                                (<p className={styles["error"]}>Please select your language!</p>)}
                        </div>

                        <div className={[styles["input__fields"], styles["box8"]].join(' ')}>
                            <label htmlFor="postalCode">Postal code</label>
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={values.postalCode}
                                onChange={changeHandler}
                            />

                            {errors.toString().includes("Please, enter your postal code!") &&
                                (<p className={styles["error"]}>Please, enter your postal code!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box11"]].join(' ')}>
                            <label htmlFor="birthDate">Birth date</label>
                            <input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                value={values.birthDate}
                                onChange={changeHandler}
                            />

                            {errors.toString().includes("Invalid birth date!") &&
                                (<p className={styles["error"]}>Invalid birth date!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box10"]].join(' ')}>
                            <label htmlFor="communication">Communication</label>
                            <select
                                id="communication"
                                name="communication"
                                value={values.communication}
                                onChange={changeHandler}
                            >
                                {enums.communication.map(x => {
                                    if (x === "NONE") {
                                        return <option key={x} value={x}>Select...</option>
                                    } else {
                                        return <option key={x} value={x}>{x}</option>
                                    }
                                })}
                            </select>

                            {errors.toString().includes("Please, select how talkative are you!") &&
                                (<p className={styles["error"]}>Please, select how talkative are you!</p>)}
                        </div>

                        <div className={[styles["input__fields"], styles["box13"]].join(' ')}>
                            <label htmlFor="phoneNumber">Phone number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                values={values.phoneNumber}
                                onChange={changeHandler}
                            />

                            {errors.toString().includes("Please, enter your phone number!") &&
                                (<p className={styles["error"]}>Please, enter your phone number!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box12"]].join(' ')}>
                            <label htmlFor="smoking">Smoking</label>
                            <select
                                id="smoking"
                                name="smoking"
                                value={values.smoking}
                                onChange={changeHandler}
                            >
                                {enums.smoking.map(x => {
                                    if (x === "NONE") {
                                        return <option key={x} value={x}>Select...</option>
                                    } else {
                                        return <option key={x} value={x}>{x}</option>
                                    }
                                })}

                            </select>

                            {errors.toString().includes("Please, select do you tolerate smoking!") &&
                                (<p className={styles["error"]}>Please, select do you tolerate smoking!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box14"]].join(' ')}>
                            <label htmlFor="music">Music</label>
                            <select
                                id="music"
                                name="music"
                                value={values.music}
                                onChange={changeHandler}
                            >
                                {enums.music.map(x => {
                                    if (x === "NONE") {
                                        return <option key={x} value={x}>Select...</option>
                                    } else {
                                        return <option key={x} value={x}>{x}</option>
                                    }
                                })}


                            </select>

                            {errors.toString().includes("Please, select do you listen music while driving!") &&
                                (<p className={styles["error"]}>Please, select do you listen music while driving!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box16"]].join(' ')}>
                            <label htmlFor="pet">Pet</label>
                            <select
                                id="pet"
                                name="pet"
                                value={values.pet}
                                onChange={changeHandler}
                            >
                                {enums.pet.map(x => {
                                    if (x === "NONE") {
                                        return <option key={x} value={x}>Select...</option>
                                    } else {
                                        return <option key={x} value={x}>{x}</option>
                                    }
                                })}
                            </select>


                            {errors.toString().includes("Please, select do you like pets!") &&
                                (<p className={styles["error"]}>Please, select do you like pets!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box15"]].join(' ')}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={changeHandler}
                            />

                            {errors.toString().includes("Password field cannot be empty!") &&
                                (<p className={styles["error"]}>Password field cannot be empty!</p>)}
                            {errors.toString().includes("Password must be between 5 and 20 characters!") &&
                                (<p className={styles["error"]}>Password must be between 5 and 20 characters!</p>)}
                            {errors.toString().includes("Passwords do no match!") &&
                                (<p className={styles["error"]}>Passwords do no match!</p>)}

                        </div>

                        <div className={[styles["input__fields"], styles["box17"]].join(' ')}>
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input
                                type="confirmPassword"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={changeHandler}
                            />
                        </div>
                        {/* //Todo: Review password, confirmPassword css styling -box */}
                        <div className={[styles["input__fields"], styles["box18"]].join(' ')}>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>

    );
}