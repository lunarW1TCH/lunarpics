import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <p> polska</p>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
