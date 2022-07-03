import { useContext } from 'react';
import { CartContext, CartContextType } from '../../context/CartContext';
import { getLocal, setLocal } from '../../helper/localStorage';
import { IProduct } from '../../interfaces/product';
import { IProductCart } from '../../interfaces/productCart';
import NormalPrices from './NormalPrice';
import SalePrices from './SalePrices';

const Product = (props: IProduct) => {
  const { handleTotal } = useContext(CartContext) as CartContextType

  const handleAddToCart = (productID: string) => {
    const productCart: IProductCart[] = JSON.parse(getLocal('cart') || '[]');
    if (productCart) {
      const itemCart = productCart.find((obj: IProductCart) => obj.id === productID)
      if (itemCart) {
        itemCart.qty++
      }
      else {
        productCart.push({ ...props, qty: 1 })
      }
    }
    setLocal('cart', productCart)
    handleTotal(productCart)
  }

  return (
    <li className='col-3 col-sm-6 product-item'>
      <div className='product-img'>
        <img src={props.imgSrc} alt='T-Shirt Summer Vibes' />
        {props.discount !== 0 && <div className='badge badge-primary'>{props.discount * 100}%</div>}
        <div className='product-overlay'>
          <button onClick={() => handleAddToCart(props.id)} className='btn btn-primary js-add-to-cart' >Add to cart</button>
        </div>
      </div>
      <a href='#' className='product-link'>
        <div className='product-content'>
          <h4 className='product-name'>{props.name}</h4>
          <div className='product-price'>
            <SalePrices discount={props.discount} price={props.price} />
            <NormalPrices discount={props.discount} price={props.price} />
          </div>
        </div>
      </a>
    </li>

  )
}
export default Product;
