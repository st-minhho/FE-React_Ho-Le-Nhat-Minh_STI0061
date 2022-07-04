import { createContext, useState } from 'react';
import { getLocal } from '../helper/LocalStorage';
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

const GlobalContext = createContext<CartContextType | RegisterContextType | null>(null);

const GlobalProvider: React.FC<Props> = ({ children }: any) => {
  const [cart, setCart] = useState(JSON.parse(getLocal('cart') || '[]'));
  const [user, setUser] = useState(getLocal('token') || '[]');
  return (
    <GlobalContext.Provider value={{ cart, setCart, user, setUser}}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalProvider, GlobalContext };
