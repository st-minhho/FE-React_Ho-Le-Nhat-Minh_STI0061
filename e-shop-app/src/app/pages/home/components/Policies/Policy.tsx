import { IPolicy } from '../../../../shared/interfaces/policy';

const Policy = (props: IPolicy) => {
  return (
    <li className='col-3 col-sm-12 policy-item'>
      <div className='policy-img'>
        <img src={props.imgSrc} alt='Free Shipping' />
      </div>
      <div className='policy-content'>
        <h4 className='policy-title'>{props.title}</h4>
        <p className='policy-description text-content-policy'>{props.description}</p>
      </div>
    </li>

  )
}
export default Policy;
