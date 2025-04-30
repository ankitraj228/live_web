
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar/Navbar'
import About from './pages/About'
import Services from './pages/Services'


import Footer from './component/footer/Footer'
import TechStack from './pages/TechStak'
import Reviews from './pages/Projects'
import HomePage from './pages/Homepage'

function App() {

  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/techstack" element={<TechStack/>} />
       
      </Routes>
      <Footer/>
    </>
  )
}

export default App
