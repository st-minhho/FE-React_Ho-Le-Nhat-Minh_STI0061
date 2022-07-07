import { useSelector } from "react-redux";
const ProductCategories = ({isChecked, setIsChecked}:any) => {

  const { category } = useSelector((state: any) => state.category)

  const handleChecked = (e:any) => {
    let updatedList:any = [...isChecked];
    if (e.target.checked) {
      updatedList = [...isChecked,  e.target.id];
    } else {
      updatedList.splice(updatedList.indexOf(e.target.id), 1);
    }
    setIsChecked(updatedList);
  }

  return (
    <form>
      {Object.keys(category).map((key,index) => (
        <div key={key}>
          <input type="checkbox" id={key} value={category[key]} onChange={handleChecked} checked={isChecked.includes(key)}/>
          <label htmlFor={key}>{category[key]}</label>
        </div>
      ))}
    </form>
  )
}

export default ProductCategories;
