import ProductList from "../../../../shared/partial/Product/ProductList";
import { getLocal, setLocal } from "../../../../shared/helper/localStorage";
const Index = () => {
  const productList = JSON.parse(getLocal('product') || '[]')
  return (
    <section className="section section-products">
      <div className="container">
        <div className="product-header header-link">
          <h3 className="product title">Selected just for you</h3>
          <a className="btn btn-secondary btn-show" href="#">Show More</a>
        </div>
        <ProductList product={productList}/>
      </div>
    </section>
  )
}
export default Index;
