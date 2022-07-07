import * as TYPES from '../../shared/types'
import { IAction } from "../../shared/interfaces/action"

interface IInitialState {
  data: any,
  error: string,
  isLoading: boolean
}

export const initialState: IInitialState = {
  data: [],
  error: '',
  isLoading: true
}

export const homeReducer = (state = initialState, action: IAction) => {
  
  switch(action.type){
    case TYPES.GET_PRODUCTS: {
      return {
        ...state, 
        isLoading: true
      }
    }

    case TYPES.GET_PRODUCTS_SUCCESS: {
      return{
        ...state,
        data: action.payload,
        error: '',
        isLoading: false
      }
    }

    case TYPES.GET_PRODUCTS_FAILED: {
      return{
        ...state,
        data: [],
        error: action.payload,
        isLoading: true
      }
    }

    default: return state;
  }
}

interface IInitialStateCategory {
  category: any,
  error: string,
  isLoading: boolean
}

export const initialStateCategory: IInitialStateCategory = {
  category: [],
  error: '',
  isLoading: true
}

export const categoryReducer = (state = initialState, action: IAction) => {
  
  switch(action.type){
    case TYPES.GET_CATEGORY: {
      return {
        ...state, 
        isLoading: true
      }
    }

    case TYPES.GET_CATEGORY_SUCCESS: {
      return{
        ...state,
        category: action.payload,
        error: '',
        isLoading: false
      }
    }

    case TYPES.GET_CATEGORY_FAILED: {
      return{
        ...state,
        category: [],
        error: action.payload,
        isLoading: true
      }
    }
    default: return state;
  }
}
