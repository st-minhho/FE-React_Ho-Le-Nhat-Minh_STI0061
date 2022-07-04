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

export type RegisterContextType = {
  user: string
  setUser: (isLogin: string) => void;
};

const CartContext = createContext<CartContextType | RegisterContextType | null>(null);

const CartProvider: React.FC<Props> = ({ children }: any) => {
  const [cart, setCart] = useState(JSON.parse(getLocal('cart') || '[]'));
  const [user, setUser] = useState(getLocal('token') || '[]');
  return (
    <CartContext.Provider value={{ cart, setCart, user, setUser}}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext };
