import { createBrowserRouter } from 'react-router-dom';
import { AboutPage, HomePage, LoginPage, MainApp } from './09-useContext/';
import ErrorPage from './09-useContext/ErrorPage';

export const getRoutes = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <MainApp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },

        // Useful to redirect when i don't want to show error page

        // {
        //   path: '/*',
        //   element: <Navigate to='/about' replace={true} />,
        // },
      ],
    },
  ]);
