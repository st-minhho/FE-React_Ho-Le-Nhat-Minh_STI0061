import { useContext, useState } from 'react';
import TotalProduct from '../../../shared/helper/totalProduct';
import { getLocal } from '../../../shared/helper/localStorage';
import { IProductCart } from '../../../shared/interfaces/productCart';
import { ICartItemProps } from '../../../shared/interfaces/cartProps';
import { CartContext, CartContextType } from '../../../shared/context/CartContext';

const Cart = (props: ICartItemProps) => {
  const { handleCart } = props
  const { handleTotal } = useContext(CartContext) as CartContextType
  const [qty, setQty] = useState('');
  const productCart: IProductCart[] = JSON.parse(getLocal('cart') || '[]');
  const total: number = TotalProduct(props.discount, props.price, props.qty);

  const handelDelete = (id: string) => {
    const newCart = productCart.filter((item: IProductCart) => item.id !== id);
    handleCart(newCart);
    handleTotal(newCart);
  };

  const handleQuantity = (mess: string, id: string) => {
    if (mess === 'plus') {
      productCart.map((item) => {
        if (item.id === id) {
          item.qty++;
        }
      });
    } else {
      const index: number = productCart.findIndex((obj: IProductCart) => obj.id === id);
      productCart.map((item) => {
        if (item.id === id) {
          if (item.qty > 1) {
            item.qty--;
          } else {
            productCart.splice(index, 1);
          }
        }
      });
    }
    handleCart(productCart);
    handleTotal(productCart);
  }

  return (
    <tr className='product-item'>
      <td className='product-remove'>
        <button onClick={() => handelDelete(props.id)} className='btn btn-primary js-remove-link'>
          <i className='fa fa-times' aria-hidden='true'></i>
        </button>
      </td>
      <td className='image-prod'>
        <div className='cart-product-img'>
          <img src={props.imgSrc} alt='' />
        </div>
      </td>
      <td className='product-name'>
        <h4>{props.name}</h4>
      </td>
      <td className='price'>
        ${props.price - Math.round(props.price * props.discount)}
      </td>
      <td className='quantity'>
        <div className='js-cart-quantity-button'>
          <button onClick={() => handleQuantity('minus', props.id)} className='btn btn-primary js-cart-quantity-down' value='-' > - </button>
          <input className='cart_quantity_input' type='text' name='quantity' value={props.qty} onChange={(e) => setQty(e.target.value)} />
          <button onClick={() => handleQuantity('plus', props.id)} className='btn btn-primary js-cart-quantity-up' value='+'>  + </button>
        </div>
      </td>
      <td className='total'>${total}</td>
    </tr>
  );
};
export default Cart;
