import Policy from "./Policy";

const PolicyList = (props:any) => {
 return(
  <ul className="row policy-list">
    {props.policies.map((item:any) => (
      <Policy
      key={item.id}
      title={item.title}
      description={item.description}
      imgSrc={item.imgSrc}
      />
    ))}
  </ul>
 )
}
export default PolicyList;
