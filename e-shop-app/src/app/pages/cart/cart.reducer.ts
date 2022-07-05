import * as TYPES from '../../shared/types'
import { IAction } from "../../shared/interfaces/action"
import { getStorage, setStorage } from '../../shared/helper/localstorage';
import { IProductCart } from '../../shared/interfaces/productCart';

interface IInitialState {
  carts : any
}

export const initialState: IInitialState = {
  carts: getStorage('cart',[]) 
}

export const cartReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TYPES.ADD_CART: {
      return {
        ...state,
        carts: action.payload,
      };
    }
    case TYPES.DELETE_CART: {
      const newCart = state.carts.filter((item: IProductCart) => item.id !== action.payload)
      setStorage('cart', newCart)
      return {
        ...state,
        carts: newCart
      }
    }
    default: return state
  }
}