import { useEffect } from 'react';
import { LoadingSpinner } from '../../shared/components/layout/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './home.actions';
import { getCategories } from './home.actions';
import { SectionProduct } from './components/product';
import Policies from './components/policies';
import Form from './components/form';
import Blog from './components/blogs';
import Banner from './components/banner';

const Home = () => {
  const dispatch = useDispatch()
  const { isLoading, data } = useSelector((state: any) => state.home)

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [])

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
