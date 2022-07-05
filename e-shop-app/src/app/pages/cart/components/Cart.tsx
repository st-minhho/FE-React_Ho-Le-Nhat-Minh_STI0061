import { useContext, useState } from 'react';
import { IProductCart } from '../../../shared/interfaces/productCart';
import { ICartItemProps } from '../../../shared/interfaces/cartProps';
import { GlobalContext, CartContextType } from '../../../shared/context/GlobalContext';
import { SetLocal } from '../../../shared/helper/localstorage';
import TotalProduct from '../../../shared/helper/totalProduct';
import Button from '../../../shared/partial/Button';

const Cart = (props: ICartItemProps) => {
  const { cart, setCart } = useContext(GlobalContext) as CartContextType
  const total: number = TotalProduct(props.discount, props.price, props.qty);
  const [qty, setQty] = useState('');
  const productCart = [...cart]

  const handelDelete = (id: string) => {
    const newCart = productCart.filter((item: IProductCart) => item.id !== id);
    setCart(newCart)
    SetLocal('cart', newCart)
  };

  const handleQuantity = (mess: string) => {
    switch (mess) {
      case 'plus': {
        productCart[props.index].qty++
        break;
      }
      case 'minus': {
        if (productCart[props.index].qty > 1) {
          productCart[props.index].qty--
        } else {
          productCart.splice(props.index, 1);
        }
        break;
      }
      default: break;
    }
    setCart(productCart)
    SetLocal('cart', productCart)
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
