import AuthGuard from './AuthGuard.tsx';
import NotFound from '../pages/error-page/ErrorPage.tsx';
import PrivateRoutes from './PrivateRoutes.tsx';
import PublicRoutes from './PublicRoutes.tsx';

const routesConfig: (
  | {
      path: string;
      element: JSX.Element;
    }
  | {
      element: JSX.Element;
      errorElement: JSX.Element;
      children: {
        path: string;
        element: JSX.Element;
      }[];
    }
)[] = [
  {
    path: '/',
    element: <AuthGuard />,
    errorElement: <NotFound />,
    children: PrivateRoutes()
  },
  PublicRoutes(),
  {
    path: '*',
    element: <NotFound />
  }
];

export default routesConfig;
