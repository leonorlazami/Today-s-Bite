import type { ButtonProps } from "./button.types";

export const Button = ({
  label,
  onClickHandler,
  name,
  type = "button",
  className = "",
  id,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      id={id}
      onClick={onClickHandler}
      name={name}
      type={type}
      className={`${className} text-sm border border-gray-300  rounded-lg disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-70`}
    >
      {label}
    </button>
  );
};
