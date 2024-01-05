import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Products from './components/products/Products';
import { Routes, Route } from 'react-router-dom';
import AddProduct from './components/addProduct/AddProduct';
import Cart from './components/cart/Cart';
function App()
{
  return (
    <>
      <Routes>
        <Route path="/" element={<> <Header />
          <Products /></>} />

        <Route path="/addProduct" element={<><Header /><AddProduct /></>} />
        <Route path="/cart" element={<><Header /><Cart /></>} />
      </Routes>

    </>
  );
}

export default App;
