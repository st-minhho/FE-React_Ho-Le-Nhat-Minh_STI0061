import Cart from './Cart';
import { IProductCart } from '../../shared/interfaces/productCart';
import { ICart } from '../../shared/interfaces/totalOrder';
import { ICartProps } from '../../shared/interfaces/cartProps';

const CartList = (props: ICartProps) => {
  const { cart } = props;
  const { handleCart } = props;
  return (
    <tbody className='product-cart-list'>
      {cart.map((item: IProductCart) => (
        <Cart
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          discount={item.discount}
          imgSrc={item.imgSrc}
          qty={item.qty}
          
          handleCart={handleCart}
        />
      ))}
    </tbody>
  );
};
export default CartList;
