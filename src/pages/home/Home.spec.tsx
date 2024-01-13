import Home from './Home';
import { MantineProvider } from '@mantine/core';
import { MemoryRouter } from 'react-router-dom';
import { mockMatchMedia } from '../../utils/testUtils';
import { render } from '@testing-library/react';

const renderWithRouter = (component: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Page', route);

  return render(
    <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
  );
};

describe('<Home />', () => {
  // Run global pre-condition
  mockMatchMedia();

  it('renders the component', () => {
    renderWithRouter(
      <MantineProvider>
        <Home />
      </MantineProvider>,
      { route: '/' }
    );
  });
});
