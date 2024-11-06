// client/src/App.jsx
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import BudgetChart from './components/BudgetChart';
import { GET_INCOMES, GET_EXPENSES } from './queries';

function App() {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  // Apollo queries with error handling
  const { data: incomeDataResponse, loading: incomeLoading, error: incomeError } = useQuery(GET_INCOMES);
  const { data: expenseDataResponse, loading: expenseLoading, error: expenseError } = useQuery(GET_EXPENSES);

  useEffect(() => {
    if (incomeDataResponse) {
      setIncomeData(incomeDataResponse.incomes);
      console.log("Fetched Income Data:", incomeDataResponse.incomes);
    }
    if (incomeError) console.error("Income Query Error:", incomeError);
  }, [incomeDataResponse, incomeError]);

  useEffect(() => {
    if (expenseDataResponse) {
      setExpenseData(expenseDataResponse.expenses);
      console.log("Fetched Expense Data:", expenseDataResponse.expenses);
    }
    if (expenseError) console.error("Expense Query Error:", expenseError);
  }, [expenseDataResponse, expenseError]);

  if (incomeLoading || expenseLoading) return <p>Loading data...</p>;
  if (incomeError || expenseError) return <p>There was an error loading data.</p>;

  return (
    <div className="app-container">
      <header>
        <h1>RocketBudget</h1>
      </header>

      <main>
        {incomeData.length && expenseData.length ? (
          <BudgetChart incomeData={incomeData} expenseData={expenseData} />
        ) : (
          <p>No data available to display.</p>
        )}
      </main>

      <footer>
        <p>RocketBudget &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
