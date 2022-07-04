import { IDiscount } from '../../interfaces/Discount';

const NormalPrices = (props: IDiscount) => {
  const { discount, price } = props
  return (
    <>
      {discount !== 0 && (
        <span className="price-original">${price}</span>
      )}
    </>

  )
}

export default NormalPrices;
