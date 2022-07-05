import IInput from "../interfaces/input";

const Input = ({value, name, type, className, placehodler, onChange}:IInput) => {
  return(
    <input className={className} name={name} value={value} type={type} placeholder={placehodler} onChange={onChange}></input>
  )
}
export default Input;
