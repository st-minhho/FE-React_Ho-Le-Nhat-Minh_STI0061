import { ICampaign } from '../../../../shared/interfaces/campaign';

const BannerPolicy = (props: ICampaign) => {
  return (
    <li className='banner-policy-item'>
      <div className='banner-policy-img'>
        <img src={props.imgSrc} alt='Image policy Free Shipping' />
      </div>
      <div className='banner-policy-content'>
        <h4 className='banner-policy-title'>{props.title}</h4>
        <p className='banner-policy-description text-content-policy'>{props.description}</p>
      </div>
    </li>

  )
}

export default BannerPolicy;
