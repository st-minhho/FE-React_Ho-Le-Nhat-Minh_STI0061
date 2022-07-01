import ProductList from "../../../../shared/partial/Product/ProductList";
import { getLocal, setLocal } from "../../../../shared/helper/localStorage";
const Index = () => {
  const productList = JSON.parse(getLocal('product') || '[]')
  return (
    <section className="section section-products">
        <div className="container">
          <div className="product-header">
            <h3 className="product title">Products in today</h3>
          </div>
          <ProductList product={productList} />
        </div>
      </section>
  )
}
export default Index;
