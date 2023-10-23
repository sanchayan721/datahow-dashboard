import React from 'react';
import { Box, BoxProps, Slider, styled } from '@mui/material';
import { useGraphConfig } from '../../helpers/GraphConfigProvider';

interface ForecastDaysProps extends BoxProps {
  children?: React.ReactNode;
};

const ForecastDays: React.FC<ForecastDaysProps> = ({ ...props }) => {

  const { forecastDays, setForecastDays } = useGraphConfig();
  const valuetext = (value: number) => {
    setForecastDays(value);
    return value.toString();
  };

  return (
    <Box {...props}>
      <h4>Forecast {forecastDays} for Day(s)</h4>
      <Slider
        aria-label="Window Size"
        defaultValue={forecastDays}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        marks
        min={1}
        max={16}
        sx={{ width: '8rem' }}
      />
    </Box>
  )
}

export default styled(ForecastDays)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));