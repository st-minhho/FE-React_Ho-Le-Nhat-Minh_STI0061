import { ChangeEventHandler } from "react";

interface IInput {
  value?: string;
  name?: string;
  type?: string;
  className?: string;
  placehodler?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default IInput;
