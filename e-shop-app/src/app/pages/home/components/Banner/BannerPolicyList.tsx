import { ICampaign } from '../../../../shared/interfaces/Campaign';
import BannerPolicy from './BannerPolicy';

interface CampaignData {
  campaign: ICampaign[]
}

const BannerPolicyList = (props: CampaignData) => {
  const {campaign} = props;
  return (
    <ul className='banner-policy'>
      {
        campaign.map((item: ICampaign) => (
          < BannerPolicy
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
          />
        ))

      }
    </ul>
  )
}

export default BannerPolicyList;
