// Style imports
import './index.css';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
// Functional imports
import App from './App.tsx';
import AppTheme from './constants/AppTheme.tsx';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <MantineProvider theme={AppTheme} defaultColorScheme='dark'>
        <App />
      </MantineProvider>
    </React.StrictMode>
  </Provider>
);
