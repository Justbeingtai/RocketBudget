// client/src/components/IncomeForm.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_INCOME, GET_INCOMES } from '../queries';

const IncomeForm = () => {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');
  const [addIncome] = useMutation(ADD_INCOME, {
    refetchQueries: [{ query: GET_INCOMES }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addIncome({ variables: { amount: parseFloat(amount), source, date } });
    setAmount('');
    setSource('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
