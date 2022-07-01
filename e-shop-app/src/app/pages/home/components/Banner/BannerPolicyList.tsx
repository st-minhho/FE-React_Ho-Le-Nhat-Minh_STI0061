import BannerPolicy from "./BannerPolicy";
const BannerPolicyList = (props: any) => {
  const {data} = props;
  return (
    <ul className="banner-policy">
      {
        data.map((item: any) => (
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
