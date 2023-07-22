import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from '../../src/Routes';

describe('tests on <MainApp />', () => {
  test('should display HomePage', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    // RouterProvider is needed because it has necessary stuff about the router
    render(
      <RouterProvider router={router}>
        <MainApp />
      </RouterProvider>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  });

  test('should display LoginPage', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/login'],
    });

    render(
      <RouterProvider router={router}>
        <MainApp />
      </RouterProvider>
    );

    expect(screen.getByText('LoginPage')).toBeTruthy();
  });

  test('should display AboutPage', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });

    render(
      <RouterProvider router={router}>
        <MainApp />
      </RouterProvider>
    );

    expect(screen.getByText('AboutPage')).toBeTruthy();
  });
});
