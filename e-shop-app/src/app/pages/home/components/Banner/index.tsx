import campaignData from "../../../../shared/constants/CampaignData";
import Banner from "./Banner";

const Index = () => {
  return(
    <section className="section section-banner">
      <>
        <Banner campaign={campaignData}/>
      </>
    </section>
  )
}
export default Index;
