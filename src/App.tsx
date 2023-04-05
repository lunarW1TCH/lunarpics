import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import PlanetsPage from './pages/Planets';
import RootLayout from './pages/Root';
import StarsPage from './pages/Stars';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      // TODO: error element
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
