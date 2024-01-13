import React, { useCallback, useEffect, useState } from 'react';
import { AppState } from './redux/store';
import Header from './components/layout/header/Header';
import { ILoading } from './models/data.model';
import Loading from './components/features/loading/Loading';
import NotFound from './pages/not-found/NotFound';
import { Outlet } from 'react-router-dom';
import { setLoading } from './redux/slices/loadingSlice';
import styles from './App.module.css';
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
    pageLoading(false);
  }, [pageLoading]);

  // Loading logic
  const transitionLoader = pageData.isLoading
    ? styles.showLoading
    : styles.hideLoading;

  // Render the page
  const renderPage = (): JSX.Element => {
    return (
      <main aria-label='App Section'>
        {loader ? (
          <section
            className={transitionLoader}
            onTransitionEnd={() => setLoader(false)}>
            <Loading />
          </section>
        ) : (
          <>
            <Header />
            <Outlet />
          </>
        )}
      </main>
    );
  };
  // Error logic
  return pageData.isError ? <NotFound /> : renderPage();
};

// EXPORT App
App.displayName = 'DIRECTLY | App';
export default App;
