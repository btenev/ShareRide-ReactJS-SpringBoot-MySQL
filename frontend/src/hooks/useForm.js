import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";



export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const { setErrors } = useContext(AuthContext);
    
    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values);
        setErrors({});
    }

    return {
        values,
        changeHandler,
        onSubmit,
    }
}