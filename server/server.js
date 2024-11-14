// server/server.js
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import mongooseConnection from './config/connection.js';
import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import Income from './models/Income.js';
import Expense from './models/Expense.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// Use auth routes
app.use('/api/auth', authRoutes);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: false,
  introspection: true,
  playground: process.env.NODE_ENV !== 'production', // Ensure playground is enabled in development
});


async function clearData() {
  try {
    await Income.deleteMany({});
    await Expense.deleteMany({});
    console.log("Cleared all income and expense data on server start.");
  } catch (error) {
    console.error("Error clearing data:", error);
  }
}

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
    });
  }

  app.get('/', (req, res) => {
    res.send('Welcome to RocketBudget API! Go to /graphql to access the GraphQL API.');
  });

  mongooseConnection.once('open', async () => {
    await clearData();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
}

startServer();
