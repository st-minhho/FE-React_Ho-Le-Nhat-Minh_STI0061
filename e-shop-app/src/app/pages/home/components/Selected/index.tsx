import { getLocal} from '../../../../shared/helper/localStorage';
import { useState } from 'react';
import ProductList from '../../../../shared/partial/Product/ProductList';
const Index = () => {
  const [product, setProduct] = useState(JSON.parse(getLocal('product') || '[]'))
  return (
    <section className='section section-products'>
      <div className='container'>
        <div className='product-header header-link'>
          <h3 className='product title'>Selected just for you</h3>
          <a className='btn btn-secondary btn-show' href='#'>Show More</a>
        </div>
        <ProductList product={product}/>
      </div>
    </section>
  )
}
export default Index;
