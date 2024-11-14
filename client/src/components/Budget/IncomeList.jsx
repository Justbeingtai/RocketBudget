// client/src/components/Budget/IncomeList.jsx
import React from 'react';

const IncomeList = ({ incomeData, handleRemoveIncome }) => (
  <div className="income-list">
    <h2>Incomes</h2>
    <ul>
      {incomeData.map(({ _id, category, amount, date }) => (
        <li key={_id} className="list-item">
          <div className="item-details">
            <span className="item-category">{category}</span>
            <span className="item-amount">${amount.toFixed(2)}</span>
            <span className="item-date">{new Date(date).toLocaleDateString()}</span> {/* Display formatted date */}
          </div>
          <button className="remove-btn" onClick={() => handleRemoveIncome(_id)}>✕</button>
        </li>
      ))}
    </ul>
  </div>
);

export default IncomeList;
