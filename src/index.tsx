import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import App from './App';
import { GraphConfigProvider } from './helpers/GraphConfigProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GraphConfigProvider>
        <App />
      </GraphConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);
