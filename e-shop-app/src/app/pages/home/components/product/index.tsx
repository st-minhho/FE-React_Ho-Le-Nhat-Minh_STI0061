import { IProduct, IProductData } from "../../../../shared/interfaces/product"
import ProductList from "../../../../shared/partial/Product/ProductList"
import { TitleProduct } from "../../../../shared/partial/Title"

interface ISectionProductProps {
  products: IProduct[]
  title: string
  hasButton?: boolean
}

export const SectionProduct = ({products, title, hasButton}: ISectionProductProps) => {
  return (
    <section className = 'section section-products' >
      <div className='container'>
        <TitleProduct title={title} hasButton={hasButton}/>
        <ProductList products = {products} />
      </div>
    </section >
  )
}
