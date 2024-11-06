// client/src/components/IncomeList.jsx
import React, { useState } from 'react';

const IncomeList = ({ incomeData, addIncome, removeIncome }) => {
  const [income, setIncome] = useState({ amount: '', source: '' });

  const handleAddIncome = () => {
    if (income.amount && income.source) {
      addIncome(income);
      setIncome({ amount: '', source: '' });
    }
  };

  return (
    <div>
      <h3>Income</h3>
      <ul>
        {incomeData.map((inc, index) => (
          <li key={index}>
            {inc.source}: ${inc.amount}{' '}
            <button onClick={() => removeIncome(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Source"
        value={income.source}
        onChange={(e) => setIncome({ ...income, source: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={income.amount}
        onChange={(e) => setIncome({ ...income, amount: e.target.value })}
      />
      <button onClick={handleAddIncome}>Add Income</button>
    </div>
  );
};

export default IncomeList;
