import { useContext} from 'react';
import { CartContext, CartContextType } from '../../shared/context/CartContext';
import CartList from './components/CartList';
import TotalOrder from './components/TotalOrder';

const Index = () => {
  const { cart } = useContext(CartContext) as CartContextType
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
              <CartList cart={cart}
              />
            </table>
          </div>
          <TotalOrder cart={cart} />
        </div>
      </section>
    </main>
  );
};
export default Index;
