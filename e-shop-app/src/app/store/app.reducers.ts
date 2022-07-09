import { combineReducers } from 'redux';
import { tokenReducer } from '../pages/auth/auth.reducers';
import { cartReducer } from '../pages/cart/cart.reducers';
import { categoryReducer, homeReducer } from '../pages/home/home.reduces';
const reducers = {
  home: homeReducer,
  carts: cartReducer,
  category: categoryReducer,
  token: tokenReducer
};

const appReducer = combineReducers({ ...reducers });
export default appReducer;
