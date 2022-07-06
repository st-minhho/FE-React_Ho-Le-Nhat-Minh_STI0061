import { useEffect, useState } from 'react';
import { SectionProduct } from './components/product';
import Policies from './components/policies';
import Form from './components/form';
import Blog from './components/blogs';
import Banner from './components/banner';
import { LoadingSpinner } from '../../shared/components/layout/LoadingSpinner';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPoroducts } from './components/home.actions';

const Home = () => {
  const dispatch = useDispatch()
  const { isLoading, data } = useSelector((state: any) => state.home)

  useEffect(() => {
    dispatch<any>(getPoroducts())
  }, [])

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
