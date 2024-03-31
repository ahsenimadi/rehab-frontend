import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [servicesOpen, setServicesOpen] = useState(false); // State to manage services dropdown visibility
  const [galleryOpen, setGalleryOpen] = useState(false);
  return (
    <>
        <div className="bg-first bg-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="tel:+919949040000"><i className="fa-solid fa-phone"></i>  +91 99490 40000</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="mailto: ppreddytrust@gmail.com"><i className="fa-solid fa-envelope"></i> ppreddytrust@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#"><i className="fa-brands fa-square-facebook"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#"><i className="fa-brands fa-square-instagram"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#"><i className="fa-brands fa-linkedin"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top navbar-main py-0">
            <div className="container">
                <NavLink className="navbar-brand py-0" to="/">
                    <img src={logo} className='logo' alt="logo" />
                </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase fw-semibold py-3 px-4" to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase fw-semibold py-3 px-4" to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase fw-semibold py-3 px-4" to="facilities" activeClassName="active">Facilities</NavLink>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                            <a className="nav-link text-uppercase fw-semibold py-3 px-4 dropdown-toggle" href="#" role="button" aria-expanded={servicesOpen ? "true" : "false"}>
                                Services
                            </a>
                            <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                                <li><a className="dropdown-item" href="#">Services 1</a></li>
                                <li><a className="dropdown-item" href="#">Services 2</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={() => setGalleryOpen(true)} onMouseLeave={() => setGalleryOpen(false)}>
                            <a className="nav-link text-uppercase fw-semibold py-3 px-4 dropdown-toggle" href="#" role="button" aria-expanded={galleryOpen ? "true" : "false"}>
                                Gallery
                            </a>
                            <ul className={`dropdown-menu ${galleryOpen ? 'show' : ''}`} onMouseEnter={() => setGalleryOpen(true)} onMouseLeave={() => setGalleryOpen(false)}>
                                <li><a className="dropdown-item" href="#">Images Gallery</a></li>
                                <li><a className="dropdown-item" href="#">Videos Gallery</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-uppercase fw-semibold py-3 px-4" to="/blogs" activeClassName="active">Blogs</NavLink>
                        </li>
                        <li className="nav-item my-auto">
                            <NavLink className="btn btn-second rounded-pill px-5 text-uppercase fw-semibold" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header