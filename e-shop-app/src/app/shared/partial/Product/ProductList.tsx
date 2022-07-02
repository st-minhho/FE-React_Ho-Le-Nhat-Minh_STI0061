import { IProduct, ProductData } from '../../interfaces/product';
import Product from './Product';

// interface ProductData {
//   product: IProduct[];
// }

const ProductList = (props : ProductData) => {
  const {product} = props
  return (
    <ul className='row js-product-list'>
      {product.map((item:IProduct) => (
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
