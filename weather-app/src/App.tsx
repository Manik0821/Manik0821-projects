import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Store } from '@reduxjs/toolkit';
import WeatherApp from './components/weather-app';
import { Route, Routes } from 'react-router-dom';
import DetailWeather from './components/details/detailWeather';
import { weatherList } from './state/slice/weatherData';
import { hostname } from 'os';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {
  const Dispatch = useDispatch();
  return (
    <>
    <Routes>
    <Route path="/" element={<WeatherApp />} />
    <Route path="/weather" element={<DetailWeather /> } />
  </Routes>
</>
  );
}

export default App;
