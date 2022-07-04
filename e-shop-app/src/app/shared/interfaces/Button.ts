import { MouseEventHandler, ReactNode } from "react";

interface IButton {
  text: string | ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string;
  // children: ReactNode;
}

export default IButton;
