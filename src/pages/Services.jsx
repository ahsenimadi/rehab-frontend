import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Preloader from '../components/Preloader';
import ENV from '../config.json'
import axios from 'axios';
import InnerBanner from '../components/InnerBanner';

const Services = () => {
    const title = 'Our Services';
    const [services, setservices] = useState([])
    const [loading, setLoading] = useState(true)
    const api = ENV.BASE_URL
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);

        const fetchServices = async () => {
            try {
                const response = await axios.get(api + 'services');
                setservices(response.data);
            } catch (error) {
                console.log("Error fetching service:" + error);
            }
        };

        fetchServices();

    }, [])


    return (
        <>
            {loading ? <Preloader /> : (
                <>
                    <Header />
                    <InnerBanner title={title} />
                    <div className="container py-5">
                        <div className="row g-5 text-center justify-content-center">
                            {services && services.map((item, index) => (
                                <div className="col-6 col-sm-4 col-md-4 col-lg-2" key={index}>
                                    <Link to={`/services/${item.slug}`} className="card service border-0 shadow-sm rounded-3">
                                        <div className="card-body">
                                            <img src={ENV.BASE_URL + item.image} className='service-icon' alt="neuro" />
                                            <h6>{item.title}</h6>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    )
}

export default Services