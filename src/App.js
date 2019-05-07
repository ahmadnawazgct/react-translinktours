import React from 'react';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import TourList from './components/tourlist'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
