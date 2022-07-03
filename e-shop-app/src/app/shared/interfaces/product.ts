export interface IProduct {
  id: string,
  name: string,
  price: number,
  discount: number,
  imgSrc: string,
}

export interface IProductData {
  products: IProduct[];
}