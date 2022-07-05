import { useEffect, useState } from 'react';
import { SectionProduct } from './components/product';
import Policies from './components/policies';
import Form from './components/form';
import Blog from './components/blogs';
import Banner from './components/banner';


const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://6088e20da6f4a300174271e7.mockapi.io/products')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])
  return (
    <main className='home-page'>
      <Banner />
      <Blog />
      <SectionProduct
        title='Selected just for you'
        hasButton={true}
        products={data} />
      <Policies />
      <SectionProduct
        title='Products in today'
        hasButton={false}
        products={data} />
      <Form />
    </main>

  )
}
export default Home;
