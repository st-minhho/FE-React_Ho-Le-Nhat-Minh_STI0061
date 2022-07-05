import IButton from "../interfaces/button";

const Button = ({text, className, onClick}:IButton) => {
  return(
    <button className={className} onClick={onClick}>{text}</button>
  )
}
export default Button;
