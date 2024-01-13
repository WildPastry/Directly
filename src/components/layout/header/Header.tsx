import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  // Colour scheme
  const { setColorScheme } = useMantineColorScheme();

  return (
    <header aria-label='Header Section'>
      <div className='mx-auto flex max-w-4xl justify-between h-16 items-center'>
        <Link to={`/`}>DIRECTLY</Link>
        <Group gap='xs'>
          <Link to={`/`}>
            <Button size='xs' variant='outline'>
              Home
            </Button>
          </Link>
          <Link to={`/books`}>
            <Button size='xs' variant='outline'>
              Books
            </Button>
          </Link>
          <Link to={`/viewer`}>
            <Button size='xs' variant='outline'>
              Viewer
            </Button>
          </Link>
        </Group>
        <Group gap='xs'>
          <Button
            onClick={() => setColorScheme('light')}
            size='xs'
            variant='filled'>
            Light
          </Button>
          <Button
            onClick={() => setColorScheme('dark')}
            size='xs'
            variant='filled'>
            Dark
          </Button>
          <Button
            onClick={() => setColorScheme('auto')}
            size='xs'
            variant='filled'>
            Auto
          </Button>
        </Group>
      </div>
    </header>
  );
};

// EXPORT Header
Header.displayName = 'DIRECTLY | Header';
export default Header;
