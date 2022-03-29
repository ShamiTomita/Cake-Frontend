import React from 'react';
import './App.css';
import Home from "./containers/Home"
import NavBar from './components/NavBar'
import Header from './components/Header'
import Browse from './containers/Browse'
import CurrentOrder from './containers/CurrentOrder'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <NavBar />
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/browse" element={<Browse/>}/>
      <Route path="/current-order" element={<CurrentOrder/>}/>
    </Routes>

      <div>

      </div>
    </div>
  );
}

export default App;
