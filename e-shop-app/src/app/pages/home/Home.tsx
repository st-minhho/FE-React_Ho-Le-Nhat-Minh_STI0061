import Images from "../../assets/images";
import ProductData from "../../shared/constants/productData";
import ProductList from './ProductList';
import PolicyList from './PolicyList';
import Form from './Form';
import BlogList from './BlogList';
import Banner from './Banner';


const Home = () => {
  return (
    <main className="home-page">
      <section className="section section-banner">
        <Banner />
        <ul className="banner-policy">
          <li className="banner-policy-item">
            <div className="banner-policy-img">
              <img src={Images.Shipping1} alt="Image policy Free Shipping" />
            </div>
            <div className="banner-policy-content">
              <h4 className="banner-policy-title">Free Shipping</h4>
              <p className="banner-policy-description text-content-policy">On purchases over $199</p>
            </div>
          </li>
          <li className="banner-policy-item">
            <div className="banner-policy-img">
              <img src={Images.Happy} alt="Image policy 99% Satisfied Customers" />
            </div>
            <div className="banner-policy-content">
              <h4 className="banner-policy-title">99% Satisfied Customers</h4>
              <p className="banner-policy-description text-content-policy">Our clients' opinions speak<br />for themselves</p>
            </div>
          </li>
          <li className="banner-policy-item">
            <div className="banner-policy-img">
              <img src={Images.Guarantee1} alt="Image policy Originality Guaranteed" />
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
        <BlogList />
      </section>
      <section className="section section-products">
        <div className="container">
          <div className="product-header header-link">
            <h3 className="product title">Selected just for you</h3>
            <a className="btn btn-secondary btn-show" href="#">Show More</a>
          </div>
          <ProductList data={ProductData} />
        </div>
      </section>
      <section className="section section-policy">
        <div className="container">
          <h3 className="policy-header title">Why should you choose us?</h3>
          <PolicyList />
        </div>
      </section>
      <section className="section section-products">
        <div className="container">
          <div className="product-header">
            <h3 className="product title">Products in today</h3>
          </div>
          <ProductList data={ProductData} />
        </div>
      </section>
      <section className="section section-banner-form">
        <div className="container ">
          <Form />
        </div>
      </section>
    </main>

  )
}
export default Home;