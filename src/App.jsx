import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Login from './pages/Login'
import Dashboard from './pages/admin/Dashboard'
import Appointment from './pages/admin/Appointment'
import Blogs from './pages/admin/Blogs'
import Services from './pages/admin/Services'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/appointment" element={<Appointment />} />
        <Route path="/admin/blogs" element={<Blogs />} />
        <Route path="/admin/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App