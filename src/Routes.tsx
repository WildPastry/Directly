import App from './App.tsx';
import Books from './pages/books/Books.tsx';
import Home from './pages/home/Home.tsx';
import NotFound from './pages/not-found/NotFound.tsx';
import { ReactElement } from 'react';
import Viewer from './pages/viewer/Viewer.tsx';

const routesConfig: {
  element: ReactElement;
  errorElement: ReactElement;
  children: {
    path: string;
    element: ReactElement;
  }[];
}[] = [
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/books',
        element: <Books />
      },
      {
        path: '/viewer',
        element: <Viewer />
      }
    ]
  }
];

export default routesConfig;
