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
    type: Date,
    default: Date.now,
  },
});

const Expense = model('Expense', expenseSchema);

export default Expense;
