import { ProductData } from "../../../../shared/constants/ProductData";
import ProductList from "../../../../shared/partial/Product/ProductList";

const Index = () => {
  return (
    <section className="section section-products">
        <div className="container">
          <div className="product-header">
            <h3 className="product title">Products in today</h3>
          </div>
          <ProductList products={ProductData} />
        </div>
      </section>
  )
}
export default Index;
