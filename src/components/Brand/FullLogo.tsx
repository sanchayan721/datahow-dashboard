import { styled } from '@mui/material';
import React from 'react';

interface FullLogoProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
};

const FullLogo: React.FC<FullLogoProps> = ({
  src,
  alt,
  ...props
}) => {
  return (
    <img
      src={src || "/images/brand/full_logo.png"}
      alt={alt || "logo"}
      {...props}
    />
  )
};

export default styled(FullLogo)(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'contain',
}));