import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../../../assets/icons';
import { CartContext, CartContextType } from '../../../context/CartContext';
import CategoryList from './CategoriesList';

const Header = () => {

  const { total } = useContext(CartContext) as CartContextType

  return (
    <header>
      <div className='container'>
        <div className='section-header'>
          <div className='header-inner'>
            <Link to='/' className='header-brand'>
              <h1 className='brand'>
                <div className='image-logo'>
                  <img src={Icons.Logo} alt='E-shop' />
                </div>
              </h1>
            </Link>
            <nav className='header-nav'>
              <CategoryList />
            </nav>
            <ul className='menu action-list'>
              <li className='action-item'>
                <a className='action-link' href=''>
                  <i className='fa fa-search' />
                </a>
              </li>
              <li className='action-item'>
                <Link to='/cart' className='action-link'>
                  <i className='fa fa-shopping-cart' />
                  <span className='badge badge-primary total-cart'>{total}</span>
                </Link>
              </li>
              <li className='action-item'>
                <a className='action-link' href='#'>
                  <i className='fa fa-user-o' />
                </a>
              </li>
            </ul>
            <div className='action-hamburger'>
              <ul className='menu action-list'>
                <li className='action-item'>
                  <a className='action-link' href='#'>
                    <img src='./images/mobile-images/cart.png' alt='' />
                  </a>
                </li>
                <li className='action-item'>
                  <a className='action-link' href='#'>
                    <img src='./images/mobile-images/account.png' alt='' />
                  </a>
                </li>
                <li className='action-item'>
                  <a className='action-link' href='#'>
                    <img src='./images/mobile-images/menu-ham.png' alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;
