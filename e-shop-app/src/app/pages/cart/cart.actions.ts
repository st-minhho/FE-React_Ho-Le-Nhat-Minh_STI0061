import * as TYPES from '../../shared/types'
import { IProduct, IProductData } from "../../shared/interfaces/product";
import { IProductCart } from '../../shared/interfaces/productCart';

export const addToCart = (cart: any) =>{
  return {
    type: TYPES.ADD_CART,
    payload: cart,
  }
}

export const updateQuantityCart = (id: string, mess: string) => {
  return{
    type: TYPES.UPDATE_CART,
    payload: {id, mess}
  }
}

export const deleteCart = (id: string) => {
  return{
    type: TYPES.DELETE_CART,
    payload: id
  }
}
