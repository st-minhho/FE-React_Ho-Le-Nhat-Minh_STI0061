import { combineReducers } from 'redux';
import { cartReducer } from '../pages/cart/cart.reducer';

const rootReducer = combineReducers({
  carts: cartReducer
});

export default rootReducer;
