import { useEffect, useState } from 'react';
import { SectionProduct } from './components/product';
import Policies from './components/policies';
import Form from './components/form';
import Blog from './components/blogs';
import Banner from './components/banner';
import { LoadingSpinner } from '../../shared/components/layout/LoadingSpinner';
import { useLocation } from 'react-router-dom';

const Home = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true)
    fetch('https://6088e20da6f4a300174271e7.mockapi.io/products')
      .then(response => response.json())
      .then(data => {
        setData(data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [])

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return isLoading ? (<LoadingSpinner />)
    : (<main className='home-page'>
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
