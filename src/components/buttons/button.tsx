import type { ButtonProps } from "./button.types";

export const Button = ({ label, onClickHandler }: ButtonProps) => {
  return <button onClick={onClickHandler}>{label}</button>;
};
