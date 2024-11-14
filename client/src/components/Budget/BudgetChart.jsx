// client/src/components/Budget/BudgetChart.jsx
import React, { useRef } from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, CategoryScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, CategoryScale, PointElement, LineElement);

const BudgetChart = ({ incomeData, expenseData }) => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);

  const totalIncome = incomeData.reduce((acc, item) => acc + item.amount, 0);
  const totalExpense = expenseData.reduce((acc, item) => acc + item.amount, 0);

  const pieData = {
    labels: ['Total Income', 'Total Expense'],
    datasets: [
      {
        data: [totalIncome, totalExpense],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        hoverBackgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)'],
      },
    ],
  };

  const lineData = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Income',
        data: incomeData.map(item => item.amount),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Expenses',
        data: expenseData.map(item => item.amount),
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <div style={{ width: '45%', height: '400px' }}>
        <Pie ref={pieChartRef} data={pieData} options={options} />
      </div>
      <div style={{ width: '45%', height: '400px' }}>
        <Line ref={lineChartRef} data={lineData} options={options} />
      </div>
    </div>
  );
};

export default BudgetChart;
