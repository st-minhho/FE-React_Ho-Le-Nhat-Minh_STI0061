import Images from "../../../../assets/images";
const Blog = () => {
  return (
    <>
      <li className="col-6 col-sm-12">
        <div className=" blog-item blog-item-1">
          <div className="blog-img">
            <img src={Images.Blog1} alt="New arrivalsare now in!" />
          </div>
          <div className="blog-content">
            <h4 className="blog-title">New arrivalsare now in!</h4>
            <a className="btn btn-secondary blog-link" href="">Show Collection</a>
          </div>
        </div>
      </li>
      <li className="col-3 col-sm-6">
        <div className="blog-item blog-item-2">
          <div className="blog-img">
            <img src={Images.Blog2} alt="Basic t-shirts $29,99" />
          </div>
          <div className="blog-content">
            <h4 className="blog-title">Basic t-shirts $29,99</h4>
            <a className="btn btn-secondary blog-link" href="">More Detail</a>
          </div>
        </div>
      </li>
      <li className="col-3 col-sm-6">
        <div className="blog-item blog-item-3">
          <div className="blog-img">
            <img src={Images.Blog3} alt="Sale this summer" />
          </div>
          <span className="badge badge-primary badge-blog">-50%</span>
          <div className="blog-content">
            <h4 className="blog-title">Sale this summer</h4>
            <a className="btn btn-secondary blog-link" href="">View All</a>
          </div>
        </div>
      </li>
    </>
  )
}
export default Blog;
