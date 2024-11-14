// client/src/components/Forms/IncomeForm.jsx
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const IncomeForm = ({ setIncomeData }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleAddIncome = () => {
    if (category && amount) {
      const newIncome = {
        _id: `${category}-${amount}-${Date.now()}`,
        category,
        amount: parseFloat(amount),
        date,
      };

      setIncomeData(newIncome);
      setCategory('');
      setAmount('');
      setDate(new Date().toISOString().split('T')[0]);
    }
  };

  return (
    <div className="form income-form">
      <h3>Add Income</h3>
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
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
          />
        </Col>
        <Col>
          <button className="btn btn-primary" onClick={handleAddIncome}>
            Add Income
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default IncomeForm;
