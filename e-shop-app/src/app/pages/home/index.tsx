import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../../shared/components/layout/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get('categories');
  const [isChecked, setIsChecked] = useState<any>(value === '' ? [] : value?.split(','));

  const queryParam = () => {
    if (isChecked.length === 0) {
      searchParams.delete('categories');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ categories: isChecked.join(',') })
    }
  }

  useEffect(() => {
    queryParam()
  }, [isChecked])

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
        products={data}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <Policies />
      <SectionProduct
        title='Products in today'
        hasButton={false}
        products={data}
        isChecked={isChecked}
        setIsChecked={setIsChecked} />
      <Form />
    </main>
  )
}

export default Home;
