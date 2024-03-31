import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import rehabcare from '../assets/images/rehabcare.png';
import axios from 'axios';
import { BASE_URL } from '../config'; // Assuming config.js exports BASE_URL

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: ''
  });
  const [message, setMessage] = useState('');

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

      const response = await axios.post(`${BASE_URL}/appointment/create`, postData);
      setMessage(response.data.message || 'Your request is submitted.');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        service: '',
      })
    } catch (error) {
      console.error('Error creating appointment:', error);
      setMessage('Something went wrong');
    }
  };

  return (
    <>
      <Header />
      <div className="banner">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7"></div>
            <div className="col-md-5">
              <div className="card bg-white bg-opacity-75 p-4 h-100 rounded-4">
                <div className="card-body text-first">
                  <h2 className='display-6 fw-semibold mb-3 text-center'>Request a Call Back</h2>
                  <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control form-control-lg mb-3" name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
                    <input type="email" className="form-control form-control-lg mb-3" name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
                    <input type="tel" className="form-control form-control-lg mb-3" name='mobile' placeholder='Your Mobile' value={formData.mobile} onChange={handleChange} required />
                    <select className="form-control form-select form-control-lg mb-3" name='service' value={formData.service} onChange={handleChange} required>
                      <option value="">Select service</option>
                      <option value="Service 1">Service 1</option>
                      <option value="Service 2">Service 2</option>
                      <option value="Service 3">Service 3</option>
                    </select>
                    <button className="btn btn-first btn-lg w-100">Submit</button>
                  </form>
                  {message && <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">{message}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 my-auto">
              <h4 className='display-6'>PP Reddy</h4>
              <h1 className='display-4 fw-normal'>Rehabilitation Centre in Hyderabad</h1>
              <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia similique perspiciatis pariatur sunt sapiente praesentium enim suscipit illo sint earum dolore exercitationem in facere quod ex fugiat, blanditiis voluptatem? Voluptas?</p>
              <a className="btn btn-second rounded-pill px-5 text-uppercase fw-semibold" href="#">Know more</a>
            </div>
            <div className="col-md-6 my-auto">
              <img src={rehabcare} className='w-100' alt="rehabcare" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
