import { combineReducers } from 'redux';
import { cartReducer } from '../pages/cart/cart.reducers';

const rootReducer = combineReducers({
  carts: cartReducer
});

export default rootReducer;
