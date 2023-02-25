import classes from './Card.module.css';
import Props from '../../models/Props';

type CardProps = Props & {
  className?: string;
};

const defaultProps = {
  className: '',
};

const Card = (props: CardProps) => {
  const { children, className } = props;
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

Card.defaultProps = defaultProps;

export default Card;
