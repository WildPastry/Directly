/* eslint-disable no-console */
import { Button, Group, useMantineColorScheme } from '@mantine/core';
import {
  IconBook,
  IconEye,
  IconHome,
  IconLogout,
  IconMoonFilled,
  IconSunFilled
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import directlyLogo from '../../../assets/logo.svg';
import { setAuth } from '../../../redux/slices/authSlice';
import { useAppDispatch } from '../../../redux/hooks';

const Header: React.FC = (): JSX.Element => {
  // Colour scheme
  const { setColorScheme } = useMantineColorScheme();
  // Set up navigation and dispatch
  const dispatch = useAppDispatch();

  const logout = (): void => {
    console.log('Logout...');
    dispatch(setAuth(true));
  };

  return (
    <header aria-label='Header Section' className='mb-4'>
      <div
        className='mx-auto flex max-w-4xl 
      justify-between h-16 items-center px-4'>
        <Link to={`/home`}>
          <div className='flex justify-between items-center'>
            <img alt='Directly logo' className='w-8 mr-2' src={directlyLogo} />
            <h1 className='font-thin text-2xl tracking-widest'>Directly</h1>
          </div>
        </Link>
        <Group gap='xs'>
          <Link to={`/home`}>
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
          <Link to={`/login`}>
            <Button
              leftSection={<IconLogout size={14} />}
              color='var(--mantine-color-indigo-9)'
              size='xs'
              onClick={() => logout()}
              variant='filled'>
              Logout
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
