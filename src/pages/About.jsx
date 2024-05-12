import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import InnerBanner from '../components/InnerBanner'
import Footer from '../components/Footer'
import about from '../assets/images/about.jpg'
import pp from '../assets/images/RVRZ7026.jpg'
import Preloader from '../components/Preloader'
import MetaTags from '../components/MetaTags'

const About = () => {
  const title = 'About us';
  const [accommodated, setAccommodated] = useState(0)
  const [residents, setResidents] = useState(0)
  const [feedback, setFeedback] = useState(0)
  const [returning, setReturning] = useState(0)
  const [loading, setLoading] = useState(true)
  const [meta, setMeta] = useState([])

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

    const fetchMeta = async () => {
      try {
        const response = await axios.get(api + 'meta/page/about')
        setMeta(response.data)
      } catch (error) {
        console.log("Error fetching meta:" + error)
      }
    }

    fetchMeta()

    return () => clearInterval(timer);
  }, [accommodated, residents, feedback, returning])
  return (
    <>
      <MetaTags meta={meta} />
      {loading ? <Preloader /> : (
        <>
          <Header />
          <InnerBanner title={title} />
          <div className="container py-5">
            <div className="text-center mb-3">
              <h4 className='display-6'>PP Reddy</h4>
              <h1 className='display-4 fw-normal'>Rehabilitation Centre in Hyderabad</h1>
            </div>
            <div className="row">
              <div className="col-md-6 left-right my-auto">
                <p>At PP Reddy Rehab Care, we recognize the profound uniqueness of every individual's journey to recovery. Our approach is not merely about treating symptoms but about understanding each person's distinct needs, challenges, and aspirations. We stand as trailblazers in the realm of wellness, committed to reshaping the landscape of healthcare. Our ethos is deeply rooted in innovation, compassion, and an unwavering dedication to excellence. We believe in pushing boundaries, exploring new horizons, and revolutionizing the way healthcare is perceived and delivered.</p>
                <p>With a team of visionary experts and access to cutting-edge technology, we are equipped to embark on this transformative journey with our patients. We harness the power of avant-garde tools and techniques to provide personalized care that goes beyond conventional treatment methods. Our goal is to illuminate the path to optimal health and well-being for each individual we serve. At PP Reddy Rehab Care, we don't just aim to heal bodies; we strive to inspire, empower, and guide individuals towards a brighter, healthier future, filled with vitality and renewed hope.</p>
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
                      <i className="fa-solid fa-book fa-5x mb-3"></i>
                      <h4>Our Story</h4>
                      <p>Our journey began with a simple yet profound idea: to create a caring rehabilitation center. From humble origins, Sri.PP Reddy Rehab Care grew with a vision to redefine recovery. With unwavering compassion and commitment, our team and facilities have touched countless lives, helping individuals reclaim dignity and independence.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-light h-100 border-0 rounded-4 overflow-hidden shadow spy-card text-center">
                    <div className="card-body">
                      <i className="fa-solid fa-bullseye fa-5x mb-3"></i>
                      <h4>Our Mission</h4>
                      <p>Empowering individuals on their recovery journey is our mission. Through personalized programs and holistic support, we enhance quality of life. With compassion and excellence, we create a supportive environment where individuals feel motivated to overcome challenges and achieve their goals.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-light h-100 border-0 rounded-4 overflow-hidden shadow spy-card text-center">
                    <div className="card-body">
                      <i className="fa-solid fa-eye fa-5x mb-3"></i>
                      <h4>Our Vision</h4>
                      <p>We envision a future where everyone receives the care they deserve. Through advanced treatments, we aim for optimal recovery. Beyond individual care, we raise community awareness about rehabilitation's importance. Our vision is to empower individuals to reclaim independence and embrace life fully.</p>
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
          <div className="bg-light">
            <div className="container py-5">
              <div className="text-center fade-in">
                <h4 className='display-6'>Why Choose Us</h4>
                <h1 className='display-4 fw-normal mb-5'>Choosing Excellence: Why Opt for PP Reddy Rehab Care?</h1>
                <div className="row g-5">
                  <div className="col-md-4">
                    <div className="card h-100 p-3 shadow border-0 rounded-3 service">
                      <div className="card-body">
                        <i className="fas fa-user-cog fa-3x mb-3 text-third"></i>
                        <p className="text-first">Personalized care tailored to your unique needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 p-3 shadow border-0 rounded-3 service">
                      <div className="card-body">
                        <i className="fas fa-cogs fa-3x mb-3 text-third"></i>
                        <p className="text-first">Innovative rehabilitation approaches for effective recovery.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 p-3 shadow border-0 rounded-3 service">
                      <div className="card-body">
                        <i className="fas fa-users fa-3x mb-3 text-third"></i>
                        <p className="text-first">Experienced multidisciplinary team of professionals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 p-3 shadow border-0 rounded-3 service">
                      <div className="card-body">
                        <i className="fas fa-hospital fa-3x mb-3 text-third"></i>
                        <p className="text-first">State-of-the-art facilities for optimal treatment outcomes.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 p-3 shadow border-0 rounded-3 service">
                      <div className="card-body">
                        <i className="fas fa-heart fa-3x mb-3 text-third"></i>
                        <p className="text-first">Dedicated commitment to your well-being and success in rehabilitation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 p-3 shadow border-0 rounded-3 service">
                      <div className="card-body">
                        <i className="fas fa-hands-helping fa-3x mb-3 text-third"></i>
                        <p className="text-first">Ensuring you receive the highest quality of support on your journey to recovery.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="text-center mb-3">
              <h4 className='display-4'>Organizational Driving Force</h4>
              <h4 className='display-6'>The Engine Behind Our Organization: Meet the Driving Force of PP Reddy Rehab Care</h4>
            </div>
            <div className="row fade-in">
              <div className="col-md-5 my-auto">
                <img src={pp} className='w-100' alt="pp" />
              </div>
              <div className="col-md-7 my-auto">
                <p>Vamshidhar Reddy and Kiran Reddy, sons of Shri P P Reddy, stand as the driving force behind the remarkable success of our organization. As integral members of the P P Reddy Trust, they embody the values of dedication, innovation, and commitment instilled by their father. Through their unwavering effort and relentless hard work, they have propelled P P Reddy Trust to prominence, earning it a distinguished reputation as a leading brand in Hyderabad.</p>
                <p>Under their visionary leadership, P P Reddy Retirement Homes have flourished into the premier choice for retirement living in South India. Their strategic vision and hands-on approach have facilitated the expansion of our retirement homes, multiplying their reach and impact fourfold. Their passion for excellence, coupled with their deep-rooted compassion for seniors, has ensured that P P Reddy Retirement Homes uphold the highest standards of quality and care, providing residents with a nurturing and fulfilling environment to call home.</p>
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