import {
  AppShell,
  Burger,
  Button,
  Group,
  useMantineColorScheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Loading from '../../components/features/loading/Loading';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import directlyLogo from '../../assets/logo.svg';
import {
  IconSunFilled,
  IconMoonFilled,
  IconBook,
  IconEye,
  IconHome,
  IconLogout
} from '@tabler/icons-react';
import { useAppDispatch } from '../../redux/hooks';
import { setAuth } from '../../redux/slices/authSlice';

const Layout: React.FC = (): JSX.Element => {
  // Colour scheme
  const { setColorScheme } = useMantineColorScheme();

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  // Set up navigation and dispatch
  const dispatch = useAppDispatch();

  const logout = (): void => {
    console.log('Logout...');
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
            color='var(--mantine-color-indigo-9)'
            onClick={() => setColorScheme('auto')}
            size='xs'
            variant='filled'>
            Auto
          </Button>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className='p-4'>
        <div className='flex flex-col h-full gap-4'>
          <div className='w-full'>
            <NavLink to={`/home`}>
              <Button
                fullWidth
                leftSection={<IconHome size={14} />}
                size='xs'
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
                size='xs'
                variant='outline'>
                Books
              </Button>
            </NavLink>
          </div>
          <div className='w-full'>
            <NavLink to={`/viewer`}>
              <Button
                fullWidth
                leftSection={<IconEye size={14} />}
                size='xs'
                variant='outline'>
                Viewer
              </Button>
            </NavLink>
          </div>
          <div className='w-full mt-auto'>
            <NavLink to={`/login`}>
              <Button
                fullWidth
                leftSection={<IconLogout size={14} />}
                color='var(--mantine-color-indigo-9)'
                size='xs'
                onClick={() => logout()}
                variant='filled'>
                Logout
              </Button>
            </NavLink>
          </div>
        </div>
        {/* {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt='sm' animate={false} />
          ))} */}
      </AppShell.Navbar>
      <AppShell.Main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </AppShell.Main>
    </AppShell>

    // <section aria-label='Layout Section' className='h-full w-full'>
    //   <Header />
    //   <Suspense fallback={<Loading />}>
    //     <div className='p-4 h-full w-full'>
    //       <Outlet />
    //     </div>
    //   </Suspense>
    // </section>
  );
};

Layout.displayName = 'DIRECTLY | Layout';
export default Layout;
