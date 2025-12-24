import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home'
import Vans from './pages/Van/Vans';
import VanDetail from './pages/Van/VanDetail';
import './index.css'
import '../server'
import Layout from './components/Layout';
import DashBoard from './pages/Host/DashBoard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';


function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="vans" element={<Vans/>}/>
            <Route path='vans/:id' element={<VanDetail/>}/>

            <Route path='host' element={<HostLayout/>}>
                <Route index element={<DashBoard/>}/>
                <Route path='income' element={<Income/>}/>
                <Route path='reviews' element={<Reviews/>}/>
                <Route path="vans" element={<HostVans/>}/>
                <Route path="vans/:id" element={<HostVanDetail/>}/>
            </Route>
            
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App