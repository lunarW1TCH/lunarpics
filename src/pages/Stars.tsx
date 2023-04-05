import ImageForm from '../components/image/ImageForm';
import Card from '../components/UI/Card';

import classes from './Page.module.css';

const StarsPage = () => {
  return (
    <div className={classes.div}>
      <h1>Stars</h1>
      <Card className={classes.card}>
        <ImageForm />
      </Card>
    </div>
  );
};

export default StarsPage;
