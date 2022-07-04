import { IDiscount } from '../../interfaces/Discount';

const SalePrices = (props: IDiscount) => {
  const { discount, price } = props;
  const priceSale = price - Math.round(price * discount);
  return (
    <span className={discount>0 ? 'price-sell sale':'price-sell'}>${priceSale}</span>
  )
}

export default SalePrices;
