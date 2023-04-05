import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

import classes from './Root.module.scss';

const RootLayout = () => {
  return (
    <div className={classes.containerRoot}>
      <MainNavigation />
      <main className={classes.containerOutlet}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
