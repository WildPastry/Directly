import Header from '../../components/layout/header/Header';
import Loading from '../../components/features/loading/Loading';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Layout Section' className='h-full w-full'>
      <Header />
      <Suspense fallback={<Loading />}>
        <div className='p-4 h-full w-full'>
          <Outlet />
        </div>
      </Suspense>
    </section>
  );
};

Layout.displayName = 'DIRECTLY | Layout';
export default Layout;
