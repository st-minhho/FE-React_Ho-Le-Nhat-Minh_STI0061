
import { IProduct, IProductData } from '../../interfaces/product';
import Product from './Product';

const ProductList = (props : IProductData) => {
  const {products} = props
  return (
    <ul className="row js-product-list">
      {products.map((item:IProduct) => (
        <Product
          key={item.id}
          id={item.id}
          name={item.name}
          imgSrc={item.imgSrc}
          discount={item.discount}
          price={item.price}
        />
      ))}
    </ul>
  )
}
export default ProductList;
