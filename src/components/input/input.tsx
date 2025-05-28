import type { InputProps } from "./input.types";

export const Input = ({
  type,
  value,
  onChange,
  name,
  label,
  isReadOnly = false,
  placeholder,
  className = "",
}: InputProps) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={`${className} border rounded-lg  border-gray-300 px-4`}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        readOnly={isReadOnly}
        placeholder={placeholder}
      />
    </>
  );
};
