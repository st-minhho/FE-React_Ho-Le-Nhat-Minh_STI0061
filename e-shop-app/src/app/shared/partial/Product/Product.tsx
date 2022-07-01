import { useState } from "react";
import { getLocal, setLocal } from "../../helper/localStorage";
import { IProduct } from "../../interfaces/product";
import { IProductCart } from "../../interfaces/productCart";

const Product = (props: IProduct) => {
  const data = []
  const handleSubmit = (productID:string) => {
    const productData:any = JSON.parse(getLocal('product') || '[]') ;
    const productCart:any = JSON.parse(getLocal('cart')||'[]');
    const item: any = productData.find((obj:IProduct)=> obj.id === productID)
    if(productCart){
      const itemCart:any = productCart.find((obj:IProductCart)=> obj.id === productID)
      if(itemCart){
        itemCart.qty++
      }
      else{
        productCart.push({
          ...item,
          qty:1
        })
      }
    }
    else{
      productCart.push({
        ...item,
        qty:1
      })
    }
    setLocal('cart', productCart)
  }
  return (
    <li className="col-3 col-sm-6 product-item">
      <a href="#" className="product-link">
        <div className="product-img">
          <img src={props.imgSrc} alt="T-Shirt Summer Vibes" />
          {props.discount !== 0 && <div className="badge badge-primary">{props.discount * 100}%</div>}
          <div className="product-overlay">
            <button onClick={()=>handleSubmit(props.id)} className="btn btn-primary js-add-to-cart" >Add to cart</button>
          </div>
        </div>
        <div className="product-content">
          <h4 className="product-name">{props.name}</h4>
          <div className="product-price">
            {props.discount ? <span className="price-sell sale">${props.price - (props.price * props.discount)}</span> : <span className="price-sell">${props.price}</span>}
            {props.discount !== 0 && <span className="price-original">${props.price}</span>}
          </div>
        </div>
      </a>
    </li>

  )
}
export default Product;
