// client/src/components/Budget/NetBalance.jsx
import React, { useEffect } from "react";
import "../../styles/NetBalance.css";
import anime from "animejs";

const NetBalance = ({ netBalance }) => {
  useEffect(() => {
    // Animation for the net balance amount
    anime({
      targets: ".net-balance-amount",
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1500,
      easing: "easeOutExpo",
    });

    // Glow animation for positive or negative balance
    const balanceBox = document.querySelector(".net-balance-box");
    if (balanceBox) {
      anime({
        targets: balanceBox,
        boxShadow: netBalance >= 0 
          ? ["0 0 10px rgba(52, 211, 160, 0.5)", "0 0 20px rgba(52, 211, 160, 1)"]
          : ["0 0 10px rgba(255, 82, 82, 0.5)", "0 0 20px rgba(255, 82, 82, 1)"],
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        duration: 1000,
      });
    }
  }, [netBalance]);

  return (
    <div className="net-balance-container">
      <div className={`net-balance-box ${netBalance >= 0 ? "positive" : "negative"}`}>
        <h3 className="net-balance-title">Net Balance</h3>
        <p className="net-balance-amount">
          ${netBalance.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default NetBalance;
