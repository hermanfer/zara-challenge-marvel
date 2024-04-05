import React from 'react';
import './App.scss';
import NavBar from '../core/components/navbar/NavBar';
import Home from '../ui/pages/home/Home';

const App = () => {
  return (
    <div className="app-container">
      <NavBar></NavBar>
      <Home/>
    </div>
  )
}

export default App;