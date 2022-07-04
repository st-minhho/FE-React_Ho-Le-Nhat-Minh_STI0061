import Images from '../../assets/images';
import Selected from './components/Selected';
import Today from './components/Today';
import Policies from './components/Policies';
import Form from './components/Form';
import Blog from './components/Blogs';
import Banner from './components/Banner';
import { useEffect } from 'react';
import { ProductData } from '../../shared/constants/ProductData';
import { setLocal } from '../../shared/helper/localStorage';


const Home = () => {
  useEffect(()=>{
    const data = ProductData;
    setLocal('product',data)
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
