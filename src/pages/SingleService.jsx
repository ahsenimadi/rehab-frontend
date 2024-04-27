import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InnerBanner from '../components/InnerBanner'
import Preloader from '../components/Preloader';
import ENV from '../config.json'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleService = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true)
    const [service, setService] = useState({
        title: '',
        description: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: ''
    });
    const api = ENV.BASE_URL + 'services/';
    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get(`${api}${slug}`);
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

    return (
        <>
            {loading ? <Preloader /> : (
                <>
                    <Header />
                    <InnerBanner title={title} />
                    <div className="bg-light">
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-7 my-auto">
                                    <h2>{service.title}</h2>
                                    <p>{service.short}</p>
                                </div>
                                <div className="col-md-5 my-auto">
                                    <img src={ENV.BASE_URL + service.thumbnail} className='w-100' alt={service.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container py-5">
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    </div>
                    <Footer />
                </>

            )}
        </>
    )
}

export default SingleService