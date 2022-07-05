import { useState } from 'react';
import { ICartItemProps } from '../../../shared/interfaces/cartProps';
import TotalProduct from '../../../shared/helper/totalProduct';
import Button from '../../../shared/partial/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseToCart, deleteCart, increaseToCart } from '../cart.action';
import { handlePrice } from '../../../shared/helper/uniprice';

const Cart = (props: ICartItemProps) => {

  const { carts } = useSelector((state: any) => state.carts);
  const dispatch = useDispatch();
  const [qty, setQty] = useState('');
  const total: number = TotalProduct(props.discount, props.price, props.qty);
  const price = handlePrice(props.discount, props.price)

  const handelDelete = (id: string) => {
    dispatch(deleteCart(id))
  };

  const handleQuantity = (mess: string) => {
    switch (mess) {
      case 'plus': {
        dispatch(increaseToCart(props.id));
        break;
      }
      case 'minus': {
        dispatch(decreaseToCart(props.id));
        break;
      }

      default: return carts;
    }
  }

  return (
    <tr className="product-item">
      <td className="product-remove">
        <Button onClick={() => handelDelete(props.id)} className="btn btn-primary js-remove-link" text={<i className="fa fa-times" aria-hidden="true"></i>} />
      </td>
      <td className="image-prod">
        <div className="cart-product-img">
          <img src={props.image} alt="" />
        </div>
      </td>
      <td className="product-name">
        <h4>{props.name}</h4>
      </td>
      <td className="price">
        ${price}
      </td>
      <td className="quantity">
        <div className="js-cart-quantity-button">
          <Button onClick={() => handleQuantity("minus")} className="btn btn-primary js-cart-quantity-down" text="-" />
          <input className="cart_quantity_input" type="text" name="quantity" value={props.qty} onChange={(e) => setQty(e.target.value)} />
          <Button onClick={() => handleQuantity("plus")} className="btn btn-primary js-cart-quantity-up" text="+" />
        </div>
      </td>
      <td className="total">${total}</td>
    </tr>
  );
};

export default Cart;
