import { gql } from '@apollo/client';

export const GET_INCOMES = gql`
  query GetIncomes {
    incomes {
      _id
      amount
      source
      date
    }
  }
`;

export const GET_EXPENSES = gql`
  query GetExpenses {
    expenses {
      _id
      amount
      category
      date
    }
  }
`;

// Mutation to add income
export const ADD_INCOME = gql`
  mutation AddIncome($amount: Float!, $source: String!, $date: String!) {
    addIncome(amount: $amount, source: $source, date: $date) {
      _id
      amount
      source
      date
    }
  }
`;

// Mutation to add expense
export const ADD_EXPENSE = gql`
  mutation AddExpense($amount: Float!, $category: String!, $date: String!) {
    addExpense(amount: $amount, category: $category, date: $date) {
      _id
      amount
      category
      date
    }
  }
`;
