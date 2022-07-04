import { useContext } from 'react';
import { GlobalContext, CartContextType } from '../context/GlobalContext';
import { IProductCart } from '../interfaces/ProductCart';
import { setLocal } from './LocalStorage';

const TotalCart = () => {  
  const {cart} = useContext(GlobalContext) as CartContextType
  let sumQtyCart: number = 0;
  cart.map((item: IProductCart) => {
      sumQtyCart += item.qty;
    })
    setLocal('totalOrder', sumQtyCart)
    return sumQtyCart;
};
export default TotalCart;
