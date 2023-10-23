import { styled } from '@mui/material';
import React from 'react';

const Precipitation: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      viewBox="0 0 800 800"
      {...props}
    >
      <path
        className='precipitation__outline'
        d="M700,100v50H625v25H575V150H375v25H325V150H100V100ZM200,300h50V250H200Zm0,250h50V500H200ZM450,300h50V250H450Zm0,250h50V500H450ZM325,425h50V375H325Zm0,275h50V650H325ZM575,425h50V375H575Zm0,275h50V650H575Z" />
    </svg>
  )
}

export default styled(Precipitation)(({ theme }) => ({
  height: '1.4rem',
  width: '1.4rem',
  marginRight: theme.spacing(0.5),
  '& .precipitation__outline': {
    fill: theme.palette.primary.contrastText,
  },
}));