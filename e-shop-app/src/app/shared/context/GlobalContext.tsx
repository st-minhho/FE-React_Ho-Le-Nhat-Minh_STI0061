// import { createContext, useState } from 'react';
// import { GetLocal } from '../helper/localstorage';
// import { IProductCart } from '../interfaces/productCart';

// type Props = {
//   children: JSX.Element
// }

// export type CartContextType = {
//   cart: IProductCart[]
//   setCart: (cart: IProductCart[]) => void;
// };

// export type RegisterContextType = {
//   user: string
//   setUser: (isLogin: string) => void;
// };

// const GlobalContext = createContext<CartContextType | RegisterContextType | null>(null);

export const GlobalProvider = ({ children }: any) => {}
//   const [cart, setCart] = useState(JSON.parse(GetLocal('cart') || '[]'));
//   const [user, setUser] = useState(GetLocal('token') || '[]');
//   return (
//     <GlobalContext.Provider value={{ cart, setCart, user, setUser}}>
//       {children}
//     </GlobalContext.Provider>
//   )
// }


