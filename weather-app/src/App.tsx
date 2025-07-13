import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Store } from '@reduxjs/toolkit';
import WeatherApp from './components/weather-app';

function App() {

  return (
    <>
    <div className="App">
      <WeatherApp />
    </div>
    </>
  );
}

export default App;
