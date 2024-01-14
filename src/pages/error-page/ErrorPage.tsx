import NotFound from '../../components/layout/not-found/NotFound';

const ErrorPage: React.FC = (): JSX.Element => {
  return (
    <section
      aria-label='Error Section'
      className='flex justify-center items-center h-full w-full p-4'>
      <NotFound />
    </section>
  );
};

// EXPORT ErrorPage
ErrorPage.displayName = 'DIRECTLY | ErrorPage';
export default ErrorPage;
