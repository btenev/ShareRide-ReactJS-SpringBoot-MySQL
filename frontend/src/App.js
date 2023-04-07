import './components/FontAwesomeIcons';
import './reset.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { AuthContext } from './context/AuthContext';
import * as authServices from './services/authService';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { CreateRide } from './components/CreateRide/CreateRide';
import { SearchRide } from './components/SearchRide/SearchRide';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const [errors, setErrors] = useState({});

    const onLoginSubmit = async (data) => {
        try {
            const result = await authServices.login(data);

            setAuth(result);

            navigate('/');
        } catch (err) {
            console.log(err.message);
            setErrors(err.message);
        }
    }

    const context = {
        onLoginSubmit,
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
        <AuthContext.Provider value={context}>
            <>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/publish' element={<CreateRide />} />
                    <Route path='/search' element={<SearchRide />} />
                </Routes>
                <Footer />
            </>
        </AuthContext.Provider>
    );
}

export default App;
