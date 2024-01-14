import { Button, Group, useMantineColorScheme } from '@mantine/core';
import {
  IconBook,
  IconEye,
  IconHome,
  IconMoonFilled,
  IconSunFilled
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import directlyLogo from '../../../assets/logo.svg';

const Header: React.FC = (): JSX.Element => {
  // Colour scheme
  const { setColorScheme } = useMantineColorScheme();

  return (
    <header aria-label='Header Section' className='mb-4'>
      <div
        className='mx-auto flex max-w-4xl 
      justify-between h-16 items-center px-4'>
        <Link to={`/`}>
          <div className='flex justify-between items-center'>
            <img alt='Directly logo' className='w-8 mr-2' src={directlyLogo} />
            <h1 className='font-thin text-2xl tracking-widest'>Directly</h1>
          </div>
        </Link>
        <Group gap='xs'>
          <Link to={`/`}>
            <Button
              leftSection={<IconHome size={14} />}
              size='xs'
              variant='outline'>
              Home
            </Button>
          </Link>
          <Link to={`/books`}>
            <Button
              leftSection={<IconBook size={14} />}
              size='xs'
              variant='outline'>
              Books
            </Button>
          </Link>
          <Link to={`/viewer`}>
            <Button
              leftSection={<IconEye size={14} />}
              size='xs'
              variant='outline'>
              Viewer
            </Button>
          </Link>
        </Group>
        <Group gap='xs'>
          <Button
            leftSection={<IconSunFilled size={14} />}
            onClick={() => setColorScheme('light')}
            size='xs'
            variant='filled'>
            Light
          </Button>
          <Button
            leftSection={<IconMoonFilled size={14} />}
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
