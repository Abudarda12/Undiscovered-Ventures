import './App.css'
import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Service from './components/service.jsx';
import Portfolio from './components/portfolio.jsx';
import Client from './components/client.jsx';
import Product from './components/product.jsx';
import AboutUs from './components/about.jsx';
import Footer from './components/footer.jsx';

function App() {

  return (
    <>
    <div className="app">
      <Navbar />
      <Hero></Hero>
      <Service></Service>
      <Portfolio></Portfolio>
      <Client></Client>
      <Product></Product>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
      
    </>
  )
}

export default App
