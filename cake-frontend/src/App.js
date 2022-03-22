import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <p>helloooooo</p>
      </div>
    </div>
  );
}

export default App;
