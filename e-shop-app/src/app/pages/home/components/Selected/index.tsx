import { getStorage} from '../../../../shared/helper/localstorage';
import { useState } from 'react';
import ProductList from '../../../../shared/partial/Product/ProductList';
const Index = () => {
  const [products, setProduct] = useState(getStorage('product',[]))
  return (
    <section className='section section-products'>
      <div className='container'>
        <div className='product-header header-link'>
          <h3 className='product title'>Selected just for you</h3>
          <a className='btn btn-secondary btn-show' href='#'>Show More</a>
        </div>
        <ProductList products={products}/>
      </div>
    </section>
  )
}
export default Index;
