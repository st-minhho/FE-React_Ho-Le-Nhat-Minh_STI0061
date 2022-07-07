import { useEffect, useState } from 'react';
import { SectionProduct } from './components/product';
import Policies from './components/policies';
import Form from './components/form';
import Blog from './components/blogs';
import Banner from './components/banner';
import { LoadingSpinner } from '../../shared/components/layout/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './components/home.actions';
import { createSearchParams, useLocation, useSearchParams } from 'react-router-dom';

const Home = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { isLoading, data } = useSelector((state: any) => state.home)
  const { categories } = useSelector((state: any) => state.categories)

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams(createSearchParams({ categories: categories.join(',') }))
  }, [categories])

  useEffect(() => {
    dispatch<any>(getProducts())
  }, [])

  useEffect(() => {
    window.scroll(0, 0)
  }, [isLoading])


  if (isLoading) {
    return <LoadingSpinner />
  }
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
