import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import ProductList from './product/ProductList';


function App() {
  return (
    <div className="App">
      <header className="header">
      <NavBar/>
      </header>
      <h1>Shop Shop</h1>
   < ProductList/>
      <Footer/>
      
    </div>
  );
}

export default App;
