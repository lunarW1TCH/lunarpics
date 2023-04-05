import SelectProps from '../models/SelectProps';

const Select = (props: SelectProps) => {
  const { name, id, onChange, className, value, children } = props;

  return (
    <select
      name={name}
      id={id}
      onChange={onChange}
      className={className}
      value={value}
    >
      {children}
    </select>
  );
};

export default Select;
