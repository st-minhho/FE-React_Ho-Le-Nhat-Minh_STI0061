import * as TYPES from '../../shared/constants/types'
import { IAction } from "../../shared/interfaces/action"
import { getStorage } from '../../shared/helper/localstorage';
import { LIST_KEY } from '../../shared/constants/storageKeys';

interface IInitialState {
  token: any
}

export const initialState: IInitialState = {
  token: getStorage(LIST_KEY.TOKEN, [])
}

export const tokenReducer = (state = initialState, action: IAction) => {

  switch (action.type) {
    case TYPES.GET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    default: return state;
  }
}
