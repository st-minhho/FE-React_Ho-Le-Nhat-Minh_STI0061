import { ICartProps, IHandleCartProps } from '../../shared/interfaces/cartProps';
import { IProductCart } from '../../shared/interfaces/productCart';

const TotalOrder = (props: ICartProps) => {
  console.log(props)
  const { cart } = props;
  let totalOder: number = 0;
  let sum: number = 0;

  cart.map((item: IProductCart) => {
    let quantity: number = item.qty;
    let price: number = item.price;
    sum = quantity * price;
    totalOder += sum;
  });

  return (
    <div className='cart-payment'>
      <div>
        <div className='cart-detail'>
          <span>Total: ${Math.round(totalOder * 100) / 100}</span>
          <span id='price-total' />
        </div>
        <a href='checkout.html' className='btn btn-primary btn-checkout'>
          Checkout
        </a>
      </div>
    </div>
  );
};
export default TotalOrder;
