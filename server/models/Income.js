// server/models/Income.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const incomeSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {  // Updated field name to 'category'
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: () => new Date().toLocaleDateString("en-US"),
  },
});

const Income = model('Income', incomeSchema);

export default Income;
