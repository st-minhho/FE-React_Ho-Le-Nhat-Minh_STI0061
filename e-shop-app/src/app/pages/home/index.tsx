import Selected from './components/selected';
import Today from './components/today';
import Policies from './components/policies';
import Form from './components/form';
import Blog from './components/blogs';
import Banner from './components/banner';
import { useEffect } from 'react';
import { SetLocal } from '../../shared/helper/localstorage';
import { ProductData } from '../../shared/constants/productData';


const Home = () => {
  useEffect(()=>{
    const data = ProductData;
    SetLocal('product',data)
  },[])
  return (
    <main className='home-page'>
      <Banner/>
      <Blog />
      <Selected />
      <Policies/>
      <Today/>
      <Form/>
    </main>

  )
}
export default Home;
