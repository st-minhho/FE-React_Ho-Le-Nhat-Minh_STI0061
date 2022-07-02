import { useState } from 'react';
import TotalProduct from '../../shared/helper/totalProduct';
import { getLocal } from '../../shared/helper/localStorage';
import { IProductCart } from '../../shared/interfaces/productCart';

const Cart = (props: any) => {
  const [qty, setQty] = useState('');
  const productCart: IProductCart[] = JSON.parse(getLocal('cart') || '[]');
  const total: number = TotalProduct(props.discount, props.price, props.qty);

  const handelDelete = (id: string) => {

    const newCart = productCart.filter((item: IProductCart) => item.id !== id);
    props.handleCart(newCart);
  };
  const handlePlus = (id: string) => {
    productCart.map((item) => {
      if (item.id === id) {
        item.qty++;
      }
    });
    props.handleCart(productCart);
  };

  const handleMinus = (id: string) => {
    const index: number = productCart.findIndex(
      (obj: IProductCart) => obj.id === id
    );
    productCart.map((item) => {
      if (item.id === id) {
        if (item.qty > 1) {
          item.qty--;
        } else {
          productCart.splice(index, 1);
        }
      }
    });
    props.handleCart(productCart);
  };

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
          <button onClick={() => handleMinus(props.id)} className='btn btn-primary js-cart-quantity-down' value='-' > - </button>
          <input className='cart_quantity_input' type='text' name='quantity' value={props.qty} onChange={(e) => setQty(e.target.value)} />
          <button onClick={() => handlePlus(props.id)} className='btn btn-primary js-cart-quantity-up' value='+'>  + </button>
        </div>
      </td>
      <td className='total'>${total}</td>
    </tr>
  );
};
export default Cart;
