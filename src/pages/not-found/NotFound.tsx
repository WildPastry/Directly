import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Error Section'>
      <h1 className='text-6xl'>404</h1>
      <p>The page you have requested has not been found.</p>
      <Link to={`/`}>
        <Button size='xs' variant='filled'>
          Back
        </Button>
      </Link>
    </section>
  );
};

// EXPORT NotFound
NotFound.displayName = 'DIRECTLY | NotFound';
export default NotFound;
