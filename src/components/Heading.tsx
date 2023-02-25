import Props from '../models/Props';

import classes from './Heading.module.css';

type HeadingProps = Props & {
  heading: string;
};

const Heading = (props: HeadingProps) => {
  const { children, heading } = props;
  return (
    <>
      <h1 className={classes.heading}>{heading}</h1>
      <p className={classes.paragraph}>{children}</p>
    </>
  );
};

export default Heading;
