import {
  AppShell,
  Burger,
  Button,
  Group,
  useMantineColorScheme
} from '@mantine/core';
import {
  IconArrowsSort,
  IconBooks,
  IconHome,
  IconLogout,
  IconMoonFilled,
  IconSunFilled
} from '@tabler/icons-react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import Loading from '../../components/loading/Loading';
import directlyLogo from '../../assets/logo.svg';
import { setAuth } from '../../redux/slices/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useDisclosure } from '@mantine/hooks';

const Layout: React.FC = (): JSX.Element => {
  // Colour scheme
  const { setColorScheme } = useMantineColorScheme();
  const [showDark, setShowDark] = useState(true);
  // Side nav
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  // Set up dispatch
  const dispatch = useAppDispatch();

  const showDarkOrLightIcon = (): JSX.Element => {
    if (showDark) {
      return (
        <IconMoonFilled
          className='cursor-pointer'
          onClick={() => [setColorScheme('light'), setShowDark(false)]}
          size={30}
        />
      );
    }
    return (
      <IconSunFilled
        className='cursor-pointer'
        onClick={() => [setColorScheme('dark'), setShowDark(true)]}
        size={30}
      />
    );
  };

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
        <Group gap='md'>{showDarkOrLightIcon()}</Group>
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
          <div className='w-full'>
            <NavLink to={`/sorting`}>
              <Button
                fullWidth
                leftSection={<IconArrowsSort size={14} />}
                size='sm'
                variant='outline'>
                Sorting
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
