import ProductList from '../../../../shared/partial/Product/ProductList';
import { GetLocal } from '../../../../shared/helper/LocalStorage';
import { useState } from 'react';
const Index = () => {
  const [products, setProduct] = useState(JSON.parse(GetLocal('product') || '[]'))
  return (
    <section className='section section-products'>
        <div className='container'>
          <div className='product-header'>
            <h3 className='product title'>Products in today</h3>
          </div>
          <ProductList products={products} />
        </div>
      </section>
  )
}
export default Index;
