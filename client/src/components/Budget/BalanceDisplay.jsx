import React from 'react';

const BalanceDisplay = ({ totalIncome, totalExpense }) => {
  const netBalance = totalIncome - totalExpense;

  return (
    <div className="net-balance">
      <h3>Net Balance</h3>
      <p>${netBalance.toFixed(2)}</p>
    </div>
  );
};

export default BalanceDisplay;
