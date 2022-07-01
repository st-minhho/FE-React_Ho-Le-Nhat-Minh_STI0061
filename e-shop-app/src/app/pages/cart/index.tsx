import { useEffect, useState } from "react";
import { getLocal } from "../../shared/helper/localStorage";
import CartList from "./CartList";

const Index = () => {
  const value = JSON.parse(getLocal('cart') || '[]')
  const [cart, setCart] = useState(value)
  // useEffect(() => {
  //   setCart(value);
  // }, [])

  // const handleCart = () => {

  // }

  return (
    <main>
      <section className="section-cart">
        <div className="container">
          <div className="cart-list">
            <table className="table-shopping-cart">
              <thead className="thead-primary">
                <tr className="text-center">
                  <th>Action</th>
                  <th>Product</th>
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <CartList cart={cart} />
            </table>
          </div>
          <div className="cart-payment">
            <div>
              <div className="cart-detail">
                <span>Total:</span>
                <span id="price-total" />
              </div>
              <a href="checkout.html" className="btn btn-primary btn-checkout">Checkout</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Index;