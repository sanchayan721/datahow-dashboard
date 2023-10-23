import React from 'react';
import { Box, BoxProps, Divider, styled } from '@mui/material';
import useGeolocation from './hooks/useGeolocation';

interface WeatherDisplayProps extends BoxProps {
  children?: React.ReactNode;
};

const App: React.FC<WeatherDisplayProps> = (props) => {
  const location = useGeolocation();
  return(
    <Box {...props}>
      <Box>
        <h1>Weather Display</h1>
      </Box>
      <Divider />
      <Box>
        <h2>Location</h2>
        <p>{JSON.stringify(location)}</p>
      </Box>
    </Box>
  )
};

export default styled(App)(({ theme }) => ({
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.default,
}));
