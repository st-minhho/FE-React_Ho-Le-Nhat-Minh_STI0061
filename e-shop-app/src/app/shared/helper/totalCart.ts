import { useContext } from 'react';
import { GlobalContext, CartContextType } from '../context/GlobalContext';
import { IProductCart } from '../interfaces/productCart';
import { SetLocal } from './LocalStorage';

const TotalCart = () => {  
  const {cart} = useContext(GlobalContext) as CartContextType
  let sumQtyCart: number = 0;
  cart.map((item: IProductCart) => {
      sumQtyCart += item.qty;
    })
    SetLocal('totalOrder', sumQtyCart)
    return sumQtyCart;
};
export default TotalCart;
