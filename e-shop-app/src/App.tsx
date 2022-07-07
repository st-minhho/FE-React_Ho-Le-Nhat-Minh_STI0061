import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './app/shared/components/layout/Header/Header';
import Footer from './app/shared/components/layout/Footer/Footer';
import Home from './app/pages/home'
import Cart from './app/pages/cart'
import Register from './app/pages/register/Register';
import { ScrollToTop } from './app/shared/partial/ScrollToTop';
import { Provider } from 'react-redux';
import appReducer from './app/store/app.reducers';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import appMiddleware from './app/store/app.middlewares';

function App() {
  const middleware = createSagaMiddleware();
  const store = createStore(appReducer, applyMiddleware(middleware, logger));

  middleware.run(appMiddleware);

  return (
    <ScrollToTop>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </Provider>
    </ScrollToTop>
  );
}

export default App;
