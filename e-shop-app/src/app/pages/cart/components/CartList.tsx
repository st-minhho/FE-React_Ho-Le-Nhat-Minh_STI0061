import Cart from './Cart';
import { IProductCart } from '../../../shared/interfaces/ProductCart';
import { IHandleCartProps } from '../../../shared/interfaces/CartProps';

const CartList = (props: IHandleCartProps) => {
  const { cart } = props;
  return (
    <tbody className='product-cart-list'>
      {cart.map((item: IProductCart) => (
        <Cart
          key={item.id}
          {...item}
        />
      ))}
    </tbody>
  );
};
export default CartList;
