import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import HomeServices from './pages/Services';
import SingleService from './pages/SingleService'
import HomeBlogs from './pages/Blogs'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Login from './pages/Login'
import Dashboard from './pages/admin/Dashboard'
import Appointment from './pages/admin/Appointment'
import Blogs from './pages/admin/Blogs'
import Services from './pages/admin/Services'
import Contactlead from './pages/admin/Contactlead'
import NotFound from './pages/NotFound'
import Addblog from './pages/admin/Addblog'
import Editblog from './pages/admin/Editblog'
import Addservice from './pages/admin/Addservice'
import Editservice from './pages/admin/Editservice'
import SingleBlog from './pages/SingleBlog'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services' element={<HomeServices />} />
          <Route path='/services/:slug' element={<SingleService />} />
          <Route path='/blogs' element={<HomeBlogs />} />
          <Route path='/blogs/:slug' element={<SingleBlog />} />

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/appointment" element={<Appointment />} />
          <Route path="/admin/contact" element={<Contactlead />} />
          <Route path="/admin/blogs" element={<Blogs />} />
          <Route path="/admin/blogs/add" element={<Addblog />} />
          <Route path="/admin/blogs/edit/:slug" element={<Editblog />} />
          <Route path="/admin/services" element={<Services />} />
          <Route path="/admin/services/add" element={<Addservice />} />
          <Route path="/admin/services/edit/:slug" element={<Editservice />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App