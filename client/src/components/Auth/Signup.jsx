import React, { useState } from "react";
import "../../styles/Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Signup successful!");
        setFormData({ username: "", email: "", password: "" });
      } else {
        setMessage(data.message || "Error signing up.");
      }
    } catch (error) {
      console.error("Error in signup:", error);
      setMessage("Error signing up. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Create Your Account</h2>
      <p className="auth-subtitle">Join RocketBudget and take control of your finances today!</p>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="auth-input"
            required
          />
        </div>
        <div className="auth-input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="auth-input"
            required
          />
        </div>
        <div className="auth-input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="auth-input"
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Sign Up
        </button>
        {message && <p className="auth-message">{message}</p>}
      </form>
    </div>
  );
};

export default Signup;
