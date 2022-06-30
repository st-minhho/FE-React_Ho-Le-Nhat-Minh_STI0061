import Policy from './Policy'
import Banner from './Banner';
import Product from './Product';
import Images from '../../assets/images';
import ProductData from "../../shared/constants/productData";
import ProductList from './ProductList';
import PolicyList from './PolicyList';
import Form from './Form';
const Home = () => {
  return (
    <main className="home-page">
      <section className="section section-banner">
        <div className="banner">
          <div className="container">
            <div className="banner-content">
              <h2 className="banner-title">Sale of the<br /><span className="text-primary">summner</span><br />collection</h2>
              <div className="banner-action">
                <div className="action-img">
                  <img src={Images.ArrowLeft} alt="ArrowLeft" />
                </div>
                <a className="action-click" href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
        <ul className="banner-policy">
          <li className="banner-policy-item">
            <div className="banner-policy-img">
              <img src="./images/noun-shipping.png" alt="Image policy Free Shipping" />
            </div>
            <div className="banner-policy-content">
              <h4 className="banner-policy-title">Free Shipping</h4>
              <p className="banner-policy-description text-content-policy">On purchases over $199</p>
            </div>
          </li>
          <li className="banner-policy-item">
            <div className="banner-policy-img">
              <img src="./images/noun_Happy.png" alt="Image policy 99% Satisfied Customers" />
            </div>
            <div className="banner-policy-content">
              <h4 className="banner-policy-title">99% Satisfied Customers</h4>
              <p className="banner-policy-description text-content-policy">Our clients' opinions speak<br />for themselves</p>
            </div>
          </li>
          <li className="banner-policy-item">
            <div className="banner-policy-img">
              <img src="./images/noun_guarantee.png" alt="Image policy Originality Guaranteed" />
            </div>
            <div className="banner-policy-content">
              <h4 className="banner-policy-title">Originality Guaranteed</h4>
              <p className="banner-policy-description text-content-policy">30 days warranty for each<br />product from our store
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="section section-blogs">
        <div className="container">
          <PolicyList/>
        </div>
      </section>
      <section className="section section-products">
        <div className="container">
          <div className="product-header header-link">
            <h3 className="product title">Selected just for you</h3>
            <a className="btn btn-secondary btn-show" href="#">Show More</a>
          </div>
          <ProductList data = {ProductData} />
        </div>
      </section>
      <section className="section section-policy">
        <div className="container">
          <h3 className="policy-header title">Why should you choose us?</h3>
          <ul className="row policy-list">
            <li className="col-3 col-sm-12 policy-item">
              <div className="policy-img">
                <img src="./images/noun-shipping-2.png" alt="Free Shipping" />
              </div>
              <div className="policy-content">
                <h4 className="policy-title">Free Shipping</h4>
                <p className="policy-description text-content-policy">All purchases over $199 are eligible for free shipping
                  via USPS First Class Mail.</p>
              </div>
            </li>
            <li className="col-3 col-sm-12 policy-item">
              <div className="policy-img">
                <img src="./images/noun_payment.png" alt="Easy Payments" />
              </div>
              <div className="policy-content">
                <h4 className="policy-title policy-active">Easy Payments</h4>
                <p className="policy-description text-content-policy">All payments are processed instantlyover a secure
                  payment protocol.</p>
              </div>
            </li>
            <li className="col-3 col-sm-12 policy-item">
              <div className="policy-img">
                <img src="./images/noun_guarantee-2.png" alt="Money-Back Guarantee" />
              </div>
              <div className="policy-content">
                <h4 className="policy-title">Money-Back Guarantee</h4>
                <p className="policy-description text-content-policy">If an item arrived damaged or you'vechanged your mind,
                  you can send itback for a full refund.</p>
              </div>
            </li>
            <li className="col-3 col-sm-12 policy-item">
              <div className="policy-img">
                <img src="./images/noun_materials.png" alt="Finest Quality" />
              </div>
              <div className="policy-content">
                <h4 className="policy-title">Finest Quality</h4>
                <p className="policy-description text-content-policy">Designed to last, each of our products hasbeen crafted
                  with the finest materials.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="section section-products">
        <div className="container">
          <div className="product-header">
            <h3 className="product title">Products in today</h3>
          </div>
          <ProductList data = {ProductData} />
        </div>
      </section>
      <section className="section section-banner-form">
        <div className="container ">
          <Form/>
        </div>
      </section>
    </main>

  )
}
export default Home;