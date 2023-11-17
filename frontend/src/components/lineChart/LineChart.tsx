import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';
import { Container } from 'react-bootstrap';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const LineChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [{
      label: 'Sales of the Week',
      data: [6, 3, 9],
      backgroundColor: 'aqua',
      borderColor: 'black',
      pointBorderColor: 'aqua',
      fill: true, // Change 'file' to 'fill'
      tension: 0.4
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        min: 3,
        max: 6
      }
    }
  };

  return (
    <Container>

      <Line
        data={data}
        options={options}
      />
    </Container>
  );
};

export default LineChart;
