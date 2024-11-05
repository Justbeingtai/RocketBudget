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
`;

export default typeDefs;
