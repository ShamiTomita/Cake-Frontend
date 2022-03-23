import React from 'react';
import './App.css';
import Home from "./containers/Home"
import NavBar from './components/NavBar'
import Header from './components/Header'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" elements={<Home/>}/>
      <Route path="/browse"/>
    </Routes>
      <div>
        <Header/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
