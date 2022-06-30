const Product = (props: any) => {
  return (
    <li className="col-3 col-sm-6 product-item">
      <a href="#" className="product-link">
        <div className="product-img">
          <img src={props.imgSrc} alt="T-Shirt Summer Vibes" />
          {props.discount && <div className="badge badge-primary">{props.discount * 100}%</div>}

        </div>
        <div className="product-content">
          <h4 className="product-name">{props.name}</h4>
          <div className="product-price">
            {props.discount && <span className="price-sell sale">${props.price -(props.price * props.discount)}</span>}
            <span className="price-original">${props.price}</span>
          </div>
        </div>
      </a>
    </li>

  )
}
export default Product;