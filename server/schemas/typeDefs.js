// server/schemas/typeDefs.js
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
  }

  type Income {
    _id: ID
    amount: Float!
    source: String
    date: String
  }

  type Expense {
    _id: ID
    amount: Float!
    category: String
    date: String
  }

  type Query {
    users: [User]
    incomes: [Income]
    expenses: [Expense]
  }

  type Mutation {
    addIncome(amount: Float!, source: String!, date: String): Income
    addExpense(amount: Float!, category: String!, date: String): Expense
  }
`;

export default typeDefs;
