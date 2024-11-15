// client/src/components/Layout/Header.jsx
import React from "react";
import "../../styles/Header.css";

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <h1>RocketBudget</h1>
      </div>
      {isAuthenticated && (
        <div className="header-actions">
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
