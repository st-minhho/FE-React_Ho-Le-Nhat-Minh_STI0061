import { useState } from "react";
import { useDispatch } from "react-redux";
import { CategoryProduct } from "./CategoryProducts"
import { filterProduct } from "./catergories.actions";

export const CategoriesList = () => {
  const [checked, setChecked] = useState([]);
  const dispatch = useDispatch()

  const handleCheck = (e: any) => {
    let updatedList:any = [...checked];
    if (e.target.checked) {
      updatedList = [...checked,  e.target.id];
    } else {
      updatedList.splice(updatedList.indexOf(e.target.id), 1);
    }
    setChecked(updatedList);
    dispatch(filterProduct(updatedList))
    // dispatch(filterProduct2(updatedList))
  }

  return (
    <form>
      <CategoryProduct id={1} name={'JUMPSUITS'} onClick={handleCheck}></CategoryProduct>
      <CategoryProduct id={2} name={'SHIRT'} onClick={handleCheck}></CategoryProduct>
      <CategoryProduct id={3} name={'TROUSER'} onClick={handleCheck}></CategoryProduct>
      <CategoryProduct id={4} name={'JEANS'} onClick={handleCheck}></CategoryProduct>
    </form>
  )
}
