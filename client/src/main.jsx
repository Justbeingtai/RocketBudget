// client/src/main.jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from "react-router-dom";
import { ApolloProvider, useMutation } from "@apollo/client";
import client from "./apolloClient";
import { ADD_INCOME, ADD_EXPENSE } from "./queries";
import AppContent from "./components/App/AppContent";
import AuthTabs from "./components/Layout/AuthTabs";
import AboutUs from "./components/About/AboutUs"; // Import About Us page
import "./styles/App.css";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MainApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  const [addIncome] = useMutation(ADD_INCOME);
  const [addExpense] = useMutation(ADD_EXPENSE);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
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
      console.log("Income added successfully:", data.addIncome);
    } catch (error) {
      console.error("Error adding income:", error);
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
      console.log("Expense added successfully:", data.addExpense);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <AppContent
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            ) : (
              <AuthTabs setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MainApp />
    </ApolloProvider>
  </React.StrictMode>
);
