import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import axios from 'axios';
import ENV from '../config.json'

const Header = () => {
    const [services, setservices] = useState([])
    const [servicesOpen, setServicesOpen] = useState(false);
    const [studios, setstudios] = useState([])
    const [studiosOpen, setStudiosOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const api = ENV.BASE_URL

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(api + 'services');
                setservices(response.data);
            } catch (error) {
                console.log("Error fetching service:" + error);
            }
        };

        fetchServices();
        const fetchStudios = async () => {
            try {
                const response = await axios.get(api + 'studios');
                setstudios(response.data);
            } catch (error) {
                console.log("Error fetching studio:" + error);
            }
        };

        fetchStudios();

    }, [])

    return (
        <>
            <div className="scroll-watcher"></div>
            <div className="bg-first bg-gradient">
                <div className="container-fluid">
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
                <div className="container-fluid">
                    <NavLink className="navbar-brand py-0" to="/">
                        <img src={logo} className='logo' alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase fw-semibold py-3 px-4" to="/" activeclassname="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase fw-semibold py-3 px-4" to="/about" activeclassname="active">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase fw-semibold py-3 px-4" to="/facilities" activeclassname="active">Facilities</NavLink>
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                                <NavLink className="nav-link text-uppercase fw-semibold py-3 px-4 dropdown-toggle" to="/services" role="button" aria-expanded={servicesOpen ? "true" : "false"}>
                                    Services
                                </NavLink>
                                <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                                    {services.map((item, index) => (
                                        <li key={index}><NavLink className="dropdown-item" to={`/services/${item.slug}`} key={index}>{item.title}</NavLink></li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={() => setStudiosOpen(true)} onMouseLeave={() => setStudiosOpen(false)}>
                                <NavLink className="nav-link text-uppercase fw-semibold py-3 px-4 dropdown-toggle" to="/studios" role="button" aria-expanded={studiosOpen ? "true" : "false"}>
                                    Studios
                                </NavLink>
                                <ul className={`dropdown-menu ${studiosOpen ? 'show' : ''}`} onMouseEnter={() => setStudiosOpen(true)} onMouseLeave={() => setStudiosOpen(false)}>
                                    {studios.map((item, index) => (
                                        <li key={index}><NavLink className="dropdown-item" to={`/studios/${item.slug}`} key={index}>{item.title}</NavLink></li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={() => setGalleryOpen(true)} onMouseLeave={() => setGalleryOpen(false)}>
                                <a className="nav-link text-uppercase fw-semibold py-3 px-4 dropdown-toggle" href="#" role="button" aria-expanded={galleryOpen ? "true" : "false"}>
                                    Gallery
                                </a>
                                <ul className={`dropdown-menu ${galleryOpen ? 'show' : ''}`} onMouseEnter={() => setGalleryOpen(true)} onMouseLeave={() => setGalleryOpen(false)}>
                                    <li><NavLink className="dropdown-item" to="/gallery">Images Gallery</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/video">Videos Gallery</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase fw-semibold py-3 px-4" to="/blogs" activeclassname="active">Blogs</NavLink>
                            </li>
                            <li className="nav-item my-auto">
                                <NavLink className="btn btn-third rounded-pill px-5 text-uppercase fw-semibold" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header