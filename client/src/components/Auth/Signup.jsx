// client/src/components/Auth/Signup.jsx
import React, { useState } from "react";
import '../../styles/Auth.css';

const Signup = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Signup successful!");
      } else {
        setMessage(data.message || "Error signing up.");
      }
    } catch (error) {
      setMessage("Error signing up. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Signup</h2>
      <form onSubmit={handleSubmit} className="auth-input-group">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="auth-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="auth-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="auth-input"
        />
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      {message && <p className="auth-message">{message}</p>}
    </div>
  );
};

export default Signup;
