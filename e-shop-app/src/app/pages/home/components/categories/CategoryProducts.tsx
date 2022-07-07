import { DetailedHTMLProps, InputHTMLAttributes, LabelHTMLAttributes, MouseEventHandler } from "react"

interface ICategoriesProduct{
  id: any
  name: string
  onClick: MouseEventHandler<HTMLInputElement>
}

export const CategoryProduct = ({id, name, onClick}:ICategoriesProduct) => {
  return (
    <div>
      <input type="checkbox" id={id} value={name} onClick={onClick}/>
      <label htmlFor={id}>{name}</label>
    </div>
  )
}
