import * as TYPES from '../../shared/constants/types'
import { IAction } from "../../shared/interfaces/action"
import { getStorage, setStorage } from '../../shared/helper/localstorage';
import { IProductCart } from '../../shared/interfaces/productCart';
import { LIST_KEY } from '../../shared/constants/storageKeys';

interface IInitialState {
  carts: any
}

export const initialState: IInitialState = {
  carts: getStorage(LIST_KEY.CART, [])
}

export const cartReducer = (state = initialState, action: IAction) => {

  switch (action.type) {

    case TYPES.ADD_CART: {
      return {
        ...state,
        carts: action.payload,
      };
    }

    case TYPES.UPDATE_CART: {
      const newCart = [...state.carts]
      const index = newCart.findIndex((item: any) => item.id === action.payload.id)

      if (action.payload.mess === 'plus') {
        newCart[index].qty++
      } else {
        if (newCart[index].qty > 1) {
          newCart[index].qty--
        } else {
          newCart.splice(index, 1);
        }
      }

      setStorage('cart', newCart)
      return {
        ...state,
        carts: newCart,
      };
    }

    case TYPES.DELETE_CART: {
      const newCart = state.carts.filter((item: IProductCart) => item.id !== action.payload)
      setStorage('cart', newCart)
      return {
        ...state,
        carts: newCart
      };
    }

    default: return state;

  }
}
