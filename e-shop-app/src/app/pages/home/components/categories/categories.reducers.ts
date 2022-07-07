import { useSelector } from 'react-redux';
import { IAction } from '../../../../shared/interfaces/action';
import * as TYPES from '../../../../shared/types'


interface IInitialState {
  categories: any
}

export const initialState: IInitialState = {
  categories: []
}

export const categoriesReducer = (state = initialState, action: IAction) => {

  switch (action.type) {
    case TYPES.FILTER_PRODUCT: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    default: return state;
  }
}
