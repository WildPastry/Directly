/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppState } from './redux/store';
import { ILoading } from './models/data.model';
import routesConfig from './routes/Routes';
import { setLoading } from './redux/slices/loadingSlice';
import { useAppDispatch } from './redux/hooks';
import { useSelector } from 'react-redux';

// App component
const App: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(true);
  const router = createBrowserRouter(routesConfig);

  // UseSelector for reading page loading state
  const pageData = useSelector((state: AppState): ILoading => {
    return state.loading;
  });

  // Callback / dispatch and effect for setting page loading state
  const pageLoading = useCallback((loading: boolean): void => {
    setTimeout(() => {
      dispatch(setLoading(loading));
      setLoader(false);
    }, 1000);
  }, []);

  useEffect((): void => {
    console.log(pageData, loader);
    pageLoading(false);
  }, [pageLoading]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

// EXPORT App
App.displayName = 'DIRECTLY | App';
export default App;
