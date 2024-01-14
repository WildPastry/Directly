import Login from '../pages/auth/Login';
import { Navigate } from 'react-router-dom';

export default function PublicRoutes() {
  return [
    { path: '/login', element: <Login /> },
    { path: '*', element: <Navigate to='/login' replace /> }
  ];
}
