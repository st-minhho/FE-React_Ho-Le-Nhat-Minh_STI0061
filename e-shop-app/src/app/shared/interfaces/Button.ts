import { MouseEventHandler, ReactNode } from "react";

interface IButton {
  text?: string | ReactNode;
  type?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default IButton;
