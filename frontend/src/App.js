import './components/FontAwesomeIcons';
import './reset.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { AuthContext } from './context/AuthContext';
import * as authServices from './services/authService';
import * as rideServices from './services/rideService';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { CreateRide } from './components/CreateRide/CreateRide';
import { SearchRide } from './components/SearchRide/SearchRide';
import { DetailsRide } from './components/DetailsRide/DetailsRide';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const [errors, setErrors] = useState([]);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authServices.login(data);

            setAuth(result);

            navigate('/');
        } catch (err) {

            setErrors(err.message);
        }
    }

    const onRegisterSubmit = async (data) => {
        const { country, city, street, postalCode, ...userData } = data;

        const address = {
            country,
            city,
            street,
            postalCode,
        };

        try {
            const result = await authServices.register({ ...userData, address });

            setAuth(result);

            navigate('/')
        } catch (errors) {

            setErrors(Object.values(errors));
        }
    }

    const onPublishRideSubmit = async (data) => {
        const { brand, model, color, licensePlate, ...rideData } = data;

        const car = {
            brand,
            model,
            color,
            licensePlate,
        }

        try {
            const result = await rideServices.publishRide({ ...rideData, car }, authContext.token);

           console.log(result);
           navigate('/')
        } catch (createErr) {
            console.log(createErr["errors"]);
            setErrors(createErr["errors"])
            Object.values(createErr)
        }
    }

    const authContext = {
        onLoginSubmit,
        onRegisterSubmit,
        onPublishRideSubmit,
        errors,
        setErrors,
        userId: auth.id,
        token: auth.token,
        firstName: auth.firstName,
        lastName: auth.lastName,
        email: auth.email,
        isAuthenticated: !!auth.token,
    }

    return (
        <AuthContext.Provider value={authContext}>
            <>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/search' element={<SearchRide />} />
                    <Route path='/publish' element={<CreateRide />} />
                    <Route path='/details/:id' element={<DetailsRide/>} />
                </Routes>
                <Footer />
            </>
        </AuthContext.Provider>
    );
}

export default App;
