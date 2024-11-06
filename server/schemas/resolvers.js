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
    addIncome: async (_, { amount, category, date }) => {  // Updated to 'category'
      const formattedDate = date ? new Date(date).toISOString() : new Date().toISOString();
      const income = new Income({
        amount,
        category,  // Updated to 'category'
        date: formattedDate,
      });
      return await income.save();
    },
    addExpense: async (_, { amount, category, date }) => {
      const formattedDate = date ? new Date(date).toISOString() : new Date().toISOString();
      const expense = new Expense({
        amount,
        category,
        date: formattedDate,
      });
      return await expense.save();
    },
    removeIncome: async (_, { id }) => {
      return await Income.findByIdAndDelete(id);
    },
    removeExpense: async (_, { id }) => {
      return await Expense.findByIdAndDelete(id);
    },
  },
};

export default resolvers;
