import App from './App';
import { MantineProvider } from '@mantine/core';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mockMatchMedia } from './utils/testUtils';
import { render } from '@testing-library/react';
import store from './redux/store';

const renderWithRouter = (component: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Page', route);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
    </Provider>
  );
};

describe('<App />', () => {
  // Run global pre-condition
  mockMatchMedia();

  it('renders the component', () => {
    renderWithRouter(
      <MantineProvider>
        <App />
      </MantineProvider>,
      { route: '/' }
    );
  });
});
