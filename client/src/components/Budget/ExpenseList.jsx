import React from 'react';
import '../../styles/ItemList.css';

const ExpenseList = ({ expenseData, handleRemoveExpense }) => (
  <div className="expense-list">
    <h2 className="list-title">💸 Expenses</h2>
    <ul className="list-container">
      {expenseData.map(({ _id, category, amount, date }) => (
        <li key={_id} className="list-item">
          <div className="item-details">
            <span className="item-category">{category}</span>
            <span className="item-amount">-${amount.toFixed(2)}</span>
            <span className="item-date">
              {new Date(date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
            </span> {/* Explicitly format date */}
          </div>
          <button className="remove-btn" onClick={() => handleRemoveExpense(_id)}>✕</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ExpenseList;
