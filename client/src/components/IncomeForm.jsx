// client/src/components/IncomeForm.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_INCOME, GET_INCOMES } from '../queries';

const IncomeForm = ({ setIncomeData }) => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const [addIncome] = useMutation(ADD_INCOME, {
    refetchQueries: [{ query: GET_INCOMES }],
    onCompleted: (data) => {
      setIncomeData((prevData) => [...prevData, data.addIncome]);
      setSource('');
      setAmount('');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addIncome({
        variables: {
          source,
          amount: parseFloat(amount),
          date: new Date().toISOString(),
        },
      });
    } catch (err) {
      console.error("Mutation error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
