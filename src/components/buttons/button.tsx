import type { ButtonProps } from "./button.types";

export const Button = ({
  label,
  onClickHandler,
  name,
  type = "button",
}: ButtonProps) => {
  return (
    <button onClick={onClickHandler} name={name} type={type}>
      {label}
    </button>
  );
};
