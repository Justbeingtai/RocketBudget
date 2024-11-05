// client/src/queries.js
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
