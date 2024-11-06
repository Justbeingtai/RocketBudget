// server/schemas/resolvers.js
import Income from '../models/Income.js';
import Expense from '../models/Expense.js';

const resolvers = {
  Query: {
    users: async () => [{ _id: "1", username: "sampleUser", email: "sample@example.com" }],

    // Fetch all income entries
    incomes: async () => {
      return await Income.find();
    },

    // Fetch all expense entries
    expenses: async () => {
      return await Expense.find();
    },
  },

  Mutation: {
    // Add a new income entry
    addIncome: async (_, { amount, source, date }) => {
      const income = new Income({ amount, source, date });
      return await income.save();
    },

    // Add a new expense entry
    addExpense: async (_, { amount, category, date }) => {
      const expense = new Expense({ amount, category, date });
      return await expense.save();
    },
  },
};

export default resolvers;
