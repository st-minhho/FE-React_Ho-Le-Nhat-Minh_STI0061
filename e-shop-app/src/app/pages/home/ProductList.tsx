import Product from "./Product";

const ProductList = (props: any) => {
  return (
    <ul className="row js-product-list">
      {props.data.map((item: any) => (
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