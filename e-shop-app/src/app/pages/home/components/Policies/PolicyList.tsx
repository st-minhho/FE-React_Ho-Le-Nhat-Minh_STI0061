import { IPolicy } from '../../../../shared/interfaces/policy';
import Policy from './Policy';

interface PolicyData {
  policies: IPolicy[];
}

const PolicyList = (props: PolicyData) => {

  const { policies } = props

  return (
    <ul className='row policy-list'>
      {policies.map((item: IPolicy) => (
        <Policy
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          imgSrc={item.imgSrc}
        />
      ))}
    </ul>
  )
}
export default PolicyList;
