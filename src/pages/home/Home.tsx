import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Home: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Home Section'>
      <h1>HOME</h1>
      <Link to={`/books`}>
        <Button color='cyan' size='xs' variant='filled'>
          View Books
        </Button>
      </Link>
    </section>
  );
};

// EXPORT Home
Home.displayName = 'DIRECTLY | Home';
export default Home;
