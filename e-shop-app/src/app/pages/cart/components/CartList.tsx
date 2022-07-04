import Cart from './Cart';
import { IProductCart } from '../../../shared/interfaces/ProductCart';
import { ICartProps} from '../../../shared/interfaces/CartProps';

const CartList = (props: ICartProps) => {
  const { cart } = props;
  return (
    <tbody className="product-cart-list">
      {cart.map((item: IProductCart, index:number) => (
        <Cart
          index={index}
          key={item.id}
          {...item}
        />
      ))}
    </tbody>
  );
};
export default CartList;
