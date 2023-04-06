import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import PlanetsPage from './pages/Planets';
import RootLayout from './pages/Root';
import StarsPage from './pages/Stars';
import ErrorPage from './pages/Error';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'planets',
          element: <PlanetsPage />,
        },
        {
          path: 'stars',
          element: <StarsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
