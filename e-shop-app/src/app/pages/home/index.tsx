import Selected from './components/Selected';
import Today from './components/Today';
import Policies from './components/Policies';
import Form from './components/Form';
import Blog from './components/Blogs';
import Banner from './components/Banner';
import { useEffect } from 'react';
import { SetLocal } from '../../shared/helper/LocalStorage';
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
