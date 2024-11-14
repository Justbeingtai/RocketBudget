// client/src/components/Layout/Header.jsx
import React from 'react';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <header className="header">
      <h1>RocketBudget</h1>
      {isAuthenticated && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
