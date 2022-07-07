import { useState } from "react"
import { IProduct, IProductData } from "../../../../shared/interfaces/product"
import ProductList from "../../../../shared/partial/Product/ProductList"
import { TitleProduct } from "../../../../shared/partial/Title"
import ProductCategories from "../categories"

interface ISectionProductProps {
  products: IProduct[]
  title: string
  hasButton?: boolean
  isChecked: any
  setIsChecked: any
}

export const SectionProduct = ({products, title, hasButton, isChecked, setIsChecked}: ISectionProductProps) => {

  return (
    <section className = 'section section-products' >
      <div className='container'>
        <TitleProduct title={title} hasButton={hasButton}/>
        <ProductCategories isChecked={isChecked} setIsChecked={setIsChecked}></ProductCategories>
        <ProductList products = {products} isChecked={isChecked}/>
      </div>
    </section >
  )
}
