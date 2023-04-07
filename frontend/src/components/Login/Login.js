import styles from './Login.module.css';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
    const { onLoginSubmit, errors } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);

    return (
        <main className={styles["main"]}>
            <section className={styles["login"]}>
                <img className={styles["login__image"]} src={require("../../images/login-main-01.jpg")} alt="login-page" />

                <div className={styles["login__input"]}>
                    <form className={styles["login__form"]} onSubmit={onSubmit}>

                        <div className={styles["input__fields"]}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={changeHandler}
                            />
                            {errors === "Unknown user" && <p className={styles["error"]}>Unknown user</p>}
                        </div>

                        <div className={styles["input__fields"]}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={changeHandler}
                            />
                            {errors === "Invalid password" ? <p className={styles["error"]}>Invalid password</p> : ''}
                        </div>

                        <button>Submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
}