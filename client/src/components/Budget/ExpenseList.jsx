// client/src/components/Budget/ExpenseList.jsx
import React from 'react';

const ExpenseList = ({ expenseData, handleRemoveExpense }) => (
  <div className="expense-list">
    <h2>Expenses</h2>
    <ul>
      {expenseData.map(({ _id, category, amount, date }) => (
        <li key={_id} className="list-item">
          <div className="item-details">
            <span className="item-category">{category}</span>
            <span className="item-amount">-${amount.toFixed(2)}</span>
            <span className="item-date">{new Date(date).toLocaleDateString()}</span> {/* Display formatted date */}
          </div>
          <button className="remove-btn" onClick={() => handleRemoveExpense(_id)}>✕</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ExpenseList;
