// client/src/queries.js
import { gql } from '@apollo/client';

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

export const REMOVE_INCOME = gql`
  mutation RemoveIncome($id: ID!) {
    removeIncome(id: $id) {
      _id
    }
  }
`;

export const REMOVE_EXPENSE = gql`
  mutation RemoveExpense($id: ID!) {
    removeExpense(id: $id) {
      _id
    }
  }
`;

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
