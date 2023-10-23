import { Box, BoxProps, Slider, styled } from '@mui/material';
import React from 'react';
import { useGraphConfig } from '../../helpers/GraphConfigProvider';

interface MovingAverageWindowProps extends BoxProps {
  children?: React.ReactNode;
};

const MovingAverageWindow: React.FC<MovingAverageWindowProps> = ({ ...props }) => {

  const { movingAverageWindow, setMovingAverageWindow } = useGraphConfig();

  const valuetext = (value: number) => {
    setMovingAverageWindow(value);
    return value.toString();
  };

  return (
    <Box {...props}>
      <h4>Moving Average Window ({movingAverageWindow})</h4>
      <Slider
        aria-label="Window Size"
        defaultValue={movingAverageWindow}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        marks
        min={3}
        max={9}
        sx={{ width: '8rem' }}
      />
    </Box>
  )
}

export default styled(MovingAverageWindow)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));