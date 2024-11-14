// src/components/Auth/LogoutButton.jsx
import React from 'react';

const LogoutButton = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsAuthenticated(false); // Update the authentication state
  };

  return (
    <button onClick={handleLogout}>
      Sign Out
    </button>
  );
};

export default LogoutButton;
