import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Card from '../components/UI/Card';
import { useScrollToTop } from '../helpers/helpers';
import planet from '../images/planets.png';
import star from '../images/stars.png';

import classes from './Home.module.scss';

const HomePage = () => {
  const { t } = useTranslation();

  useScrollToTop();

  return (
    <>
      <h1 className={classes.h1}>{t('navigationHome')}</h1>
      <div className={classes.containerHome}>
        <Card className={classes.containerLink}>
          <NavLink className={classes.link} to="/planets">
            {t('homePlanets')}
          </NavLink>
          <NavLink to="/planets">
            <img src={planet} alt="planet" className={classes.img} />
          </NavLink>
        </Card>
        <Card className={classes.containerLink}>
          <NavLink to="/stars" className={classes.link}>
            {t('homeStars')}
          </NavLink>
          <NavLink to="/stars">
            <img src={star} alt="star" className={classes.img} />
          </NavLink>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
