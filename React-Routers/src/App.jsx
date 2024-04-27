import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/ContactUs/ContactUs';
import Users from './components/Users/Users';
import Github from './components/Github/Github';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userid" element={<Users />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
