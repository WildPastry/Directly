import { MantineProvider } from '@mantine/core';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';
import { mockMatchMedia } from '../../utils/testUtils';
import { render } from '@testing-library/react';

const renderWithRouter = (component: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Page', route);

  return render(
    <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
  );
};

describe('<NotFound />', () => {
  // Run global pre-condition
  mockMatchMedia();

  it('renders the component', () => {
    renderWithRouter(
      <MantineProvider>
        <NotFound />
      </MantineProvider>,
      { route: '/' }
    );
  });
});
