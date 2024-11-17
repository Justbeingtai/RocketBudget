import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ExpenseForm = ({ setExpenseData }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(
    new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })
  );

  const handleAddExpense = () => {
    if (category && amount && date) {
      const newExpense = {
        _id: `${category}-${amount}-${Date.now()}`,
        category,
        amount: parseFloat(amount),
        date,
      };

      setExpenseData(newExpense);
      setCategory('');
      setAmount('');
      setDate(
        new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })
      );
    }
  };

  return (
    <div className="form expense-form">
      <h3>Add Expense</h3>
      <Row className="align-items-center">
        <Col>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
          />
        </Col>
        <Col>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
          />
        </Col>
        <Col>
          <input
            type="text"
            placeholder="MM/DD"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
          />
        </Col>
        <Col>
          <button className="btn btn-primary" onClick={handleAddExpense}>
            Add Expense
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ExpenseForm;
