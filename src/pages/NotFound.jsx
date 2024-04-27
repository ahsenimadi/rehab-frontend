import React from 'react'
import Header from '../components/Header'
import InnerBanner from '../components/InnerBanner'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const NotFound = () => {
    const title = 'Page not found';
    return (
        <>
            {/* <Header />
            <InnerBanner title={title} /> */}
            <div className='d-flex align-items-center vh-100'>
                <div className="row w-100 justify-content-center">
                    <div className="col-md-4">
                        <div className="card bg-light text-center border-0 rounded-4 p-5 overflow-hidden shadow">
                            <div className="card-body">
                                <i className="fa-solid fa-triangle-exclamation fa-5x text-warning mb-3"></i>
                                <h1>404 - Not Found</h1>
                                <p>The page you are looking for does not exist.</p>
                                <Link to='/' className='btn btn-first'>Back to <i className="fa-solid fa-house"></i> homepage</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default NotFound