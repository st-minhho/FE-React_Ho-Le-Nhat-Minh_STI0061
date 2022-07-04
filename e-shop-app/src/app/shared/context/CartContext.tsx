import { createContext, useState } from 'react';
import { getLocal } from '../helper/localStorage';
import { IProductCart } from '../interfaces/ProductCart';

type Props = {
  children: JSX.Element
}

export type CartContextType = {
  cart: IProductCart[]
  setCart: (cart: IProductCart[]) => void;
};

const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<Props> = ({ children }: any) => {
  const [cart, setCart] = useState(JSON.parse(getLocal('cart') || '[]'));
  return (
    <CartContext.Provider value={{ cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext };
