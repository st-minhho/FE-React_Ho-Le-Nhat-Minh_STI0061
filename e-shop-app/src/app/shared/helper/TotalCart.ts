import { IProductCart } from '../interfaces/ProductCart';
import { setLocal } from './localStorage';

const TotalCart = (list: IProductCart[]) => {  
  let sumQtyCart: number = 0;
    list.map((item: IProductCart) => {
      sumQtyCart += item.qty;
    })
    setLocal('totalOrder', sumQtyCart)
    return sumQtyCart;
};
export default TotalCart;
