import * as TYPES from '../../../shared/types'
import { IAction } from "../../../shared/interfaces/action"

interface IInitialState {
  data: any,
  error: string,
  isLoading: boolean
  // idChecked: any
}

export const initialState: IInitialState = {
  data: [],
  error: '',
  isLoading: true,
  // idChecked: []
}

export const homeReducer = (state = initialState, action: IAction) => {

  switch (action.type) {
    case TYPES.GET_PRODUCTS: {
      return {
        ...state,
        isLoading: true
      }
    }

    case TYPES.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: '',
        isLoading: false
      }
    }

    case TYPES.GET_PRODUCTS_FAILED: {
      return {
        ...state,
        data: [],
        error: action.payload,
        isLoading: true
      }
    }

    // case TYPES.FILTER_PRODUCT: {
    //   return {
    //     ...state,
    //     data: [],
    //     error: '',
    //     isLoading: true,
    //     idChecked: action.payload
    //   };
    // }

    default: return state;
  }
}
