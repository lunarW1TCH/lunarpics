import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation: React.FC = () => {
  // TODO:
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/colors">Colors</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
