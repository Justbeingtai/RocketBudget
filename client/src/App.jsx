// client/src/App.jsx
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import BudgetChart from './components/BudgetChart';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import { GET_INCOMES, GET_EXPENSES } from './queries';

function App() {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  const { data: incomeDataResponse, error: incomeError } = useQuery(GET_INCOMES);
  const { data: expenseDataResponse, error: expenseError } = useQuery(GET_EXPENSES);

  useEffect(() => {
    if (incomeDataResponse) {
      setIncomeData(incomeDataResponse.incomes);
    }
    if (incomeError) console.error("Income Query Error:", incomeError);
  }, [incomeDataResponse, incomeError]);

  useEffect(() => {
    if (expenseDataResponse) {
      setExpenseData(expenseDataResponse.expenses);
    }
    if (expenseError) console.error("Expense Query Error:", expenseError);
  }, [expenseDataResponse, expenseError]);

  return (
    <div className="app-container">
      <header>
        <h1>RocketBudget</h1>
      </header>

      <main>
        <IncomeForm />
        <ExpenseForm />
        <BudgetChart incomeData={incomeData} expenseData={expenseData} />
      </main>

      <footer>
        <p>RocketBudget &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
