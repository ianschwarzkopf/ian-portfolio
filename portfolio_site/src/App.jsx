import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

        <div className="content_container">
          <Home />

        </div>

        <Footer />
    </>
  )
}

export default App
