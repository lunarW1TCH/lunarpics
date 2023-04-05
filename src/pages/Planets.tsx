import ImageForm from '../components/image/ImageForm';
import Card from '../components/UI/Card';

import classes from './Page.module.scss';

const PlanetsPage = () => {
  return (
    <div className={classes.containerPage}>
      <h1 className={classes.h1}>Planets</h1>
      <Card className={classes.containerForm}>
        <ImageForm />
      </Card>
    </div>
  );
};

export default PlanetsPage;
