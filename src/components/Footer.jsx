import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo_white.png';
import LiveChatWidget from './LiveChatWidget';
import whatsapp from '../assets/images/whatsapp.png';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div className="bg-primary-subtle">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-3">
                  <div className="icon-box">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                </div>
                <div className="col-9 text-dark">
                  <h5>+91 99490 40000</h5>
                  <p>Have a question? Call us now</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-3">
                  <div className="icon-box">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                </div>
                <div className="col-9 text-dark">
                  <h5>ppreddytrust@gmail.com</h5>
                  <p>Need support? Drop us an email</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-3">
                  <div className="icon-box">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                </div>
                <div className="col-9 text-dark">
                  <h5>Mon - Sun 24/7</h5>
                  <p>We are always open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="bg-first">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-3">
                <img src={logo} className='logo mb-3' alt="logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptas excepturi corrupti enim quam facere soluta aut, provident odit nostrum maiores saepe facilis blanditiis aliquam ipsa. Non optio modi animi?</p>
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa-brands fa-square-facebook"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa-brands fa-square-instagram"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa-brands fa-linkedin"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h5 className='mb-3'>Company</h5>
                <ul className="nav flex-column menu">
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="#"><i className="fa-solid fa-minus"></i> Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="#"><i className="fa-solid fa-minus"></i> About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="#"><i className="fa-solid fa-minus"></i> Careers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="#"><i className="fa-solid fa-minus"></i> FAQ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="#"><i className="fa-solid fa-minus"></i> Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h5 className='mb-3'>Services</h5>
                <ul className="nav flex-column menu">
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="#"><i className="fa-solid fa-minus"></i> Facilities</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="#"><i className="fa-solid fa-minus"></i> Images gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="#"><i className="fa-solid fa-minus"></i> Videos gallery</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className='mb-3'>Visit Us</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="#"><i className="fa-solid fa-location-dot"></i> Plot No: 42, Opp Balapur Police Station, RCI Road, Mallapur, Balapur, Hyderabad</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="tel:+919949040000"><i className="fa-solid fa-phone"></i> +91 99490 40000</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ps-0" href="mailto:ppreddytrust@gmail.com"><i className="fa-solid fa-envelope"></i> ppreddytrust@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-first-hover">
          <div className="container py-3">
            <div className="row">
              <div className="col-md-6 my-auto">
                <p className='mb-0'>Copyright © 2024 PP Reddy Rehab Care. All rights reserved.</p>
              </div>
              <div className="col-md-6 my-auto">
                <ul className="nav justify-content-start justify-content-md-end">
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa-brands fa-square-facebook"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa-brands fa-square-instagram"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa-brands fa-linkedin"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <i className="fa-solid fa-up-long"></i>
      </div>
      <a href='https://api.whatsapp.com/send?phone=919849040000' className="whatsapp" target='_blank'>
        <img src={whatsapp} alt="whatsapp" />
      </a>
      <LiveChatWidget />
    </>
  )
}

export default Footer