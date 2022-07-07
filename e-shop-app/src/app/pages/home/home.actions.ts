import * as TYPES from '../../shared/constants/types';

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

export const getCategories = () => ({
  type: TYPES.GET_CATEGORIES,
});

export const getCategoriesSuccess = (category: any) => ({
  type: TYPES.GET_CATEGORIES_SUCCESS,
  payload: category,
});

export const getCategoriesError = (error: any) => ({
  type: TYPES.GET_CATEGORIES_FAILED,
  payload: error,
});

export const filterProduct = (idChecked: any) => ({
  type: TYPES.GET_CATEGORIES_SUCCESS,
  payload: idChecked,
});

