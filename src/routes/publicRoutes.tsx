import Login from '../pages/auth/Login';

export default function PublicRoutes(): {
  path: string;
  element: JSX.Element;
} {
  return { path: '/login', element: <Login /> };
}
