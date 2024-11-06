// client/src/components/ExpenseForm.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EXPENSE, GET_EXPENSES } from '../queries';

const ExpenseForm = ({ setExpenseData }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const [addExpense] = useMutation(ADD_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES }],
    onCompleted: (data) => {
      setExpenseData((prevData) => [...prevData, data.addExpense]);
      setCategory('');
      setAmount('');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense({
      variables: {
        category,
        amount: parseFloat(amount),
        date: new Date().toISOString(),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Expense Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-warning">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
