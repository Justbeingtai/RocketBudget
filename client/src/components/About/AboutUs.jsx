// client/src/components/About/AboutUs.jsx
import React, { useEffect } from 'react';
import anime from 'animejs';
import '../../styles/AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    // Title animation
    anime({
      targets: '.about-us-title',
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1500,
      easing: 'easeOutExpo',
    });

    // Content box animation
    anime({
      targets: '.about-us-content-box',
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: anime.stagger(300),
      easing: 'easeOutExpo',
    });

    // Back button animation
    anime({
      targets: '.back-button',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1200,
      easing: 'easeOutExpo',
      delay: 500,
    });
  }, []);

  const handleBackClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <div className="about-us-content-box">
          <h2>Our Mission</h2>
          <p>
            At <strong>RocketBudget</strong>, we strive to make financial management easy, intuitive, and empowering. 
            Track your income, manage expenses, and gain valuable insights into your finances all in one place.
          </p>
        </div>
        <div className="about-us-content-box">
          <h2>Future Plans</h2>
          <p>
            Soon, you’ll be able to utilize your net balance for personalized financial planning. From investment opportunities to 
            debt reduction strategies, RocketBudget aims to be your one-stop financial partner.
          </p>
        </div>
        <div className="about-us-content-box">
          <h2>Our Team</h2>
          <p>
            This platform is a labor of love by <strong>Nancy, Tai, Tyler, and Bitsiet</strong>. Together, we combined our skills to 
            create a tool that transforms the way you manage your finances.
          </p>
        </div>
      </div>
      <button className="back-button" onClick={handleBackClick}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default AboutUs;
