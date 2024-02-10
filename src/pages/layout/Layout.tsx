import {
  AppShell,
  Burger,
  Button,
  Group,
  useMantineColorScheme
} from '@mantine/core';
import {
  IconBook,
  IconBooks,
  IconEye,
  IconHome,
  IconLogout,
  IconMoonFilled,
  IconSunFilled
} from '@tabler/icons-react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Loading from '../../components/features/loading/Loading';
import { Suspense } from 'react';
import directlyLogo from '../../assets/logo.svg';
import { setAuth } from '../../redux/slices/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useDisclosure } from '@mantine/hooks';

const Layout: React.FC = (): JSX.Element => {
  // Colour scheme
  const { setColorScheme } = useMantineColorScheme();
  // Side nav
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  // Set up dispatch
  const dispatch = useAppDispatch();

  // Logout
  const logout = (): void => {
    dispatch(setAuth(true));
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened }
      }}
      padding='md'>
      <AppShell.Header className='flex justify-between px-4'>
        <Group gap='xs'>
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom='sm'
            size='sm'
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom='sm'
            size='sm'
          />
          <Link to={`/home`}>
            <div className='flex justify-between items-center'>
              <img
                alt='Directly logo'
                className='w-8 mr-2'
                src={directlyLogo}
              />
              <h1 className='font-thin text-2xl tracking-widest'>Directly</h1>
            </div>
          </Link>
        </Group>
        <Group gap='md'>
          <Button
            leftSection={<IconSunFilled size={14} />}
            onClick={() => setColorScheme('light')}
            size='sm'
            variant='filled'>
            Light
          </Button>
          <Button
            leftSection={<IconMoonFilled size={14} />}
            onClick={() => setColorScheme('dark')}
            size='sm'
            variant='filled'>
            Dark
          </Button>
          <Button
            color='var(--mantine-color-indigo-9)'
            onClick={() => setColorScheme('auto')}
            size='sm'
            variant='filled'>
            Auto
          </Button>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className='p-4'>
        <div className='flex flex-col h-full gap-6'>
          <div className='w-full'>
            <NavLink to={`/home`}>
              <Button
                fullWidth
                leftSection={<IconHome size={14} />}
                size='sm'
                variant='outline'>
                Home
              </Button>
            </NavLink>
          </div>
          <div className='w-full'>
            <NavLink to={`/books`}>
              <Button
                fullWidth
                leftSection={<IconBook size={14} />}
                size='sm'
                variant='outline'>
                Books
              </Button>
            </NavLink>
          </div>
          {/* <div className='w-full'>
            <NavLink to={`/viewer`}>
              <Button
                fullWidth
                leftSection={<IconEye size={14} />}
                size='sm'
                variant='outline'>
                Viewer
              </Button>
            </NavLink>
          </div> */}
          <div className='w-full'>
            <NavLink to={`/library`}>
              <Button
                fullWidth
                leftSection={<IconBooks size={14} />}
                size='sm'
                variant='outline'>
                Library
              </Button>
            </NavLink>
          </div>
          {/* Logout */}
          <div className='w-full mt-auto'>
            <NavLink to={`/login`}>
              <Button
                fullWidth
                leftSection={<IconLogout size={14} />}
                color='var(--mantine-color-indigo-9)'
                size='sm'
                onClick={() => logout()}
                variant='filled'>
                Logout
              </Button>
            </NavLink>
          </div>
        </div>
      </AppShell.Navbar>
      <AppShell.Main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </AppShell.Main>
    </AppShell>
  );
};

// EXPORT Layout
Layout.displayName = 'DIRECTLY | Layout';
export default Layout;
