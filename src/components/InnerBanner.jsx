import React from 'react'
import { Link } from 'react-router-dom'

const InnerBanner = ({ title }) => {
    return (
        <>
            <div className="innerbanner">
                <div>
                    <h2>{title}</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/" className='text-light'>Home</Link></li>
                            <li className="breadcrumb-item active text-light" aria-current="page">{title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default InnerBanner