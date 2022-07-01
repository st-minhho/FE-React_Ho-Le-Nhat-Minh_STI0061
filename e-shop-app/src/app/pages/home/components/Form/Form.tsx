const Form = () => {
  return (
    <div className="form-subscribe">
      <div className="row form-item">
        <div className="col-6 col-sm-12">
          <h3 className="form-title text-secondary">Subscribe to our newsletter andreceive exclusive offers every week
          </h3>
        </div>
        <div className="col-6 col-sm-12">
          <form className="form-content" action="#">
            <input className="input-content" type="text" placeholder="Enter your email" />
            <button className="btn btn-primary btn-subscribe" type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Form;
