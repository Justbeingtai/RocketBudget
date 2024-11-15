// client/src/components/Budget/NetBalance.jsx
import React from 'react';

const NetBalance = ({ netBalance }) => (
  <div className="net-balance-section">
    <h3>Net Balance</h3>
    <p style={{ color: netBalance >= 0 ? '#2D8A34' : '#e63946' }}>
      ${netBalance.toFixed(2)}
    </p>
  </div>
);

export default NetBalance;
