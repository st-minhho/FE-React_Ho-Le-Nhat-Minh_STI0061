import { useContext } from 'react';
import { CartContext, CartContextType } from '../../context/CartContext';
import { getLocal, setLocal } from '../../helper/localStorage';
import { IProduct } from '../../interfaces/Product';
import { IProductCart } from '../../interfaces/ProductCart';
import TotalCart from '../../helper/TotalCart';
import NormalPrices from './NormalPrice';
import SalePrices from './SalePrices';
import Button from '../Button';

const Product = (props: IProduct) => {
  const { cart, setCart } = useContext(CartContext) as CartContextType

  const handleAddToCart = (productID: string) => {
    const newCart =[...cart]
    if (newCart) {
      const itemCart = newCart.find((obj: IProductCart) => obj.id === productID)
      if (itemCart) {
        itemCart.qty++
      }
      else {
        newCart.push({ ...props, qty: 1 })
      }
    }
    setLocal('cart', newCart)
    setCart(newCart)
  }

  return (
    <li className='col-3 col-sm-6 product-item'>
      <div className='product-img'>
        <img src={props.imgSrc} alt='T-Shirt Summer Vibes' />
        {props.discount !== 0 && <div className='badge badge-primary'>{props.discount * 100}%</div>}
        <div className='product-overlay'>
          <Button onClick={() => handleAddToCart(props.id)} className='btn btn-primary js-add-to-cart' text='Add to cart'/>
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
