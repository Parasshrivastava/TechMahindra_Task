import React from 'react'
import Navbar from './components/Navbar'
import  Footer  from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
function App() {
  

  return (
 <div >

      <Navbar/>
       <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
