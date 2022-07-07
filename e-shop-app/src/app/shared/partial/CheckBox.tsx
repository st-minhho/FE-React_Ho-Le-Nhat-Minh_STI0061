import { ICheckBox } from "../interfaces/checkbox"
import Input from "./Input"

export const CheckBox = ({ type, name, htmlFor, id, value, onChange }: ICheckBox) => {
  return (
    <>
      <input type={type} id={id} value={value} onChange={onChange}/>
      <label htmlFor={htmlFor}>{name}</label>
    </>
  )
}
