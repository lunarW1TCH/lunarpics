import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ColorsPage from './pages/Colors';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      // TODO: error element
      children: [
        { index: true, element: <HomePage /> },
        { path: 'colors', element: <ColorsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
