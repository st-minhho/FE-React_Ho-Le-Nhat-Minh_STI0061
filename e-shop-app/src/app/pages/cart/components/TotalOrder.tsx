import { ICartProps } from '../../../shared/interfaces/cartProps';
import { IProductCart } from '../../../shared/interfaces/productCart';

const TotalOrder = (props: ICartProps) => {
  const { cart } = props;
  let totalOder: number = 0;
  let sum: number = 0;

  cart.map((item: IProductCart) => {
    sum = item.qty * item.price;
    totalOder += sum;
  });

  return (
    <div className="cart-payment">
        <div className="cart-detail">
          <span className="cart-total">Total: ${Math.round(totalOder * 100) / 100}</span>
          <span id="price-total" />
        </div>
        <a href="checkout.html" className="btn btn-primary btn-checkout">Checkout</a>
    </div>
  );
};

export default TotalOrder;
