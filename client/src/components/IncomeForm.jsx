// client/src/components/IncomeForm.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_INCOME, GET_INCOMES } from '../queries';

const IncomeForm = ({ setIncomeData }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const [addIncome] = useMutation(ADD_INCOME, {
    refetchQueries: [{ query: GET_INCOMES }],
    onCompleted: (data) => {
      setIncomeData((prevData) => [...prevData, data.addIncome]);
      setCategory('');
      setAmount('');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addIncome({
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
          placeholder="Income Category"
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
        <button type="submit" className="btn btn-primary">
          Add Income
        </button>
      </div>
    </form>
  );
};

export default IncomeForm;
