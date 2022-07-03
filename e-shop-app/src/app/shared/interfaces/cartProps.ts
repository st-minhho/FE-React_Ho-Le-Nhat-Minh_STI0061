import { IProductCart } from "./productCart"

export interface ICartProps {
  cart: IProductCart[]
}

export interface IHandleCartProps {
  cart: IProductCart[]
  handleCart: (value: IProductCart[]) => void
}

export interface ICartItemProps {
  key: string
  id: string
  name: string
  price: number
  discount: number
  imgSrc: string
  qty: number
  handleCart: (value: IProductCart[]) => void
}