import { getLocal, setLocal } from "../../shared/helper/localStorage";
import { IProductCart, ProductCart } from "../../shared/interfaces/productCart";

const Cart = (props: any) => {
  const productCart: IProductCart[] = JSON.parse(getLocal('cart') || '[]');

  let total: number = 0;
  let priceSell: number = props.price
  if(props.discount === 0){
    total = Math.round(props.price*props.qty*100)/100
  }else{
    priceSell =(props.price - Math.round(props.price*props.discount))
    total = priceSell*props.qty
  }
  
  const handelDelete = (id:string) => {
    const newCart = productCart.filter((item: IProductCart) => item.id !== id)
    console.log('1111',props.handleCart)
    props.handleCart(newCart)
    setLocal('cart', newCart)
  } 

  return (
    <tr className="product-item">
      <td className="product-remove">
        <button onClick={() => handelDelete(props.id)} className="btn btn-primary js-remove-link">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </td>
      <td className="image-prod">
        <div className="cart-product-img">
          <img src={props.imgSrc} alt="" />
        </div>
      </td>
      <td className="product-name">
        <h4>{props.name}</h4>
      </td>
      <td className="price">${priceSell}</td>
      <td className="quantity">
        <div className="js-cart-quantity-button">
          <button className="btn btn-primary js-cart-quantity-down"> - </button>
          <input className="cart_quantity_input" type="text" name="quantity" value={props.qty} />
          <button className="btn btn-primary js-cart-quantity-up"> + </button>
        </div>
      </td>
      <td className="total">${total}</td>
    </tr>
  )
}
export default Cart;
