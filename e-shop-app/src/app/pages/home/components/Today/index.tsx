import ProductList from '../../../../shared/partial/Product/ProductList';
import { getLocal } from '../../../../shared/helper/localStorage';
import { useState } from 'react';
const Index = () => {
  const [product, setProduct] = useState(JSON.parse(getLocal('product') || '[]'))
  return (
    <section className='section section-products'>
        <div className='container'>
          <div className='product-header'>
            <h3 className='product title'>Products in today</h3>
          </div>
          <ProductList product={product} />
        </div>
      </section>
  )
}
export default Index;
