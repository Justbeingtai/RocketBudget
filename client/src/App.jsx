// client/src/App.jsx
import React from 'react';
import BudgetChart from './components/BudgetChart';

function App() {
  // Sample data to ensure chart renders
  const incomeData = [
    { date: '2024-01-01', amount: 500 },
    { date: '2024-01-15', amount: 700 },
  ];

  const expenseData = [
    { date: '2024-01-05', amount: 200 },
    { date: '2024-01-20', amount: 300 },
  ];

  return (
    <div className="app-container">
      <header>
        <h1>RocketBudget</h1>
        <p>Manage your finances, track your budget, and stay in control.</p>
      </header>

      <main>
        {/* Render the chart with sample data */}
        <BudgetChart incomeData={incomeData} expenseData={expenseData} />
      </main>

      <footer>
        <p>RocketBudget &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
