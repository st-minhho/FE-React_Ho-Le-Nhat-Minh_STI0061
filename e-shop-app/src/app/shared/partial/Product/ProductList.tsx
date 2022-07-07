import { useSelector } from 'react-redux';
import { IProduct, IProductData } from '../../interfaces/product';
import Product from './Product';

const ProductList = (props: IProductData) => {
  const { products } = props
  const { categories } = useSelector((state: any) => state.categories)

  const filterProduct = (arr: any) => {
    if (arr.length !== 0) {
      return products.filter((item: any) => {
        return categories.includes(item.category)
      })
    }
    return products
  }

  const renderProduct = (data: any) => {
    return data.map((item: any) => <Product key={item.id} {...item} />);
  };

  return (
    <>
      <ul className="row js-product-list">
        {renderProduct(filterProduct(categories))}
      </ul>
    </>
  )
}

export default ProductList;
