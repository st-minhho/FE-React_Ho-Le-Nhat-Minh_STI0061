import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './app/shared/components/layout/Header/Header';
import Footer from './app/shared/components/layout/Footer/Footer';
import Home from './app/pages/home'
import Cart from './app/pages/cart'
import Register from './app/pages/register/Register';
import { ScrollToTop } from './app/shared/partial/ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </ScrollToTop>
  );
}

export default App;
