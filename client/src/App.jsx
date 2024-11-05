// client/src/App.jsx
import React from 'react';
import { useQuery } from '@apollo/client';
import BudgetChart from './components/BudgetChart';
import { GET_INCOMES, GET_EXPENSES } from './queries';

function App() {
  // Fetch income and expense data from the server
  const { data: incomeDataResponse } = useQuery(GET_INCOMES);
  const { data: expenseDataResponse } = useQuery(GET_EXPENSES);

  // Extract the incomes and expenses data or use an empty array if not loaded yet
  const incomeData = incomeDataResponse?.incomes || [];
  const expenseData = expenseDataResponse?.expenses || [];

  return (
    <div className="app-container">
      <header>
        <h1>RocketBudget</h1>
        <p>Manage your finances, track your budget, and stay in control.</p>
      </header>

      <main>
        {/* Render the chart with real income and expense data */}
        <BudgetChart incomeData={incomeData} expenseData={expenseData} />
      </main>

      <footer>
        <p>RocketBudget &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
