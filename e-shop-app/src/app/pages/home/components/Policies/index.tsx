import { PolicyData } from "../../../../shared/constants/PolicyData";
import PolicyList from "./PolicyList";

const Index = () => {
  return (
    <section className="section section-policy">
      <div className="container">
        <h3 className="policy-header title">Why should you choose us?</h3>
        <PolicyList policies={PolicyData} />
      </div>
    </section>
  )
}
export default Index;
