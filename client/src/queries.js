// client/src/queries.js
import { gql } from '@apollo/client';

export const ADD_INCOME = gql`
  mutation AddIncome($source: String!, $amount: Float!, $date: String!) {
    addIncome(source: $source, amount: $amount, date: $date) {
      _id
      source
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

export const GET_INCOMES = gql`
  query GetIncomes {
    incomes {
      _id
      source
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
