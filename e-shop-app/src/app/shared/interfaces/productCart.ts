export interface IProductCart {
  id: string,
  name: string,
  price: number,
  discount: number,
  imgSrc: string,
  qty: number
}

export interface ProductCart {
  cart: IProductCart[];
}
