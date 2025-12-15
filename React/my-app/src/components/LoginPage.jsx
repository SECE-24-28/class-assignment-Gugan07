import React, { useState } from 'react';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
        let errorMes = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            errorMes.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            errorMes.email = "Invalid email format";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
        if (!formData.password) {
            errorMes.password = "Password is required";
        } else if (!passwordRegex.test(formData.password)) {
            errorMes.password = "Password must be 8+ chars with uppercase, lowercase, and number";
        }
        
        setErrors(errorMes);
        return Object.keys(errorMes).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Login successful:", formData);
        }
    };

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;