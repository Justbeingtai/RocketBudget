// client/src/components/App/AppLogic.js
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_INCOMES, GET_EXPENSES, REMOVE_INCOME, REMOVE_EXPENSE } from '../../queries';

function AppLogic() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    if (incomeDataResponse) setIncomeData(incomeDataResponse.incomes);
  }, [incomeDataResponse]);

  useEffect(() => {
    if (expenseDataResponse) setExpenseData(expenseDataResponse.expenses);
  }, [expenseDataResponse]);

  const handleRemoveIncome = async (id) => {
    await removeIncome({ variables: { id } });
    setIncomeData((prevData) => prevData.filter((income) => income._id !== id));
  };

  const handleRemoveExpense = async (id) => {
    await removeExpense({ variables: { id } });
    setExpenseData((prevData) => prevData.filter((expense) => expense._id !== id));
  };

  const totalIncome = incomeData.reduce((acc, income) => acc + income.amount, 0);
  const totalExpense = expenseData.reduce((acc, expense) => acc + expense.amount, 0);
  const netBalance = totalIncome - totalExpense;

  return {
    isAuthenticated,
    setIsAuthenticated,
    incomeData,
    expenseData,
    netBalance,
    handleRemoveIncome,
    handleRemoveExpense,
  };
}

export default AppLogic;
