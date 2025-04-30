
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar/Navbar'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
       
      </Routes>
    </>
  )
}

export default App
