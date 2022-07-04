import { createContext, useState } from 'react';

type Props = {
  children: JSX.Element
}

export type CartContextType = {
  total: number
  setTotal: (total: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<Props> = ({ children }: any) => {
  const [total, setTotal] = useState(0);
  return (
    <CartContext.Provider value={{ total, setTotal}}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext };
