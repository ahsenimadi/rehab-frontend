import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InnerBanner from '../components/InnerBanner'
import Preloader from '../components/Preloader';
import ENV from '../config.json'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MetaTags from '../components/MetaTags';

const SingleService = () => {
    const { slug } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: ''
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true)
    const [service, setService] = useState({
        title: '',
        description: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: ''
    });
    const api = ENV.BASE_URL;
    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get(`${api}services/${slug}`);
                setService(response.data);
            } catch (error) {
                console.log('Error fetching service:', error);
            }
        };

        fetchService();
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [slug]);
    const title = service.title
    const htmlContent = service.description

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

            const response = await axios.post(`${api}/appointment/create`, postData);
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
    const meta = { // Added meta object
        title: service.meta_title,
        description: service.meta_description,
        keywords: service.meta_keywords
    };

    return (
        <>
            <MetaTags meta={meta} />
            {loading ? <Preloader /> : (
                <>
                    <Header />
                    <InnerBanner title={title} />
                    <div className="bg-light">
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-7 my-auto left-right">
                                    <h2>{service.title}</h2>
                                    <p>{service.short}</p>
                                </div>
                                <div className="col-md-5 my-auto right-left">
                                    <img src={ENV.BASE_URL + service.image} className='w-100' alt={service.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container py-5 fade-in">
                        <div className="row">
                            <div className="col-md-7">
                                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                            </div>
                            <div className="col-md-5">
                                <div className="card bg-light p-3 rounded-4 right-left">
                                    <div className="card-body text-first">
                                        <h2 className='display-6 fw-semibold mb-3 text-center'>Request a Call Back</h2>
                                        <form onSubmit={handleSubmit}>
                                            <input type="text" className="form-control form-control-lg mb-3" name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
                                            <input type="email" className="form-control form-control-lg mb-3" name='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required />
                                            <input type="tel" className="form-control form-control-lg mb-3" name='mobile' placeholder='Your Mobile' value={formData.mobile} onChange={handleChange} required />
                                            <input type="hidden" name="service" value={service.title} />
                                            <button className="btn btn-first btn-lg w-100">Submit</button>
                                        </form>
                                        {message && <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">{message}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>

            )}
        </>
    )
}

export default SingleService