export interface IProductCart {
  id: string,
  name: string,
  price: number,
  discount: number,
  image: string,
  qty: number
}

export interface ProductCart {
  cart: IProductCart[];
}
