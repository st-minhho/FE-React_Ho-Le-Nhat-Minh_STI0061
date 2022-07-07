import { setStorage } from '../../helper/localstorage';
import { IProduct } from '../../interfaces/product';
import { IProductCart } from '../../interfaces/productCart';
import NormalPrices from './NormalPrice';
import SalePrices from './SalePrices';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../pages/cart/cart.actions';

const Product = (props: IProduct) => {

  const dispatch = useDispatch()
  const { carts } = useSelector((state: any) => state.carts)
  const { category } = useSelector((state: any) => state.category)

  const handleAddToCart = (productID: string) => {
    const newCart = [...carts]
    if (newCart) {
      const itemCart: IProductCart | null = newCart.find((obj: IProductCart) => obj.id === productID) || null
      if (itemCart) {
        itemCart.qty++
      }
      else {
        newCart.push({ ...props, qty: 1 })
      }
    }
    setStorage('cart', newCart)
    dispatch(addToCart(newCart))
  }
  return (
    <li className="col-3 col-sm-6 product-item">
      <div className="product-img">
        <img src={props.image} alt="T-Shirt Summer Vibes" />
        {props.discount !== 0 && <div className="badge badge-primary">-{props.discount}%</div>}
        <div className="product-overlay">
          <Button onClick={() => handleAddToCart(props.id)} className="btn btn-primary js-add-to-cart" text="Add to cart" />
        </div>
      </div>
      <a href="#" className="product-link">
        <div className="product-content">
          <h4 className="product-name">{props.name}</h4>
          <span>
            {category[props.category]}
          </span>
          <div className="product-price">
            <SalePrices discount={props.discount} price={props.price} />
            <NormalPrices discount={props.discount} price={props.price} />
          </div>
        </div>
      </a>
    </li>

  )
}
export default Product;
