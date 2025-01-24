import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../store/main';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password1: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password1: ''
    })

    const { setUserData, username: storedUsername, password1: storedPassword1 } = useStore()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}
        if (!formData.username) newErrors.username = 'Username is required'
        if (!formData.password1) newErrors.password1 = 'Password is required'

        if (Object.keys(newErrors).length === 0) {
            if (formData.username === storedUsername && formData.password1 === storedPassword1) {
                setUserData(formData.username, 'default-profile-image.jpg')
                navigate('/profile')
            } else {
            }
        } else {
            setErrors(newErrors)
        }
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <Link to="/" className="input-cont text-white">Go to Register</Link>
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
                    <button className="color" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
