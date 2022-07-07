import axios, { AxiosResponse } from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import * as TYPES from '../../shared/constants/types';
import { ENDPOINT } from '../../config/endpoint';
import { getCategoriesError, getCategoriesSuccess, getProductsError, getProductsSuccess } from './home.actions';


export function* getProducts() {
  try {
    const res: AxiosResponse<any> = yield axios.get(`${ENDPOINT}/products`);
    yield put(getProductsSuccess(res.data));
  } catch (error) {
    yield put(getProductsError(error));
  }
}

export function* getCategories() {
  try {
    const res: AxiosResponse<any> = yield axios.get(`${ENDPOINT}/categories`);
    yield put(getCategoriesSuccess(Object.fromEntries(
      [...res.data].map((item) => Object.values(item))
    )));
  } catch (error) {
    yield put(getCategoriesError(error));
  }
}

export function* watchHome() {
  yield all([
    takeLatest(TYPES.GET_PRODUCTS, getProducts),
    takeLatest(TYPES.GET_CATEGORIES, getCategories),
  ]);
}
