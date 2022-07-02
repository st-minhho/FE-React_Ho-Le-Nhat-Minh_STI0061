const TotalProduct = (discount: number, price: number, quantity: number) => {
  let total: number = 0;
  let priceSell: number = price;
  if (discount === 0) {
    return (total = Math.round(price * quantity * 100) / 100);
  } else {
    priceSell = price - price * discount;
  }
  return (total = Math.round(priceSell * quantity * 100) / 100);
};
export default TotalProduct;
