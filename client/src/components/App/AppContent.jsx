import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation } from "@apollo/client";
import { GET_INCOMES, GET_EXPENSES, ADD_INCOME, ADD_EXPENSE, REMOVE_INCOME, REMOVE_EXPENSE } from "../../queries";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import BudgetChart from "../Budget/BudgetChart";
import IncomeForm from "../Forms/IncomeForm";
import ExpenseForm from "../Forms/ExpenseForm";
import IncomeList from "../Budget/IncomeList";
import ExpenseList from "../Budget/ExpenseList";
import NetBalance from "../Budget/NetBalance";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/AppContent.css";

const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
  const { data: incomeData, loading: incomeLoading, error: incomeError, refetch: refetchIncomes } = useQuery(GET_INCOMES);
  const { data: expenseData, loading: expenseLoading, error: expenseError, refetch: refetchExpenses } = useQuery(GET_EXPENSES);

  const [addIncome] = useMutation(ADD_INCOME, {
    onCompleted: () => refetchIncomes(),
  });
  const [addExpense] = useMutation(ADD_EXPENSE, {
    onCompleted: () => refetchExpenses(),
  });
  const [removeIncome] = useMutation(REMOVE_INCOME, {
    onCompleted: () => refetchIncomes(),
  });
  const [removeExpense] = useMutation(REMOVE_EXPENSE, {
    onCompleted: () => refetchExpenses(),
  });

  // Calculate net balance
  const netBalance =
    (incomeData?.incomes || []).reduce((acc, income) => acc + income.amount, 0) -
    (expenseData?.expenses || []).reduce((acc, expense) => acc + expense.amount, 0);

  const handleAddIncome = (newIncome) => {
    const formattedDate = newIncome.date ? new Date(newIncome.date).toISOString() : new Date().toISOString();
    addIncome({
      variables: {
        amount: newIncome.amount,
        category: newIncome.category,
        date: formattedDate,
      },
    });
  };

  const handleAddExpense = (newExpense) => {
    const formattedDate = newExpense.date ? new Date(newExpense.date).toISOString() : new Date().toISOString();
    addExpense({
      variables: {
        amount: newExpense.amount,
        category: newExpense.category,
        date: formattedDate,
      },
    });
  };

  const handleRemoveIncome = (id) => {
    removeIncome({ variables: { id } });
  };

  const handleRemoveExpense = (id) => {
    removeExpense({ variables: { id } });
  };

  useEffect(() => {
    if (incomeError) console.error("Error fetching income data:", incomeError.message);
    if (expenseError) console.error("Error fetching expense data:", expenseError.message);
  }, [incomeError, expenseError]);

  if (incomeLoading || expenseLoading) return <p>Loading...</p>;

  return (
    <div className="app-background">
      <Container className="content-container">
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <motion.div
          className="main-content"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {isAuthenticated ? (
            <>
              <header className="app-header">
                <h1>RocketBudget</h1>
                <p>Your Personal Finance and Budget Tracker</p>
              </header>
              <Row className="form-section mb-4">
                <Col md={6}>
                  <IncomeForm setIncomeData={handleAddIncome} />
                </Col>
                <Col md={6}>
                  <ExpenseForm setExpenseData={handleAddExpense} />
                </Col>
              </Row>
              <Row className="list-section mb-4">
                <Col md={6}>
                  <IncomeList incomeData={incomeData?.incomes || []} handleRemoveIncome={handleRemoveIncome} />
                </Col>
                <Col md={6}>
                  <ExpenseList expenseData={expenseData?.expenses || []} handleRemoveExpense={handleRemoveExpense} />
                </Col>
              </Row>
              <Row className="chart-section mb-4">
                <Col>
                  <BudgetChart incomeData={incomeData?.incomes || []} expenseData={expenseData?.expenses || []} />
                </Col>
              </Row>
              <Row className="net-balance-section">
                <Col md={{ span: 4, offset: 4 }}>
                  <NetBalance netBalance={netBalance} />
                </Col>
              </Row>
            </>
          ) : (
            <div className="auth-section">
              <Login setIsAuthenticated={setIsAuthenticated} />
              <Signup />
            </div>
          )}
        </motion.div>
        <Footer />
      </Container>
    </div>
  );
};

export default AppContent;
