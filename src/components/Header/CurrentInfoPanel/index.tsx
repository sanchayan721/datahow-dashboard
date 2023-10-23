import React from 'react';
import { Box, BoxProps, Divider, Typography, alpha, styled } from '@mui/material';
import Thermometer from '../../../icons/Thermometer';
import Precipitation from '../../../icons/Precipitation';

const Title = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.primary.contrastText, 0.75),
  marginRight: theme.spacing(0.5),
}));

const StyledItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.contrastText, 0.5),
  margin: theme.spacing(0, 1.5),
}));

interface CurrentInfoPanelProps extends BoxProps {
  currentTemperature?: string;
  currentPrecipitation?: string;
};

const CurrentInfoPanel: React.FC<CurrentInfoPanelProps> = ({
  currentTemperature,
  currentPrecipitation,
  ...props
}) => {
  return (
    <Box {...props}>
      <Title variant='h6' sx={{ mr: '0.25rem' }}>Now</Title>
      <StyledItem>
        <Thermometer />
        <Typography variant='body2'>{currentTemperature || 'NA'}</Typography>
      </StyledItem>
      <StyledDivider orientation="vertical" flexItem />
      <StyledItem>
        <Precipitation />
        <Typography variant='body2'>{currentPrecipitation || 'NA'}</Typography>
      </StyledItem>
    </Box>
  )
}

export default styled(CurrentInfoPanel)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  color: 'white',
  borderRadius: '2rem',
  backgroundColor: alpha(theme.palette.primary.main, 1),

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 100%)',
    backgroundColor: alpha(theme.palette.primary.main, 0.75),
    backdropFilter: 'blur(5px)',
    boxShadow: theme.shadows[1],
  }
}));