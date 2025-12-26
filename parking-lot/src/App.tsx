import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParkingLot from './components/parkingLot/parkingLot';
import { Provider } from 'react-redux';
import { store } from './state/store';
import Parking from './components/Parking/parking';

function App() {
  return (
    <>
    <Provider store={store}>
    <div className="main">
      <Parking />
    </div>
    </Provider>
    </>
  );
}

export default App;
