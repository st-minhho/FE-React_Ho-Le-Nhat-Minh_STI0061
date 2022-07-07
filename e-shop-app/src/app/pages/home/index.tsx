import { useEffect } from 'react';
import { SectionProduct } from './components/product';
import Policies from './components/policies';
import Form from './components/form';
import Blog from './components/blogs';
import Banner from './components/banner';
import { LoadingSpinner } from '../../shared/components/layout/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './home.actions';
import { Category } from './components/category';
import { getCategory } from './home.actions';

const Home = () => {
  const dispatch = useDispatch()
  const { isLoading, data } = useSelector((state: any) => state.home)
  const { category } = useSelector((state: any) => state.home)

  console.log(category)
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getProducts())
  }, [])

  // if (isLoading) {
  //   return <LoadingSpinner />
  // }
  return (
    <main className='home-page'>
      <Banner />
      <Blog />
      <Category categories={category}/>
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
