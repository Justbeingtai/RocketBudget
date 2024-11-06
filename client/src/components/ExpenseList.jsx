// client/src/components/ExpenseList.jsx
import React, { useState } from 'react';

const ExpenseList = ({ expenseData, addExpense, removeExpense }) => {
  const [expense, setExpense] = useState({ amount: '', description: '' });

  const handleAddExpense = () => {
    if (expense.amount && expense.description) {
      addExpense(expense);
      setExpense({ amount: '', description: '' });
    }
  };

  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {expenseData.map((exp, index) => (
          <li key={index}>
            {exp.description}: ${exp.amount}{' '}
            <button onClick={() => removeExpense(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Description"
        value={expense.description}
        onChange={(e) => setExpense({ ...expense, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default ExpenseList;
