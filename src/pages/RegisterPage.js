import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useStore from '../store/main';


const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password1: '',
        password2: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password1: '',
        password2: ''
    });

    const { setRegistrationData } = useStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password1) newErrors.password1 = 'Password is required';
        if (formData.password1 !== formData.password2) newErrors.password2 = 'Passwords do not match';

        if (Object.keys(newErrors).length === 0) {
            setRegistrationData(formData.username, formData.password1, formData.password2);

            setFormData({ username: '', password1: '', password2: '' });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="registration-form">
            <h2>Register</h2>
            <Link to="/login" className="input-cont text-white">Go to Login</Link>
            <form onSubmit={handleSubmit}>
                <div className="input-cont">
                    <label className="color" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>

                <div className="input-cont">
                    <label className="color" htmlFor="password1">Password</label>
                    <input
                        type="password"
                        id="password1"
                        name="password1"
                        value={formData.password1}
                        onChange={handleChange}
                    />
                    {errors.password1 && <p style={{ color: 'red' }}>{errors.password1}</p>}
                </div>

                <div className="input-cont">
                    <label className="color" htmlFor="password2">Confirm Password</label>
                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p style={{ color: 'red' }}>{errors.password2}</p>}
                </div>

                <div className="input-cont">
                    <button className="color" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
