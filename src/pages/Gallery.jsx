import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ENV from '../config.json';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import InnerBanner from '../components/InnerBanner';
import Footer from '../components/Footer';
import MetaTags from '../components/MetaTags';

const Gallery = () => {
    const title = 'Image Gallery';
    const api = ENV.BASE_URL;
    const [loading, setLoading] = useState(true);
    const [gallerys, setGallerys] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [meta, setMeta] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
        const fetchGallery = async () => {
            try {
                const response = await axios.get(api + 'gallery');
                setGallerys(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching gallery:", error);
            }
        };

        fetchGallery();

        const fetchMeta = async () => {
            try {
                const response = await axios.get(api + 'meta/page/about')
                setMeta(response.data)
            } catch (error) {
                console.log("Error fetching meta:" + error)
            }
        }

        fetchMeta()
    }, []);

    const openLightbox = (image) => {
        setSelectedImage(image);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setLightboxOpen(false);
    };

    return (
        <>
            <MetaTags meta={meta} />
            {loading ? <Preloader /> : (
                <>
                    <Header />
                    <InnerBanner title={title} />
                    <div className="container py-5">
                        <h1>{title}</h1>
                        <div className="row g-0">
                            {gallerys.map(item => (
                                <div key={item._id} className="col-md-2">
                                    <button className="lightbox-trigger" onClick={() => openLightbox(item.image)}>
                                        <img src={ENV.BASE_URL + item.image} alt={item.name} className="img-fluid" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {lightboxOpen && (
                        <div className="lightbox">
                            <button className="close-lightbox" onClick={closeLightbox}>Close</button>
                            <img src={ENV.BASE_URL + selectedImage} alt="Lightbox" />
                        </div>
                    )}
                    <Footer />
                </>
            )}
        </>
    );
};

export default Gallery;
