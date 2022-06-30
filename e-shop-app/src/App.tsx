import React from 'react';
import './App.css';
import Header from './app/shared/components/layout/Header'
import Footer from './app/shared/components/layout/Footer'
import Home from './app/pages/home/Home'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
