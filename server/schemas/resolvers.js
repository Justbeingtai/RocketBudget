// server/schemas/resolvers.js
import Income from '../models/Income.js';
import Expense from '../models/Expense.js';

const resolvers = {
  Query: {
    users: async () => [{ _id: "1", username: "sampleUser", email: "sample@example.com" }],
    incomes: async () => await Income.find(),
    expenses: async () => await Expense.find(),
  },

  Mutation: {
    addIncome: async (_, { amount, category, date }) => {
      const formattedDate = date ? new Date(date).toISOString() : new Date().toISOString();
      const income = new Income({ amount, category, date: formattedDate });
      await income.save();
      return income;
    },
    addExpense: async (_, { amount, category, date }) => {
      const formattedDate = date ? new Date(date).toISOString() : new Date().toISOString();
      const expense = new Expense({ amount, category, date: formattedDate });
      await expense.save();
      return expense;
    },
    removeIncome: async (_, { id }) => {
      const income = await Income.findByIdAndDelete(id);
      return income;
    },
    removeExpense: async (_, { id }) => {
      const expense = await Expense.findByIdAndDelete(id);
      return expense;
    },
  },
};

export default resolvers;
