import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFound from './pages/notFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <NotFound/>
    </BrowserRouter>
    
  )
}

export default App;