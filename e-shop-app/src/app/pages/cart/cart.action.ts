import * as TYPES from '../../shared/types'
import { IProduct, IProductData } from "../../shared/interfaces/product";
import { IProductCart } from '../../shared/interfaces/productCart';

export const addToCart = (cart: any) =>{
  return {
    type: TYPES.ADD_CART,
    payload: cart,
  }
}

export const increaseToCart = (id: any) => {
  return{
    type: TYPES.INCREASE_CART,
    payload: id
  }
}

export const decreaseToCart = (id: any) => {
  return{
    type: TYPES.DECREASE_CART,
    payload: id
  }
}

export const deleteCart = (id: any) => {
  return{
    type: TYPES.DELETE_CART,
    payload: id
  }
}