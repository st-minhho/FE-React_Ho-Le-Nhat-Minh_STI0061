import { useState } from 'react';
import { ICartItemProps } from '../../../shared/interfaces/cartProps';
import { setStorage } from '../../../shared/helper/localstorage';
import TotalProduct from '../../../shared/helper/totalProduct';
import Button from '../../../shared/partial/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseToCart, deleteCart, increaseToCart } from '../cart.action';

const Cart = (props: ICartItemProps) => {
  const {carts} = useSelector((state:any) => state.carts )
  const dispatch = useDispatch();
  const total: number = TotalProduct(props.discount, props.price, props.qty);
  const [qty, setQty] = useState('');
  const productCart = [...carts]

  const handelDelete = (id: string) => {
    dispatch(deleteCart(id))    
  };

  const handleQuantity = (mess: string) => {
    switch (mess) {
      case 'plus': 
      dispatch(increaseToCart(props.id))
      break;
      // {
      //   productCart[props.index].qty++
      //   break;
      // }
      case 'minus': {
        dispatch(decreaseToCart(props.id))
        break;
      }
      default: break;
    }
    // setStorage('cart', productCart)
    // dispatch(addToCart(productCart))

  }

  return (
    <tr className="product-item">
      <td className="product-remove">
        <Button onClick={() => handelDelete(props.id)} className="btn btn-primary js-remove-link" text={<i className="fa fa-times" aria-hidden="true"></i>} />
      </td>
      <td className="image-prod">
        <div className="cart-product-img">
          <img src={props.imgSrc} alt="" />
        </div>
      </td>
      <td className="product-name">
        <h4>{props.name}</h4>
      </td>
      <td className="price">
        ${props.price - Math.round(props.price * props.discount)}
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
