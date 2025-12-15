import React, { useState } from "react";

function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

    if (isRegister && !formData.name) {
      errorMes.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errorMes.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errorMes.email = "Invalid email format";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

    if (!formData.password) {
      errorMes.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      errorMes.password =
        "Password must be 8+ chars with uppercase, lowercase, and number";
    }

    if (isRegister) {
      if (!formData.confirmPassword) {
        errorMes.confirmPassword = "Confirm password is required";
      } else if (formData.password !== formData.confirmPassword) {
        errorMes.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(errorMes);
    return Object.keys(errorMes).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      if (isRegister) {
        console.log("Registration successful:", formData);
        alert("Registered successfully");
      } else {
        console.log("Login successful:", formData);
        alert("Login successful");
      }
    }
  };

  return (
    <div>
      <h2>{isRegister ? "Register Page" : "Login Page"}</h2>

      <form onSubmit={handleSubmit}>
        {isRegister && (
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          </div>
        )}

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>

        {isRegister && (
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span style={{ color: "red" }}>
                {errors.confirmPassword}
              </span>
            )}
          </div>
        )}

        <button type="submit">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      <p>
        {isRegister ? "Already have an account?" : "Don't have an account?"}
        <button type="button" onClick={() => {
          setIsRegister(!isRegister);
          setErrors({});
        }}>
          {isRegister ? "Login" : "Register"}
        </button>
      </p>
    </div>
  );
}

export default LoginPage;
