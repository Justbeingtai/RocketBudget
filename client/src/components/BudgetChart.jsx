// client/src/components/BudgetChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BudgetChart = ({ incomeData, expenseData }) => {
  console.log("Income Data in Chart:", incomeData); // Log income data received in the chart
  console.log("Expense Data in Chart:", expenseData); // Log expense data received in the chart

  const data = {
    labels: incomeData.map((item) => item.date),
    datasets: [
      {
        label: 'Income',
        data: incomeData.map((item) => item.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Expenses',
        data: expenseData.map((item) => item.amount),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income vs Expenses',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BudgetChart;
