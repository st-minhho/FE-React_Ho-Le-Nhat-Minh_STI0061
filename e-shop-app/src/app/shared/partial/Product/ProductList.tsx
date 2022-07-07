import Product from './Product';

const ProductList = (props: any) => {
  const { products, isChecked } = props

  const filterProduct = (arr: any) => {
    if (arr.length !== 0) {
      return products.filter((item: any) => {
        return isChecked.includes(item.category)
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
      {renderProduct(filterProduct(isChecked))}
      </ul>
    </>
  )
}

export default ProductList;
