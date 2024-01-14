import App from './App.tsx';
import Books from './pages/books/Books.tsx';
import Home from './pages/home/Home.tsx';
import NotFound from './pages/not-found/NotFound.tsx';
import Viewer from './pages/viewer/Viewer.tsx';

const routesConfig: {
  element: JSX.Element;
  errorElement: JSX.Element;
  children: {
    path: string;
    element: JSX.Element;
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
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default routesConfig;
