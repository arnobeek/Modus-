import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Experiences from './pages/Experiences'
import Stories from './pages/Stories'
import About from './pages/About'

function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='/destinations' element={<Destinations />}></Route>
        <Route path='/experiences' element={<Experiences />}></Route>
        <Route path='/stories' element={<Stories />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
