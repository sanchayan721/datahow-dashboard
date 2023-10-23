import React from 'react';
import LineChart from '../LineChart';
import { Box, BoxProps, alpha, styled, useTheme } from '@mui/material';
import prepareTemparatureData, { WeatherArchive, WeatherPrediction } from '../../helpers/prepareTemparatureData';
import calculateMovingAverage from '../../helpers/calculateMovingAverage';
import preparePrecipitationData from '../../helpers/preparePrecipitationData';
import { useGraphConfig } from '../../helpers/GraphConfigProvider';

interface WeatherDisplayProps extends BoxProps {
  weatherPrediction: WeatherPrediction;
  weatherArchive: WeatherArchive;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  weatherPrediction,
  weatherArchive,
  ...props
}) => {

  const theme = useTheme();

  const { movingAverageWindow } = useGraphConfig();

  const {
    labels,
    historicalData,
    predictedData,
    completeSet
  } = prepareTemparatureData(weatherPrediction, weatherArchive);

  const {
    movingAverages,
    errorMargins
  } = calculateMovingAverage(completeSet, movingAverageWindow);

  const {
    historicalData: historicalPrecipitationData,
    predictedData: predictedPrecipitationData,
  } = preparePrecipitationData(weatherPrediction, weatherArchive);
  
  const dailyChartData = {
    labels: labels,
    datasets: [

      {
        label: 'Temperature (°C)',
        data: historicalData,
        borderColor: theme.palette.primary.main,
        backgroundColor: alpha(theme.palette.primary.main, 0.5),
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'Predicted Temperature (°C)',
        data: predictedData,
        borderDash: [10, 5],
        borderColor: theme.palette.warning.main,
        backgroundColor: alpha(theme.palette.warning.main, 0.5),
        borderWidth: 1,
        fill: false,
      },
      {
        label: `Temperature Moving Average (N=${movingAverageWindow}) (°C)`,
        data: movingAverages.map((value) => Number(value.toFixed(1))),
        borderColor: theme.palette.success.main,
        backgroundColor: alpha(theme.palette.success.main, 0.5),
        borderWidth: 1,
        fill: false,
        errorBars: errorMargins.map(value => ({ plus: value, minus: value }))
      },
      {
        label: 'Historic Precipitation (mm)',
        data: historicalPrecipitationData,
        type: 'bar',
        backgroundColor: alpha(theme.palette.primary.contrastText, 1),
        yAxisID: 'y-axis-precipitation',
      },
      {
        label: 'Predicted Precipitation (mm)',
        data: predictedPrecipitationData,
        type: 'bar',
        backgroundColor: alpha(theme.palette.primary.main, 1),
        yAxisID: 'y-axis-precipitation',
      },
    ],
  };

  return (
    <Box {...props}>
      <LineChart
        data={dailyChartData}
        height={500}
      />
    </Box>
  );
};

export default styled(WeatherDisplay)(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'relative',
  marginTop: theme.spacing(4),
}));
