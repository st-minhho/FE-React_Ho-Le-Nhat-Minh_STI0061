const Index = () => {
  return(
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
                <tbody className="product-cart-list">
                  {/* product list */}
                </tbody>
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