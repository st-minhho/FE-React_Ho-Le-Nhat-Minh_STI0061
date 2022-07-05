import { handlePrice } from '../../helper/uniprice';
import { IDiscount } from '../../interfaces/discount';

const SalePrices = (props: IDiscount) => {
  const { discount, price } = props;
  const priceSale = handlePrice(discount, price)
  return (
    <span className={discount>0 ? "price-sell sale":"price-sell"}>${priceSale}</span>
  )
}

export default SalePrices;
