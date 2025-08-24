import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import ItemsList from './components/ItemList/ItemList';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './components/Cart/shoppingCart';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import CardDeatils from './components/CardDetails/cardDetails';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="section-1">
        <Header /></div>
        <div className="section-2">
          <Sidebar />
        <Routes>
          <Route path="/" element={<ItemsList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/card/:id" element={<CardDeatils /> } />
        </Routes>
        </div>
        <div className="section-3">
        <Footer />
        </div>
        
      </div>
    </div>
  );
}

export default App;
