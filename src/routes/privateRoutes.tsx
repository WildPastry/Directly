import { lazy } from 'react';

export default function PrivateRoutes(): {
  path: string;
  element: JSX.Element;
}[] {
  const Home: React.LazyExoticComponent<React.FC<{}>> = lazy(
    () => import('../pages/home/Home.tsx')
  );
  const Upload: React.LazyExoticComponent<React.FC<{}>> = lazy(
    () => import('../pages/upload/Upload.tsx')
  );
  const Sorting: React.LazyExoticComponent<React.FC<{}>> = lazy(
    () => import('../pages/sorting/Sorting.tsx')
  );
  const Library: React.LazyExoticComponent<React.FC<{}>> = lazy(
    () => import('../pages/library/Library.tsx')
  );

  return [
    { path: '/home', element: <Home /> },
    { path: '/upload', element: <Upload /> },
    { path: '/sorting', element: <Sorting /> },
    { path: '/library', element: <Library /> }
  ];
}
