// client/src/App.jsx
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import BudgetChart from './components/BudgetChart';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import { GET_INCOMES, GET_EXPENSES } from './queries';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  const { data: incomeDataResponse, error: incomeError } = useQuery(GET_INCOMES);
  const { data: expenseDataResponse, error: expenseError } = useQuery(GET_EXPENSES);

  useEffect(() => {
    if (incomeDataResponse) setIncomeData(incomeDataResponse.incomes);
    if (incomeError) console.error("Income Query Error:", incomeError);
  }, [incomeDataResponse, incomeError]);

  useEffect(() => {
    if (expenseDataResponse) setExpenseData(expenseDataResponse.expenses);
    if (expenseError) console.error("Expense Query Error:", expenseError);
  }, [expenseDataResponse, expenseError]);

  return (
    <div className="container mt-4">
      <header className="text-center mb-4">
        <h1 className="display-4">RocketBudget</h1>
      </header>

      <main>
        <div className="row">
          <div className="col-md-6">
            <IncomeForm setIncomeData={setIncomeData} />
          </div>
          <div className="col-md-6">
            <ExpenseForm setExpenseData={setExpenseData} />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <BudgetChart incomeData={incomeData} expenseData={expenseData} />
          </div>
        </div>
      </main>

      <footer className="text-center mt-4">
        <p>RocketBudget &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
