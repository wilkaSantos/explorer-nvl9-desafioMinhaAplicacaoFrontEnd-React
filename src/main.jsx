import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import themeStyles from './styles/themeStyles';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeStyles}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
