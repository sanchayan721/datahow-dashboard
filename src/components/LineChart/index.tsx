import { styled } from '@mui/material';
import { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import './errorPlugin';

interface LineChartProps extends React.ComponentProps<typeof Line> {
  data: ChartData;
  options?: ChartOptions;
};

const LineChart: React.FC<LineChartProps> = ({
  data,
  options: chartOptions,
  ...props
}) => {
  const options: ChartOptions = chartOptions || {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'day', // Display dates by day
          displayFormats: {
            day: 'MMM D', // Format for displaying dates
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'Date',
        },
      }],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Temperature (°C)',
          },
          ticks: {
            beginAtZero: true,
          },
        },
        {
          id: 'y-axis-precipitation',
          position: 'right',
          scaleLabel: {
            display: true,
            labelString: 'Precipitation (mm)',
          },
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Line
      data={data}
      options={options}
      {...props}
    />
  );
};

export default styled(LineChart)(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'relative',
}));
