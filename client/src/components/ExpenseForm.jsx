// client/src/components/ExpenseForm.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EXPENSE, GET_EXPENSES } from '../queries';

const ExpenseForm = ({ setExpenseData }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  
  const [addExpense, { error }] = useMutation(ADD_EXPENSE, {
    refetchQueries: [{ query: GET_EXPENSES }],
    onCompleted: (data) => {
      setExpenseData((prevData) => [...prevData, data.addExpense]);
      setCategory('');
      setAmount('');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addExpense({
        variables: {
          category,
          amount: parseFloat(amount),
          date: new Date().toISOString(),
        },
      });
    } catch (err) {
      console.error("Expense mutation error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
