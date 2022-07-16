import * as TYPES from '../../shared/constants/types'

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
