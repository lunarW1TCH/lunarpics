import classes from './Card.module.css';
import Props from '../../models/Props';

const Card = (props: Props) => {
  const { children } = props;
  return <div className={classes.card}>{children}</div>;
};

export default Card;
