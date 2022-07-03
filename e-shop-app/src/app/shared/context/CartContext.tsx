import { createContext, ReactNode, ReactPortal, useState } from 'react';
import { getLocal, setLocal } from '../helper/localStorage';
import { IProductCart } from '../interfaces/productCart';


// export interface ICart {
//   total: number
// }

export type CartContextType = {
  total: number
  updateTotal: () => void
};

const CartContext = createContext<CartContextType | null>(null);

const CartProvider = (children: any) => {

  const [total, setTotal] = useState(0);

  const updateTotal = () => {
    const product = JSON.parse(getLocal('totalOrder') || '[]');
    let sumQtyCart: number = 0;

    product.map((item: IProductCart) => {
      sumQtyCart += item.qty;
    })

    setTotal(sumQtyCart)
    setLocal('totalOrder', sumQtyCart)
  }

  return (
    <CartContext.Provider value={{ total, updateTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext };

