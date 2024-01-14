/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppState } from './redux/store';
import { IAuth } from './models/auth.model';
import { ILoading } from './models/data.model';
import PrivateRoutes from './routes/privateRoutes';
import PublicRoutes from './routes/publicRoutes';
import { setLoading } from './redux/slices/loadingSlice';
import { useAppDispatch } from './redux/hooks';
import { useSelector } from 'react-redux';

// App component
const App: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [loader, setLoader] = useState(true);

  // UseSelector for reading page loading state
  const pageData = useSelector((state: AppState): ILoading => {
    return state.loading;
  });

  const authState = useSelector((state: AppState): IAuth => {
    return state.auth;
  });

  // Callback / dispatch and effect for setting page loading state
  const pageLoading = useCallback(
    (loading: boolean): void => {
      setTimeout(() => {
        dispatch(setLoading(loading));
        setLoader(false);
      }, 1000);
    },
    [dispatch]
  );

  useEffect((): void => {
    console.log(pageData, loader, authState);
    pageLoading(false);
  }, [pageLoading]);

  // Auth state for public or private routes
  function checkAuth() {
    console.log(authState);
    return authState;
  }

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    checkAuth() ? PrivateRoutes() : {},
    ...PublicRoutes()
  ]);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

// EXPORT App
App.displayName = 'DIRECTLY | App';
export default App;
