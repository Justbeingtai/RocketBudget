// server/models/Income.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const incomeSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Income = model('Income', incomeSchema);

export default Income;
