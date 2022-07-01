import { Icons } from "../../../../assets/icons";
import SocialList from "./Social/SocialList";
const Footer = () => {
  return (
    <footer className="section-footer text-secondary">
      <div className="container footer">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-description">
              <a className="footer-link" href="#">
              <img src={Icons.Logo} alt="E-shop" />
              </a>
              <p className="link-content">House My Brand designs clothing for the young, the old &amp;everyone in between – but
                most importantly, for the fashionable</p>
            </div>
            <SocialList/>
          </div>
          <ul className="footer-right">
            <li className="footer-item">
              <h5 className="item-title">Shopping online</h5>
              <ul className="item-list">
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Order Status</a>
                </li>
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Shipping and Delivery</a>
                </li>
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Returns</a>
                </li>
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Payment Options</a>
                </li>
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Contact Us</a>
                </li>
              </ul>
            </li>
            <li className="footer-item">
              <h5 className="item-title">Information</h5>
              <ul className="item-list">
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Gift Cards</a>
                </li>
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Find a store</a>
                </li>
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Newsletter</a>
                </li>
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Bacome a member</a>
                </li>
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Site feedback</a>
                </li>
              </ul>
            </li>
            <li className="footer-item">
              <h5 className="item-title">Contact</h5>
              <ul className="item-list">
                <li className="sub-item">
                  <a href="#" className="sub-item-link">store@uikit.com</a>
                </li>
                <li className="sub-item">
                  <a href="#" className="sub-item-link">Hotline: +1 131 138 138</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  )
}
export default Footer;
