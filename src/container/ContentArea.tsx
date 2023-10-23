import React from 'react';
import { Box, BoxProps, styled } from '@mui/material'

interface ContentAreaProps extends BoxProps {
  children?: React.ReactNode;
};

const ContentArea: React.FC<ContentAreaProps> = ({
  children,
  ...props
}) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

export default styled(ContentArea)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.xl,
  height: '100%',
  width: '100%',
  margin: '0 auto',
  padding: theme.spacing(0, 1),

  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(6),
  },
}))