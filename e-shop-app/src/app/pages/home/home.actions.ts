import * as TYPES from '../../shared/types';

export const getProducts = () => ({
  type: TYPES.GET_PRODUCTS,
});

export const getProductsSuccess = (products: any) => ({
  type: TYPES.GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductsError = (error: any) => ({
  type: TYPES.GET_PRODUCTS_FAILED,
  payload: error,
});

export const getCategory = () => ({
  type: TYPES.GET_CATEGORY,
});

export const getCategorySuccess = (category: any) => ({
  type: TYPES.GET_CATEGORY_SUCCESS,
  payload: category,
});

export const getCategoryError = (error: any) => ({
  type: TYPES.GET_CATEGORY_FAILED,
  payload: error,
});
