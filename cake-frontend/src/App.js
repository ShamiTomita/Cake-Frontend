import React from 'react';
import './App.css';
import Home from "./containers/Home"
import NavBar from './components/NavBar'
import Header from './components/Header'
import Browse from './containers/Browse'
import CurrentOrder from './containers/CurrentOrder'
import History from './containers/History'
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
      <Route path="/order-history" element={<History/>}/>
    </Routes>

      <div>

      </div>
    </div>
  );
}

export default App;
