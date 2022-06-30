const Banner = () => {
  return(
    <div className="banner">
    <div className="container">
      <div className="banner-content">
        <h2 className="banner-title">Sale of the<br /><span className="text-primary">summner</span><br />collection</h2>
        <div className="banner-action">
          <div className="action-img">
            <img src="./images/ArrowLeft.png" alt="ArrowLeft" />
          </div>
          <a className="action-click" href="">Shop now</a>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Banner;