import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/BackgroundBlob';

import Home from './pages/Home'

function App() {

  return (
    <>
        <AnimatedBackground />
        <Navbar />

        <Home />

        <Footer />

    </>
  )
}

export default App
