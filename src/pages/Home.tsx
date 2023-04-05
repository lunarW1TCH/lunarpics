import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../components/UI/Card';
import planet from '../images/planets.png';
import star from '../images/stars.png';

import classes from './Home.module.css';

const HomePage = () => {
  // TODO: add a description and an example star and planet

  return (
    <>
      <h1 className={classes.h1}>Home</h1>
      <div className={classes.div}>
        <Card className={classes.card}>
          <NavLink className={classes.link} to="/planets">
            Generate a unique planet:
          </NavLink>
          <NavLink to="/planets">
            <img src={planet} alt="planet" className={classes.img} />
          </NavLink>
        </Card>
        <Card className={classes.card}>
          <NavLink to="/stars" className={classes.link}>
            And the star it orbits around:
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
