import { IProductCart } from './productCart'

export interface ICartProps {
  cart: IProductCart[]
}

export interface ICartItemProps {
  index: number
  key: string
  id: string
  name: string
  price: number
  discount: number
  imgSrc: string
  qty: number
}
