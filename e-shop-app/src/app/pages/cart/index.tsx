import { useState } from 'react';
import { getLocal, setLocal } from '../../shared/helper/localStorage';
import { IProductCart } from '../../shared/interfaces/ProductCart';
import CartList from './components/CartList';
import TotalOrder from './components/TotalOrder';

const Index = () => {
  const cartInit: IProductCart[] = JSON.parse(getLocal('cart') || '[]');
  const [cart, setCart] = useState(cartInit);
  
  const handleCart = (value: IProductCart[]) => {
    setCart(value);
    setLocal('cart', value);
  };

  return (
    <main>
      <section className='section-cart'>
        <div className='container'>
          <div className='cart-list'>
            <table className='table-shopping-cart'>
              <thead className='thead-primary'>
                <tr className='text-center'>
                  <th>Action</th>
                  <th>Product</th>
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <CartList cart={cart} handleCart={handleCart} />
            </table>
          </div>
          <TotalOrder cart={cart} />
        </div>
      </section>
    </main>
  );
};
export default Index;
