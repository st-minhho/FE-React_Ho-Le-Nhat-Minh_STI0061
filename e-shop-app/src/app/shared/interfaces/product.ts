export interface IProduct {
  id: string,
  name: string,
  price: number,
  discount: number,
  image: string,
  catergory: string
}

export interface IProductData {
  products: IProduct[];
}
