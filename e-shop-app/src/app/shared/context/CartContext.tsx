import { createContext, useState } from 'react';
import { setLocal } from '../helper/localStorage';
import { IProductCart } from '../interfaces/productCart';

type Props = {
  children: JSX.Element
}

export type CartContextType = {
  total: number
  handleTotal: (list: IProductCart[]) => void;
};

const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<Props> = ({ children }: any) => {

  const [total, setTotal] = useState(0);
  const handleTotal = (list: IProductCart[]) => {
    let sumQtyCart: number = 0;
    list.map((item: IProductCart) => {
      sumQtyCart += item.qty;
    })
    setTotal(sumQtyCart)
    setLocal('totalOrder', sumQtyCart)
  }

  return (
    <CartContext.Provider value={{ total, handleTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext };
