import { useTranslation } from 'react-i18next';
import ImageForm from '../components/image/ImageForm';
import Card from '../components/UI/Card';
import { useScrollToTop } from '../helpers/helpers';

import classes from './Page.module.scss';

const StarsPage = () => {
  const { t } = useTranslation();

  useScrollToTop();

  return (
    <div className={classes.containerPage}>
      <h1 className={classes.h1}>{t('navigationStars')}</h1>
      <Card className={classes.containerForm}>
        <ImageForm />
      </Card>
    </div>
  );
};

export default StarsPage;
