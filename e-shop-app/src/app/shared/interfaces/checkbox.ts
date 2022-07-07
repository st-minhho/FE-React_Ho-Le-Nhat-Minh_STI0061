import { ChangeEventHandler } from "react";

export interface ICheckBox {
  type?: string,
  id?: string,
  value?: string,
  htmlFor?:string,
  name: string,
  onChange?: ChangeEventHandler<HTMLInputElement>
}
