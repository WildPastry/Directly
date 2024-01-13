import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Books: React.FC = (): JSX.Element => {
  return (
    <section aria-label='Books Section'>
      <h1>BOOKS</h1>
      <div>
        <Link to={`/viewer`}>
          <Button color='cyan' size='xs' variant='filled'>
            Open viewer
          </Button>
        </Link>
      </div>
    </section>
  );
};

// EXPORT Books
Books.displayName = 'DIRECTLY | Books';
export default Books;
