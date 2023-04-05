import Props from './Props';

interface SelectProps extends Props {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className: string;
  value: string;
}

export default SelectProps;
