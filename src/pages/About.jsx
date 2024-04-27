import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import InnerBanner from '../components/InnerBanner'
import Footer from '../components/Footer'
import about from '../assets/images/about.jpg'
import pp from '../assets/images/RVRZ7026.jpg'
import Preloader from '../components/Preloader'

const About = () => {
  const title = 'About us';
  const [accommodated, setAccommodated] = useState(0)
  const [residents, setResidents] = useState(0)
  const [feedback, setFeedback] = useState(0)
  const [returning, setReturning] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      if (accommodated < 4222) {
        setAccommodated(accommodated + 1);
      }
      if (residents < 3896) {
        setResidents(residents + 1);
      }
      if (feedback < 3587) {
        setFeedback(feedback + 1);
      }
      if (returning < 3761) {
        setReturning(returning + 1);
      }
    }, 2000 / 2000);

    setTimeout(() => {
      setLoading(false)
    }, 500);

    return () => clearInterval(timer);
  }, [accommodated, residents, feedback, returning])
  return (
    <>
      {loading ? <Preloader /> : (
        <>
          <Header />
          <InnerBanner title={title} />
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 left-right my-auto">
                <h4 className='display-6'>PP Reddy</h4>
                <h1 className='display-4 fw-normal'>Rehabilitation Centre in Hyderabad</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos, blanditiis beatae sit pariatur fugit repellendus placeat ullam hic molestiae facere nemo possimus ipsa numquam exercitationem dolorem eos. Iure, nostrum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos, blanditiis beatae sit pariatur fugit repellendus placeat ullam hic molestiae facere nemo possimus ipsa numquam exercitationem dolorem eos. Iure, nostrum!</p>
              </div>
              <div className="col-md-6 right-left my-auto">
                <img src={about} className='w-100' alt="about" />
              </div>
            </div>
          </div>
          <div className="bg-light">
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-md-4">
                  <div className="card bg-light h-100 border-0 rounded-4 overflow-hidden shadow spy-card text-center">
                    <div className="card-body">
                      <i className="fa-solid fa-bullseye fa-5x mb-3"></i>
                      <h4>Our Mission</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, itaque explicabo ipsum culpa veniam molestiae omnis tenetur. </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-light h-100 border-0 rounded-4 overflow-hidden shadow spy-card text-center">
                    <div className="card-body">
                      <i className="fa-solid fa-bullseye fa-5x mb-3"></i>
                      <h4>Our Mission</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, itaque explicabo ipsum culpa veniam molestiae omnis tenetur. </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-light h-100 border-0 rounded-4 overflow-hidden shadow spy-card text-center">
                    <div className="card-body">
                      <i className="fa-solid fa-bullseye fa-5x mb-3"></i>
                      <h4>Our Mission</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, itaque explicabo ipsum culpa veniam molestiae omnis tenetur. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-first">
            <div className="container py-5">
              <div className="text-center text-light fade-in">
                <h4 className="display-6 mb-5">OUR ACHIEVEMENTS</h4>
                <div className="row text-light">
                  <div className="col-md-3">
                    <i className="fa-solid fa-chart-column fa-3x mb-3"></i>
                    <h4 className="fs-4">Accommodated</h4>
                    <h4 className='display-4'>{accommodated}</h4>
                  </div>
                  <div className="col-md-3">
                    <i className="fa-solid fa-gears fa-3x mb-3"></i>
                    <h4 className="fs-4">Happy Residents</h4>
                    <h4 className='display-4'>{residents}</h4>
                  </div>
                  <div className="col-md-3">
                    <i className="fa-solid fa-map fa-3x mb-3"></i>
                    <h4 className="fs-4">Feedback Recieved</h4>
                    <h4 className='display-4'>{feedback}</h4>
                  </div>
                  <div className="col-md-3">
                    <i className="fa-brands fa-gg-circle fa-3x mb-3"></i>
                    <h4 className="fs-4">Returning Residents</h4>
                    <h4 className='display-4'>{returning}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="row fade-in">
              <div className="col-md-5 my-auto">
                <img src={pp} className='w-100' alt="pp" />
              </div>
              <div className="col-md-7 my-auto">
                <h4 className='display-6'>Organizational Driving Force</h4>
                <p>Vamshidhar Reddy and Kiran Reddy sons of Shri P P Reddy, are the driving force of this organization. They are the strong pillars of P P Reddy Trust. Their continuous effort and hard work have made P P Reddy Trust a notable name, a brand in Hyderabad. Under their leadership, P P Reddy Retirement Homes have become the best Retirement Homes in entire South India and grown to four folds.</p>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default About