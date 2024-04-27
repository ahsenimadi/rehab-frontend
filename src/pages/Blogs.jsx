import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import ENV from '../config.json';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blogs = () => {
    const api = ENV.BASE_URL
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState()
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);

        const fetchBlogs = async () => {
            try {
                const response = await axios.get(api + 'blogs');
                setBlogs(response.data);
            } catch (error) {
                console.log("Error fetching blog:" + error);
            }
        };

        fetchBlogs();
    }, [])

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
                    <div className="container py-5">
                        <div className="row g-5 pt-3">
                            {blogs && blogs.map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card bg-light h-100 border-0 rounded-4 overflow-hidden shadow spy-card">
                                        <img src={ENV.BASE_URL + item.image} className="card-img-top" alt="blog" />
                                        <div className="card-body">
                                            <h4>{item.title}</h4>
                                            <p>{stripHtmlTags(item.description).slice(0, 99)}</p>
                                            <Link to={`/blogs/${item.slug}`} className="text-decoration-none"> Learn More <i className="fa-solid fa-arrow-up-right-dots"></i></Link>

                                        </div>
                                    </div>
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

export default Blogs