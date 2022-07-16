export interface IProduct {
  id: string,
  name: string,
  price: number,
  discount: number,
  image: string,
  category: string
}

export interface IProductData {
  products: IProduct[];
}
