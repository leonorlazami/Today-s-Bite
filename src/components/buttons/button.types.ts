import type { MouseEventHandler, ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  label: string;
  name: string;
  type?: "button" | "submit" | "reset";
  id?: string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "onClick" | "id" | "disabled"
>;
