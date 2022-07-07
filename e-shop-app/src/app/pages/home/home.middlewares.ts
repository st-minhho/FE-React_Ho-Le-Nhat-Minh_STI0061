import axios, { AxiosResponse } from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import * as TYPES from '../../shared/types';
import { getCategoryError, getCategorySuccess, getProductsError, getProductsSuccess } from './home.actions';

const ENDPOINT = 'https://6088e20da6f4a300174271e7.mockapi.io';

export function* getProducts() {
  try {
    const res: AxiosResponse<any> = yield axios.get(`${ENDPOINT}/products`);
    yield put(getProductsSuccess(res.data));
  } catch (error) {
    yield put(getProductsError(error));
  }
}

export function* getCategory() {
  try {
    const res: AxiosResponse<any> = yield axios.get(`${ENDPOINT}/categories`);
    yield put(getCategorySuccess(res.data));
  } catch (error) {
    yield put(getCategoryError(error));
  }
}

export function* watchHome() {
  yield all([
    takeLatest(TYPES.GET_PRODUCTS, getProducts),
    takeLatest(TYPES.GET_CATEGORY, getCategory),
  ]);
}