import { combineReducers } from 'redux';
import { cartReducer } from '../pages/cart/cart.reducers';
import { categoryReducer, homeReducer } from '../pages/home/home.reduces';
const reducers = {
  home: homeReducer,
  carts: cartReducer,
  category: categoryReducer
};

const appReducer = combineReducers({ ...reducers });
export default appReducer;
