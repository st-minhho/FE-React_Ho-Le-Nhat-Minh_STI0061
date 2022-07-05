import { useSelector } from 'react-redux';
import CartList from './components/CartList';
import TotalOrder from './components/TotalOrder';

const Index = () => {
  const {carts} = useSelector((state:any) => state.carts )
  return (
    <main>
      <section className="section-cart">
        <div className="container">
          <div className="cart-list">
            <table className="table-shopping-cart">
              <thead className="thead-primary">
                <tr className="text-center">
                  <th>Action</th>
                  <th>Product</th>
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <CartList cart={carts}/>
            </table>
          </div>
          <TotalOrder cart={carts} />
        </div>
      </section>
    </main>
  );
};
export default Index;
