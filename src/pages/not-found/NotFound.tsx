import { NothingFound } from '../../components/layout/nothing-found/NothingFound';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <section
      aria-label='Error Section'
      className='flex justify-center items-center h-full w-full p-4'>
      <NothingFound />
    </section>
  );
};

// EXPORT NotFound
NotFound.displayName = 'DIRECTLY | NotFound';
export default NotFound;
