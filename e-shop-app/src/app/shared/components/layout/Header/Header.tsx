import { Icons } from "../../../../assets/icons";
import CategoryList from "./CategoriesList";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onMoveHome = ()=>{
    navigate('/')
  }
  const onMoveCart = ()=>{
    navigate('/cart')
  }
  return (
    <header>
      <div className="container">
        <div className="section-header">
          <div className="header-inner">
            <a onClick={onMoveHome} className="header-brand">
              <h1 className="brand">
                <div className="image-logo">
                  <img src={Icons.Logo} alt="E-shop" />
                </div>
              </h1>
            </a>
            <nav className="header-nav">
              <CategoryList/>
            </nav>
            <ul className="menu action-list">
              <li className="action-item">
                <a className="action-link" href="">
                  <i className="fa fa-search" />
                </a>
              </li>
              <li className="action-item">
                <a onClick={onMoveCart} className="action-link">
                  <i className="fa fa-shopping-cart" />
                  <span className="total-cart" />
                </a>
              </li>
              <li className="action-item">
                <a className="action-link" href="#">
                  <i className="fa fa-user-o" />
                </a>
              </li>
            </ul>
            <div className="action-hamburger">
              <ul className="menu action-list">
                <li className="action-item">
                  <a className="action-link" href="#">
                    <img src="./images/mobile-images/cart.png" alt="" />
                  </a>
                </li>
                <li className="action-item">
                  <a className="action-link" href="#">
                    <img src="./images/mobile-images/account.png" alt="" />
                  </a>
                </li>
                <li className="action-item">
                  <a className="action-link" href="#">
                    <img src="./images/mobile-images/menu-ham.png" alt="" />
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
