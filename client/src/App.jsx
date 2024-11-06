import React, { useState } from 'react';
import BudgetChart from './components/BudgetChart';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';

function App() {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  const addIncome = (income) => setIncomeData([...incomeData, income]);
  const removeIncome = (index) => setIncomeData(incomeData.filter((_, i) => i !== index));
  
  const addExpense = (expense) => setExpenseData([...expenseData, expense]);
  const removeExpense = (index) => setExpenseData(expenseData.filter((_, i) => i !== index));

  const totalIncome = incomeData.reduce((sum, inc) => sum + Number(inc.amount), 0);
  const totalExpense = expenseData.reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <div className="app-container">
      <header>
        <h1>RocketBudget</h1>
      </header>

      <main>
        <IncomeList incomeData={incomeData} addIncome={addIncome} removeIncome={removeIncome} />
        <ExpenseList expenseData={expenseData} addExpense={addExpense} removeExpense={removeExpense} />
        <BudgetChart totalIncome={totalIncome} totalExpense={totalExpense} />
      </main>

      <footer>
        <p>RocketBudget &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
