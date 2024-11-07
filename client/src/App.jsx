// client/src/App.jsx
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import BudgetChart from './components/BudgetChart';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import { GET_INCOMES, GET_EXPENSES, REMOVE_INCOME, REMOVE_EXPENSE } from './queries';
import './App.css';


function App() {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  const { data: incomeDataResponse, refetch: refetchIncomes } = useQuery(GET_INCOMES);
  const { data: expenseDataResponse, refetch: refetchExpenses } = useQuery(GET_EXPENSES);

  const [removeIncome] = useMutation(REMOVE_INCOME, {
    onCompleted: refetchIncomes,
  });
  const [removeExpense] = useMutation(REMOVE_EXPENSE, {
    onCompleted: refetchExpenses,
  });

  useEffect(() => {
    if (incomeDataResponse) {
      setIncomeData(incomeDataResponse.incomes);
    }
  }, [incomeDataResponse]);

  useEffect(() => {
    if (expenseDataResponse) {
      setExpenseData(expenseDataResponse.expenses);
    }
  }, [expenseDataResponse]);

  const handleRemoveIncome = async (id) => {
    try {
      await removeIncome({ variables: { id } });
      setIncomeData((prevData) => prevData.filter((income) => income._id !== id));
    } catch (error) {
      console.error("Error removing income:", error);
    }
  };

  const handleRemoveExpense = async (id) => {
    try {
      await removeExpense({ variables: { id } });
      setExpenseData((prevData) => prevData.filter((expense) => expense._id !== id));
    } catch (error) {
      console.error("Error removing expense:", error);
    }
  };

  const totalIncome = incomeData.reduce((acc, income) => acc + income.amount, 0);
  const totalExpense = expenseData.reduce((acc, expense) => acc + expense.amount, 0);
  const netBalance = totalIncome - totalExpense;

  return (
    <div className="app-container">
      <header>
        <h1>RocketBudget</h1>
      </header>

      <main>
        <div className="form-section">
          <IncomeForm setIncomeData={setIncomeData} />
          <ExpenseForm setExpenseData={setExpenseData} />
        </div>

        <div className="list-section">
          <div className="income-list">
            <h2>Incomes</h2>
            <ul>
              {incomeData.map(({ _id, amount, category, date }) => (
                <li key={_id} className="list-item">
                  {category}: ${amount} <span className="date">({date})</span>
                  <button className="remove-btn" onClick={() => handleRemoveIncome(_id)}>X</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="expense-list">
            <h2>Expenses</h2>
            <ul>
              {expenseData.map(({ _id, amount, category, date }) => (
                <li key={_id} className="list-item">
                  {category}: ${amount} <span className="date">({date})</span>
                  <button className="remove-btn" onClick={() => handleRemoveExpense(_id)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="chart-container">
          <BudgetChart incomeData={incomeData} expenseData={expenseData} />
        </div>

        <div className="net-balance">
          <h3>Net Balance</h3>
          <p>${netBalance.toFixed(2)}</p>
        </div>
      </main>

      <footer>
        <p>RocketBudget &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
