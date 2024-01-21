import { Navigate, useLocation } from 'react-router-dom';
import { AppState } from '../redux/store.ts';
import { IAuth } from '../models/auth.model.ts';
import Layout from '../pages/layout/Layout.tsx';
import Loading from '../components/features/loading/Loading.tsx';
import { useSelector } from 'react-redux';

const AuthGuard: () => JSX.Element = () => {
  const location = useLocation();
  const authState = useSelector((state: AppState): IAuth => {
    return state.auth;
  });

  // Auth state for public or private routes
  const checkAuth = (): boolean => {
    return authState.isAuthenticated;
  };

  if (checkAuth() === undefined) {
    return <Loading />;
  }

  return checkAuth() ? (
    <Layout />
  ) : (
    <Navigate to='/login' replace state={{ from: location }} />
  );
};

export default AuthGuard;
