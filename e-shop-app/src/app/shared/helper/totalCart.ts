import { useSelector } from 'react-redux';
// import rootReducer from '../../store/root-reducer';
import { IProductCart } from '../interfaces/productCart';
import { setStorage } from './localstorage';

const TotalCart = () => {
  const { carts } = useSelector((state: any) => state.carts)
  let sumQtyCart = carts.reduce((sumQtyCart: number, item: IProductCart) => {
    return sumQtyCart += item.qty
  }, 0)
  setStorage('totalOrder', sumQtyCart)
  return sumQtyCart;
};
export default TotalCart;
