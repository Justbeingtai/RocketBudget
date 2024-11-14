// client/src/main.jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, useMutation } from '@apollo/client';
import client from './apolloClient';
import { ADD_INCOME, ADD_EXPENSE } from './queries';
import AppContent from './components/App/AppContent';
import AuthTabs from './components/Layout/AuthTabs'; // Import AuthTabs component
import './styles/App.css';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  const [addIncome] = useMutation(ADD_INCOME);
  const [addExpense] = useMutation(ADD_EXPENSE);

  // Calculate net balance
  const netBalance = incomeData.reduce((acc, income) => acc + income.amount, 0) - expenseData.reduce((acc, expense) => acc + expense.amount, 0);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, []);

  const handleAddIncome = async (newIncome) => {
    try {
      if (!newIncome.category || !newIncome.amount || isNaN(newIncome.amount)) {
        console.error("Invalid income data:", newIncome);
        return;
      }

      const { data } = await addIncome({
        variables: {
          category: newIncome.category,
          amount: newIncome.amount,
          date: newIncome.date,
        },
      });

      setIncomeData((prevData) => [...prevData, data.addIncome]);
      console.log('Income added successfully:', data.addIncome);
    } catch (error) {
      console.error('Error adding income:', error);
    }
  };

  const handleAddExpense = async (newExpense) => {
    try {
      if (!newExpense.category || !newExpense.amount || isNaN(newExpense.amount)) {
        console.error("Invalid expense data:", newExpense);
        return;
      }

      const { data } = await addExpense({
        variables: {
          category: newExpense.category,
          amount: newExpense.amount,
          date: newExpense.date,
        },
      });

      setExpenseData((prevData) => [...prevData, data.addExpense]);
      console.log('Expense added successfully:', data.addExpense);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <AppContent
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          incomeData={incomeData}
          setIncomeData={handleAddIncome}
          expenseData={expenseData}
          setExpenseData={handleAddExpense}
          netBalance={netBalance}
          handleRemoveIncome={(id) => setIncomeData(incomeData.filter((income) => income._id !== id))}
          handleRemoveExpense={(id) => setExpenseData(expenseData.filter((expense) => expense._id !== id))}
        />
      ) : (
        <AuthTabs setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MainApp />
    </ApolloProvider>
  </React.StrictMode>
);
