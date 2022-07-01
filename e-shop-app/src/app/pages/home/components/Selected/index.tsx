import { ProductData } from "../../../../shared/constants/ProductData";
import ProductList from "../../../../shared/partial/Product/ProductList";

const Index = () => {
  return (
    <section className="section section-products">
      <div className="container">
        <div className="product-header header-link">
          <h3 className="product title">Selected just for you</h3>
          <a className="btn btn-secondary btn-show" href="#">Show More</a>
        </div>
        <ProductList products={ProductData} />
      </div>
    </section>
  )
}
export default Index;
