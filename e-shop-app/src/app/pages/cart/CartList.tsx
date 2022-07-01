import { IProductCart, ProductCart } from "../../shared/interfaces/productCart";
import Cart from "./Cart";

const CartList = (props: any) => {
  const { cart } = props
  const { handleCart } = props
  console.log('222', handleCart)
  return (
    <tbody className="product-cart-list">
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
  )
}
export default CartList;