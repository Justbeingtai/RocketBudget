import React from 'react';
import '../../styles/ItemList.css';

const IncomeList = ({ incomeData, handleRemoveIncome }) => (
  <div className="income-list">
    <h2 className="list-title">💰 Incomes</h2>
    <ul className="list-container">
      {incomeData.map(({ _id, category, amount, date }) => (
        <li key={_id} className="list-item">
          <div className="item-details">
            <span className="item-category">{category}</span>
            <span className="item-amount">${amount.toFixed(2)}</span>
            <span className="item-date">
              {new Date(date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
            </span> {/* Explicitly format date */}
          </div>
          <button className="remove-btn" onClick={() => handleRemoveIncome(_id)}>✕</button>
        </li>
      ))}
    </ul>
  </div>
);

export default IncomeList;
