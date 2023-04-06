import ImageForm from '../components/image/ImageForm';
import Card from '../components/UI/Card';
import { useScrollToTop } from '../helpers/helpers';

import classes from './Page.module.scss';

const StarsPage = () => {
  useScrollToTop();

  return (
    <div className={classes.containerPage}>
      <h1 className={classes.h1}>Stars</h1>
      <Card className={classes.containerForm}>
        <ImageForm />
      </Card>
    </div>
  );
};

export default StarsPage;
