import { combineReducers } from 'redux';
import { cartReducer } from '../pages/cart/cart.reducers';
import { homeReducer } from '../pages/home/components/home.reduces';

const rootReducer = combineReducers({
  carts: cartReducer,
  home: homeReducer,
});

export default rootReducer;
