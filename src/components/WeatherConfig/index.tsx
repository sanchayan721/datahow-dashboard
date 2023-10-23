import React from 'react';
import { Box, BoxProps, Typography, styled } from '@mui/material';
import MovingAverageWindow from './MovingAverageWindow';
import ForecastDays from './ForecastDays';

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const Items = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  height: '100%',
  gap: theme.spacing(2),
}));

interface WeatherConfigProps extends BoxProps {
  children?: React.ReactNode;
};

const WeatherConfig: React.FC<WeatherConfigProps> = ({ ...props }) => {

  return (
    <Box {...props}>
      <Title variant='h4'>
        Weather Configuration
      </Title>
      <Items>
        <MovingAverageWindow />
        <ForecastDays />
      </Items>
    </Box>
  );
};

export default styled(WeatherConfig)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: '1.6rem',
  marginTop: theme.spacing(6),
  boxShadow: theme.shadows[2],
}));
