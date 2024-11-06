// server/models/Expense.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const expenseSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String, // Ensure date is stored as a string
    default: () => new Date().toLocaleDateString("en-US"), // Default to today's date in MM/DD/YYYY format
  },
});

const Expense = model('Expense', expenseSchema);

export default Expense;
