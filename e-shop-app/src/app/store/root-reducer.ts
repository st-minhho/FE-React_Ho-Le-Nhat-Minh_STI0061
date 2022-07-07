import { combineReducers } from 'redux';
import { cartReducer } from '../pages/cart/cart.reducers';
import { categoriesReducer } from '../pages/home/components/categories/categories.reducers';
import { homeReducer } from '../pages/home/components/home.reduces';

const rootReducer = combineReducers({
  carts: cartReducer,
  home: homeReducer,
  categories: categoriesReducer
});

export default rootReducer;
