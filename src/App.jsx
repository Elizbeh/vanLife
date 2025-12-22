import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home'
import Navbar from './Navbar';
import Vans from './pages/Vans';
import './index.css'
import Footer from './Footer';

function App() {
  return (
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App