import { combineReducers } from 'redux';
import { cartReducer } from '../pages/cart/cart.reducers';
import { homeReducer } from '../pages/home/home.reduces';
const reducers = {
  home: homeReducer,
  carts: cartReducer,
};

const appReducer = combineReducers({ ...reducers });
export default appReducer;
