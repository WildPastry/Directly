import { lazy } from 'react';

export default function PrivateRoutes(): {
  path: string;
  element: JSX.Element;
}[] {
  const Home: React.LazyExoticComponent<React.FC<{}>> = lazy(
    () => import('../pages/home/Home.tsx')
  );
  const Books: React.LazyExoticComponent<React.FC<{}>> = lazy(
    () => import('../pages/books/Books.tsx')
  );
  const Viewer: React.LazyExoticComponent<React.FC<{}>> = lazy(
    () => import('../pages/viewer/Viewer.tsx')
  );

  return [
    { path: '/home', element: <Home /> },
    { path: '/books', element: <Books /> },
    { path: '/viewer', element: <Viewer /> }
  ];
}
