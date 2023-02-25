// import Card from '../components/UI/Card';
import Heading from '../components/Heading';
// import ImageForm from '../components/image/ImageForm';
import ImageUpload from '../components/image/ImageUpload';
// import Card from '../components/UI/Card';

import classes from './Colors.module.css';

const ColorsPage: React.FC = () => {
  // TODO:
  return (
    <div className={classes.container}>
      <Heading heading="Colors">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Heading>
      {/* <ImageForm /> */}
      <ImageUpload />
    </div>
  );
};

export default ColorsPage;
