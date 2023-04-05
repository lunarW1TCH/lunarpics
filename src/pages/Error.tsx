import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Footer from '../components/Footer';
import MainNavigation from '../components/MainNavigation';

import classes from './Error.module.css';

const ErrorPage = () => {
  const error = useRouteError();

  let h1 = 'An error occured!';
  let message = 'Something went wrong!';

  // if-check necessary for typechecking
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      h1 = 'Not found!';
      message = 'Could not find resource or page.';
    }

    if (error.status === 500) {
      message = error.data.message;
    }
  }

  return (
    <div className={classes.div}>
      <MainNavigation />
      <h1>{h1}</h1>
      <p>{message}</p>
      <Footer />
    </div>
  );
};

export default ErrorPage;
