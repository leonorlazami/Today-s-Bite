import type { InputProps } from "./input.types";

export const Input = ({
  type,
  value,
  onChange,
  name,
  label,
  isReadOnly = false,
}: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        readOnly={isReadOnly}
      />
    </>
  );
};
