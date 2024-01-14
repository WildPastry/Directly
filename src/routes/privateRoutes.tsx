/* eslint-disable react-refresh/only-export-components */
import Layout from '../pages/layout/Layout.tsx';
import NotFound from '../pages/error-page/ErrorPage.tsx';
import { lazy } from 'react';

const Home: React.LazyExoticComponent<React.FC<{}>> = lazy(
  () => import('../pages/home/Home.tsx')
);
const Books: React.LazyExoticComponent<React.FC<{}>> = lazy(
  () => import('../pages/books/Books.tsx')
);
const Viewer: React.LazyExoticComponent<React.FC<{}>> = lazy(
  () => import('../pages/viewer/Viewer.tsx')
);

export default function PrivateRoutes() {
  return {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/books', element: <Books /> },
      { path: '/viewer', element: <Viewer /> },
      { path: '*', element: <NotFound /> }
    ]
  };
}
