import './App.css'
import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Service from './components/service.jsx';
import Portfolio from './components/portfolio.jsx';
import Client from './components/client.jsx';

function App() {

  return (
    <>
    <div className="app">
      <Navbar />
      <Hero></Hero>
      <Service></Service>
      <Portfolio></Portfolio>
      <Client></Client>
    </div>
      
    </>
  )
}

export default App
