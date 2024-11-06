// server/server.js
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongooseConnection from './config/connection.js';
import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';
import dotenv from 'dotenv';
import Income from './models/Income.js';
import Expense from './models/Expense.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Function to clear income and expense data on server start
async function clearData() {
  try {
    await Income.deleteMany({});
    await Expense.deleteMany({});
    console.log("Cleared all income and expense data on server start.");
  } catch (error) {
    console.error("Error clearing data:", error);
  }
}

// Start Apollo server and clear data
await server.start();
server.applyMiddleware({ app });

mongooseConnection.once('open', async () => {
  await clearData(); // Clear data on server start
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
  });
});
