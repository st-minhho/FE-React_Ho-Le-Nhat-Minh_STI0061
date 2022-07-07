export const handlePrice = (discount:number, price:number)=>{
  const priceSale = price - (price * discount)/100;
  return Math.round(priceSale*100)/100
}
