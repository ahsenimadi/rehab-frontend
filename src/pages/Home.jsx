import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { BASE_URL } from '../config';
import neuro from '../assets/images/neuro.png';
import coverpng from '../assets/images/coverpng.jpg'
import user from '../assets/images/user.png'
import Preloader from '../components/Preloader';
import ENV from '../config.json'
import { Link } from 'react-router-dom';

const Home = () => {
  const [services, setservices] = useState([])
  const api = ENV.BASE_URL
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: ''
  });
  const [message, setMessage] = useState('');
  const [accommodated, setAccommodated] = useState(0)
  const [residents, setResidents] = useState(0)
  const [feedback, setFeedback] = useState(0)
  const [returning, setReturning] = useState(0)
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState()

  const iframeProps = {
    allowFullScreen: true,
    referrerPolicy: "strict-origin-when-cross-origin"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setAccommodated(prevAccommodated => prevAccommodated < 4222 ? prevAccommodated + 1 : prevAccommodated);
      setResidents(prevResidents => prevResidents < 3896 ? prevResidents + 1 : prevResidents);
      setFeedback(prevFeedback => prevFeedback < 3587 ? prevFeedback + 1 : prevFeedback);
      setReturning(prevReturning => prevReturning < 3761 ? prevReturning + 1 : prevReturning);
    }, 1);

    setTimeout(() => {
      setLoading(false);
    }, 500);

    const fetchServices = async () => {
      try {
        const response = await axios.get(api + 'services/home');
        setservices(response.data);
      } catch (error) {
        console.log("Error fetching service:" + error);
      }
    };

    fetchServices();

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(api + 'blogs/home');
        setBlogs(response.data);
      } catch (error) {
        console.log("Error fetching blog:" + error);
      }
    };

    fetchBlogs();

    return () => {
      clearInterval(timer);
    };
  }, []);


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
      setMessage('Your request is submitted.');
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

  function stripHtmlTags(html) {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = html;
    return temporaryElement.textContent || temporaryElement.innerText;
  }

  return (
    <>
      {loading ? <Preloader /> : (
        <>
          <Header />
          <div className="banner">
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-lg-7 col-md-6 text-white my-auto left-right">
                  <h1 className='display-4 fw-normal mb-5'>Reviving hope through care.</h1>
                  <Link className="btn btn-third rounded-pill px-5 text-uppercase fw-semibold" to="/about">Know more</Link>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div className="card bg-white bg-opacity-75 p-4 h-100 rounded-4 right-left">
                    <div className="card-body text-first">
                      <h2 className='display-6 fw-semibold mb-3 text-center'>Request a Call Back</h2>
                      <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control form-control-lg mb-3" name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
                        <input type="email" className="form-control form-control-lg mb-3" name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
                        <input type="tel" className="form-control form-control-lg mb-3" name='mobile' placeholder='Your Mobile' value={formData.mobile} onChange={handleChange} required />
                        <select className="form-control form-select form-control-lg mb-3" name='service' value={formData.service} onChange={handleChange} required>
                          <option value="">Select service</option>
                          {services.map((item, index) => (
                            <option value={item.title} key={index}>{item.title}</option>
                          ))}
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
            <div className="container py-5 pb-0">
              <div className="row g-3 fade-in">
                <div className="col-md-6 my-auto py-3">
                  <h4 className='display-6'>PP Reddy</h4>
                  <h1 className='display-4 fw-normal'>Rehabilitation Centre in Hyderabad</h1>
                  <p className='fs-5'>At PP Reddy Rehab Care, we understand that each individual’s journey to recovery is unique.we are trailblazers in the realm of wellness, dedicated to revolutionising the way you perceive healthcare.Our ethos is rooted in innovation, compassion and unwavering commitment to excellence.With a team of visionary experts and avant- garde technology at our disposal, we strive to illuminate the path to optimal health and well being.</p>
                  <Link className="btn btn-third rounded-pill px-5 text-uppercase fw-semibold" to="/about">Know more</Link>
                </div>
                <div className="col-md-6 my-auto">
                  <img src={coverpng} className='w-100' alt="coverpng" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="container py-5">
              <div className="text-center fade-in">
                <h4 className="display-6">Our Services</h4>
                <p className="fs-4 mb-5">PP Reddy Rehab Care offers a comprehensive range of rehabilitation services designed to promote healing and maximize potential.</p>
                <div className="row g-5">
                  {services.map((item, index) => (
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2" key={index}>
                      <Link to={`services/${item.slug}`} className="card service border-0 shadow-sm rounded-3">
                        <div className="card-body">
                          <img src={ENV.BASE_URL + item.image} className='service-icon' alt="neuro" />
                          <h6>{item.title}</h6>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <Link className="btn btn-third rounded-pill mt-5 px-5 text-uppercase fw-semibold" to="/services">View all</Link>
              </div>
            </div>
          </div>
          <div className="testimonials">
            <div className="container py-5 fade-in">
              <div className="text-center text-light">
                <h4 className="display-6">Testimonials</h4>
                <p className="fs-4 mb-5">What our patience say about us?</p>
              </div>
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item h-100 active">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-3 my-auto">
                                <img src={user} className='w-100 rounded-circle' alt="user" />
                              </div>
                              <div className="col-9 my-auto">
                                <h5>Rajesh Kumar</h5>
                                <p className='mb-0'>CEO</p>
                              </div>
                            </div>
                            <p>The team at PP Reddy Rehab care  truly changed my life. Their personalized approach to therapy helped me regain strength and confidence after my injury. I can't thank them enough for their support and dedication.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item h-100">
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-md-3 my-auto">
                                <img src={user} className='w-100 rounded-circle' alt="user" />
                              </div>
                              <div className="col-md-9 my-auto">
                                <h5>Sunita Gupta</h5>
                                <p className='mb-0'>Founder</p>
                              </div>
                            </div>
                            <p>I was hesitant about starting rehabilitation, but PP Reddy Rehab care made me feel comfortable from day one. Their caring staff and effective treatments made all the difference in my recovery journey.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item h-100">
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-md-3 my-auto">
                                <img src={user} className='w-100 rounded-circle' alt="user" />
                              </div>
                              <div className="col-md-9 my-auto">
                                <h5>Rohan Sharma</h5>
                                <p className='mb-0'>Manager</p>
                              </div>
                            </div>
                            <p>I cannot recommend PP Reddy Rehab care enough! Their expertise and professionalism exceeded my expectations. Thanks to their guidance, I'm back to doing the activities.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item h-100">
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-md-3 my-auto">
                                <img src={user} className='w-100 rounded-circle' alt="user" />
                              </div>
                              <div className="col-md-9 my-auto">
                                <h5>Priya Singh</h5>
                                <p className='mb-0'>Therapist</p>
                              </div>
                            </div>
                            <p>Choosing PP Reddy Rehab care was the best decision I made for my health. Their comprehensive approach to rehabilitation helped me to recover faster than I ever thought possible. Thank you for giving me my life back!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item h-100">
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="row mb-3">
                              <div className="col-md-3 my-auto">
                                <img src={user} className='w-100 rounded-circle' alt="user" />
                              </div>
                              <div className="col-md-9 my-auto">
                                <h5>Ankit Patel</h5>
                                <p className='mb-0'>Patient</p>
                              </div>
                            </div>
                            <p>From the moment I walked through the doors of PP Reddy Rehab care. I knew. I was in good hands. The staff's compassion and dedication to my recovery were evident every step of the way. I am forever grateful for their support.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="container py-5">
              <div className="text-center fade-in">
                <h4 className="display-6">Video galleries</h4>
                <p className="fs-4 mb-5">Get the latest video galleries</p>
                <div className="row g-5">
                  <div className="col-md-6">
                    <iframe className='w-100' height="315" src="https://www.youtube.com/embed/PDguo4TB2RU?si=BkHuOgaDp86xGpEF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" {...iframeProps}></iframe>
                  </div>
                  <div className="col-md-6">
                    <iframe className='w-100' height="315" src="https://www.youtube.com/embed/BVe_bF-70dE?si=a_5wT8wzyKZpqTip" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" {...iframeProps}></iframe>
                  </div>
                  <div className="col-md-6">
                    <iframe className='w-100' height="315" src="https://www.youtube.com/embed/0d4xIXDJpso?si=r2Qvy5SgFnLWYDdW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" {...iframeProps}></iframe>
                  </div>
                  <div className="col-md-6">
                    <iframe className='w-100' height="315" src="https://www.youtube.com/embed/62JmSDsCWbo?si=JEa2VE_7Nkp94J8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" {...iframeProps}></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-first">
            <div className="container py-5">
              <div className="text-center text-light fade-in">
                <h4 className="display-6 mb-5">OUR ACHIEVEMENTS</h4>
                <div className="row g-3 text-light">
                  <div className="col-sm-6 col-md-3">
                    <i className="fa-solid fa-chart-column fa-3x mb-3"></i>
                    <h4 className="fs-4">Accommodated</h4>
                    <h4 className='display-4'>{accommodated}</h4>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <i className="fa-solid fa-gears fa-3x mb-3"></i>
                    <h4 className="fs-4">Happy Residents</h4>
                    <h4 className='display-4'>{residents}</h4>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <i className="fa-solid fa-map fa-3x mb-3"></i>
                    <h4 className="fs-4">Feedback Recieved</h4>
                    <h4 className='display-4'>{feedback}</h4>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <i className="fa-brands fa-gg-circle fa-3x mb-3"></i>
                    <h4 className="fs-4">Returning Residents</h4>
                    <h4 className='display-4'>{returning}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="container py-5 fade-in">
              <div className="text-center">
                <h4 className="display-6">Blogs</h4>
                <p className="fs-4 mb-5">Get the latest blog</p>
              </div>
              <div className="row g-5 pt-3">
                {blogs && blogs.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card bg-light h-100 border-0 rounded-4 overflow-hidden shadow spy-card">
                      <img src={ENV.BASE_URL + item.image} className="card-img-top" alt="blog" />
                      <div className="card-body">
                        <h4>{item.title}</h4>
                        <p>{stripHtmlTags(item.description).slice(0, 99)}</p>
                        <Link to={`blogs/${item.slug}`} className="text-decoration-none"> Learn More <i className="fa-solid fa-arrow-up-right-dots"></i></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link className="btn btn-third rounded-pill mt-5 px-5 text-uppercase fw-semibold" to="/blogs">View all</Link>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
