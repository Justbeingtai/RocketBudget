// client/src/components/Layout/Header.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Header.css";
import anime from "animejs";

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleNavigateToAbout = () => {
    navigate("/about");
  };

  useEffect(() => {
    // Animate the logo
    anime({
      targets: ".header-logo h1",
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutExpo",
    });

    // Animate buttons
    anime({
      targets: ".header-actions button",
      opacity: [0, 1],
      delay: anime.stagger(200),
      duration: 1000,
      easing: "easeOutExpo",
    });

    // Button hover effect
    const buttons = document.querySelectorAll(".header-actions button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        anime({
          targets: button,
          scale: 1.1,
          duration: 300,
          easing: "easeOutSine",
        });
      });
      button.addEventListener("mouseleave", () => {
        anime({
          targets: button,
          scale: 1,
          duration: 300,
          easing: "easeOutSine",
        });
      });
    });
  }, []);

  return (
    <header className="header-container">
      <div className="header-logo">
        <h1>RocketBudget</h1>
      </div>
      {isAuthenticated && (
        <div className="header-actions">
          <button onClick={handleNavigateToAbout} className="about-button">
            About Us
          </button>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
