import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Home/>
    </BrowserRouter>
    
  )
}

export default App;