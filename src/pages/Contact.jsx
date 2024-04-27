import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import InnerBanner from '../components/InnerBanner'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import axios from 'axios';
import { BASE_URL } from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [message, setMessage] = useState('');
  const title = 'Contact us'
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [])

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const currentDate = new Date().toISOString().slice(0, 10);
      const postData = { ...formData, posted_date: currentDate };

      const response = await axios.post(`${BASE_URL}/contact/create`, postData);
      setMessage('Your request is submitted.');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setMessage('Something went wrong');
    }
  };

  return (
    <>
      {loading ? <Preloader /> : (
        <>
          <Header />
          <InnerBanner title={title} />
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 left-right">
                <h4 className='display-6'>Contact us</h4>
                <h1 className='display-4 fw-normal mb-5'>Get in touch with PP Reddy Rehab care</h1>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link text-dark fs-1" href="tel:+919949040000"><i className="fa-solid fa-phone"></i>  +91 99490 40000</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark fs-1" href="mailto: ppreddytrust@gmail.com"><i className="fa-solid fa-envelope"></i> ppreddytrust@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="card bg-light p-4 h-100 rounded-4 border-0 shadow right-left">
                  <div className="card-body text-first">
                    <form onSubmit={handleSubmit}>
                      <input type="text" className="form-control form-control-lg mb-3" name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
                      <input type="email" className="form-control form-control-lg mb-3" name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
                      <input type="tel" className="form-control form-control-lg mb-3" name='mobile' placeholder='Your Mobile' value={formData.mobile} onChange={handleChange} required />
                      <textarea className='form-control form-control-lg mb-3' name="message" rows="3" placeholder='Your Message' value={formData.message} onChange={handleChange}></textarea>
                      <button className="btn btn-first btn-lg w-100">Submit</button>
                    </form>
                    {message && <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">{message}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7618.942391515569!2d78.49754000000001!3d17.2928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba3201a953339%3A0x85d1d7284d2e269f!2sPP%20Reddy%20Retirement%20Homes%20-%20Senior%20Rehabilitation%20%26%20Senior%20Living%20Care%2C%20Geriatric%20Care%2C%20Assisted%20Living!5e0!3m2!1sen!2sin!4v1712584736686!5m2!1sen!2sin" className='googleMap fade-in' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <Footer />
        </>
      )}
    </>
  )
}

export default Contact