import type { MouseEventHandler, ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  label: string;
  name: string;
  type?: "button" | "submit" | "reset";
  onClickHandler?: MouseEventHandler<HTMLButtonElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">;
