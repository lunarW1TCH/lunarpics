import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import OptionsLang from './options/OptionsLang';

import classes from './MainNavigation.module.scss';
import Select from './Select';

const MainNavigation = () => {
  const { t, i18n } = useTranslation();
  const selectOnChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const { value } = e.currentTarget;
    i18n.changeLanguage(value);
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }
              to="/"
            >
              {t('navigationHome')}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }
              to="/planets"
            >
              {t('navigationPlanets')}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }
              to="/stars"
            >
              {t('navigationStars')}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Select
        className={classes.select}
        id="selectLang"
        name="lang"
        onChange={selectOnChangeHandler}
      >
        <OptionsLang />
      </Select>
    </header>
  );
};

export default MainNavigation;
