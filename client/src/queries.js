import { gql } from '@apollo/client';

// Mutation to add income
export const ADD_INCOME = gql`
  mutation AddIncome($category: String!, $amount: Float!, $date: String!) {
    addIncome(category: $category, amount: $amount, date: $date) {
      _id
      category
      amount
      date
    }
  }
`;

// Mutation to add expense
export const ADD_EXPENSE = gql`
  mutation AddExpense($category: String!, $amount: Float!, $date: String!) {
    addExpense(category: $category, amount: $amount, date: $date) {
      _id
      category
      amount
      date
    }
  }
`;

// Mutation to remove income
export const REMOVE_INCOME = gql`
  mutation RemoveIncome($id: ID!) {
    removeIncome(id: $id) {
      _id
    }
  }
`;

// Mutation to remove expense
export const REMOVE_EXPENSE = gql`
  mutation RemoveExpense($id: ID!) {
    removeExpense(id: $id) {
      _id
    }
  }
`;

// Query to get incomes
export const GET_INCOMES = gql`
  query GetIncomes {
    incomes {
      _id
      category
      amount
      date
    }
  }
`;

// Query to get expenses
export const GET_EXPENSES = gql`
  query GetExpenses {
    expenses {
      _id
      category
      amount
      date
    }
  }
`;
