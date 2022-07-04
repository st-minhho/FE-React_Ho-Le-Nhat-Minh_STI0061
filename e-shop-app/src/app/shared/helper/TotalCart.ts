import { useContext } from 'react';
import { CartContext, CartContextType } from '../context/CartContext';
import { IProductCart } from '../interfaces/ProductCart';
import { setLocal } from './localStorage';

const TotalCart = () => {  
  const {cart} = useContext(CartContext) as CartContextType
  let sumQtyCart: number = 0;
  cart.map((item: IProductCart) => {
      sumQtyCart += item.qty;
    })
    setLocal('totalOrder', sumQtyCart)
    return sumQtyCart;
};
export default TotalCart;
