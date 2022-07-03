import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './app/shared/components/layout/Header/Header';
import Footer from './app/shared/components/layout/Footer/Footer';
import Home from './app/pages/home'
import Cart from './app/pages/cart'
import { CartProvider } from './app/shared/context/CartContext';

function App() {
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
