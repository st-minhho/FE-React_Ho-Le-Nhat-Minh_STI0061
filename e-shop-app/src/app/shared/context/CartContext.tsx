import { createContext, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { getLocal, setLocal } from '../helper/localStorage';
import { IProductCart } from '../interfaces/productCart';

type Props = {
  children: JSX.Element
}

export type CartContextType = {
  total: number
  // updateTotal: (product:IProductCart[]) => void
};

const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<Props> = ({ children }: any) => {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const product:IProductCart[] = JSON.parse(getLocal('cart') || '[]');
    let sumQtyCart: number = 0;

    product.map((item: IProductCart) => {
      sumQtyCart += item.qty;
    })
    setTotal(sumQtyCart)
    setLocal('totalOrder', total)

  },[])

  return (
    <CartContext.Provider value={{ total }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext };
