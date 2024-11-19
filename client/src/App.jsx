import React from 'react';
import AppLogic from './components/App/AppLogic';
import AppContent from './components/App/AppContent';
import './styles/App.css';

function App() {
  const {
    isAuthenticated,
    setIsAuthenticated,
    incomeData,
    expenseData,
    netBalance,
    handleRemoveIncome,
    handleRemoveExpense,
  } = AppLogic();

  return (
    <AppContent
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
      incomeData={incomeData}
      expenseData={expenseData}
      netBalance={netBalance}
      handleRemoveIncome={handleRemoveIncome}
      handleRemoveExpense={handleRemoveExpense}
    />
  );
}

export default App;
