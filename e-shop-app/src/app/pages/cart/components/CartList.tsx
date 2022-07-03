import Cart from './Cart';
import { IProductCart } from '../../../shared/interfaces/productCart';
import { IHandleCartProps } from '../../../shared/interfaces/cartProps';

const CartList = (props: IHandleCartProps) => {
  const { cart, handleCart } = props;
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
