// Style imports
import './index.css';
import '@mantine/core/styles.css';
// Functional imports
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppTheme from './constants/AppTheme.tsx';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import routesConfig from './Routes.tsx';
import store from './redux/store';

// Routing
const router = createBrowserRouter(routesConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <MantineProvider theme={AppTheme} defaultColorScheme='dark'>
        <RouterProvider router={router} />
      </MantineProvider>
    </React.StrictMode>
  </Provider>
);
