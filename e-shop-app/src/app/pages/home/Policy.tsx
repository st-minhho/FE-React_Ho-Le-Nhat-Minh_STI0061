import Images from '../../assets/images';

const Policy = () => {
  return (
    <>
      <li className="col-3 col-sm-12 policy-item">
        <div className="policy-img">
          <img src={Images.Shipping2} alt="Free Shipping" />
        </div>
        <div className="policy-content">
          <h4 className="policy-title">Free Shipping</h4>
          <p className="policy-description text-content-policy">All purchases over $199 are eligible for free shipping
            via USPS First Class Mail.</p>
        </div>
      </li>
      <li className="col-3 col-sm-12 policy-item">
        <div className="policy-img">
          <img src={Images.Payment} alt="Easy Payments" />
        </div>
        <div className="policy-content">
          <h4 className="policy-title policy-active">Easy Payments</h4>
          <p className="policy-description text-content-policy">All payments are processed instantlyover a secure
            payment protocol.</p>
        </div>
      </li>
      <li className="col-3 col-sm-12 policy-item">
        <div className="policy-img">
          <img src={Images.Guarantee2} alt="Money-Back Guarantee" />
        </div>
        <div className="policy-content">
          <h4 className="policy-title">Money-Back Guarantee</h4>
          <p className="policy-description text-content-policy">If an item arrived damaged or you'vechanged your mind,
            you can send itback for a full refund.</p>
        </div>
      </li>
      <li className="col-3 col-sm-12 policy-item">
        <div className="policy-img">
          <img src={Images.Materials} alt="Finest Quality" />
        </div>
        <div className="policy-content">
          <h4 className="policy-title">Finest Quality</h4>
          <p className="policy-description text-content-policy">Designed to last, each of our products hasbeen crafted
            with the finest materials.</p>
        </div>
      </li>

    </>
  )
}
export default Policy;