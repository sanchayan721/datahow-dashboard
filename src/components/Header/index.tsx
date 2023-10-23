import { Box, Link, alpha, styled } from '@mui/material';
import React from 'react';
import FullLogo from '../Brand/FullLogo';
import { HEADER_HEIGHT } from '../../theme/Consts';
import CurrentInfoPanel from './CurrentInfoPanel';


const NavContent = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.xl,

  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  height: '100%',
  width: 'auto',
  padding: theme.spacing(1.5, 0),
}));

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  currentTemperature?: string;
  currentPrecipitation?: string;
};

const Header: React.FC<HeaderProps> = ({
  currentTemperature,
  currentPrecipitation,
  ...props
}) => {
  return (
    <nav {...props}>
      <NavContent>
        <StyledLink href="/">
          <FullLogo />
        </StyledLink>
        <CurrentInfoPanel
          currentTemperature={currentTemperature}
          currentPrecipitation={currentPrecipitation}
        />
      </NavContent>
    </nav>
  )
};

export default styled(Header)(({ theme }) => ({
  width: '100%',
  height: HEADER_HEIGHT,
  position: 'sticky',

  top: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(0, 1),

  zIndex: 1000,
  boxShadow: theme.shadows[4],
  background: alpha(theme.palette.primary.main, 0.125),
  backdropFilter: 'blur(15px)',
}));