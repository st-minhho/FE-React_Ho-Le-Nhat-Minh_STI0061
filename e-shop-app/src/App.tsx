import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { getLocal } from './app/shared/helper/localStorage';
import { IProductCart } from './app/shared/interfaces/productCart';
import { CartContext, CartContextType } from './app/shared/context/CartContext';
import './App.css';
import Header from './app/shared/components/layout/Header/Header';
import Footer from './app/shared/components/layout/Footer/Footer';
import Home from './app/pages/home'
import Cart from './app/pages/cart'

function App() {
  const { handleTotal } = useContext(CartContext) as CartContextType
  useEffect(() => {
    const product: IProductCart[] = JSON.parse(getLocal('cart') || '[]');
    handleTotal(product)
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
