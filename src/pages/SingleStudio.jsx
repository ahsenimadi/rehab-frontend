import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InnerBanner from '../components/InnerBanner'
import Preloader from '../components/Preloader';
import ENV from '../config.json'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MetaTags from '../components/MetaTags';

const SingleStudio = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true)
    const [studio, setStudio] = useState({
        title: '',
        description: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: ''
    });
    const api = ENV.BASE_URL + 'studios/';
    useEffect(() => {
        const fetchStudio = async () => {
            try {
                const response = await axios.get(`${api}${slug}`);
                setStudio(response.data);
            } catch (error) {
                console.log('Error fetching studio:', error);
            }
        };

        fetchStudio();
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [slug]);
    const title = studio.title
    const htmlContent = studio.description
    const meta = { // Added meta object
        title: studio.meta_title,
        description: studio.meta_description,
        keywords: studio.meta_keywords
    };

    return (
        <>
            {loading ? <Preloader /> : (
                <>
                    <MetaTags meta={meta} />
                    <Header />
                    <InnerBanner title={title} />
                    <div className="bg-light">
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-7 my-auto left-right">
                                    <h2>{studio.title}</h2>
                                    <p>{studio.short}</p>
                                </div>
                                <div className="col-md-5 my-auto right-left">
                                    <img src={ENV.BASE_URL + studio.image} className='w-100' alt={studio.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container py-5 fade-in">
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    </div>
                    <Footer />
                </>

            )}
        </>
    )
}

export default SingleStudio