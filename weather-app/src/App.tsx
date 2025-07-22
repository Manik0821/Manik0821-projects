import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Store } from '@reduxjs/toolkit';
import WeatherApp from './components/weather-app';
import { Route, Routes } from 'react-router-dom';
import DetailWeather from './components/details/detailWeather';

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<WeatherApp />} />
    <Route path="/weather" element={<DetailWeather />} />
  </Routes>
</>
  );
}

export default App;
