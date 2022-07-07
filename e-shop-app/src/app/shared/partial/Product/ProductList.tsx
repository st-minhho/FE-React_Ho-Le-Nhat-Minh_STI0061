import { useSelector } from 'react-redux';
import { IProduct, IProductData } from '../../interfaces/product';
import Product from './Product';

const ProductList = (props: IProductData) => {
  const { products } = props
  
  return (
    <>
      <ul className="row js-product-list">
        {products.map((item: IProduct) => (
          <Product
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </>
  )
}

export default ProductList;
