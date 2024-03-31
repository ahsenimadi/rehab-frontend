import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    const [toggleSidebar, settoggleSidebar] = useState(false)
    const toggleSidebarBtn = () => {
        if (toggleSidebar === false) {
            settoggleSidebar(true)
        }else {
            settoggleSidebar(false)
        }
    }
  return (
    <>
        <nav id="sidebarMenu" className={`${toggleSidebar === false ? 'col-md-2' : 'w-80px'} d-md-block sidebar p-0`}>
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/admin">
                            <span className="db-iconbox">
                                <i className="fa-solid fa-house"></i> 
                            </span>
                            {toggleSidebar === false ? 'Dashboard' : ''}
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="db-iconbox">
                                <i className="fa-solid fa-blog"></i> 
                            </span>
                            {toggleSidebar === false ? 'Blog' : ''}
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Add Blog</a></li>
                            <li><Link className="dropdown-item" to="/admin/blogs">Blogs List</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="db-iconbox">
                                <i className="fa-brands fa-servicestack"></i> 
                            </span>
                            {toggleSidebar === false ? 'Services' : ''}
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Add Service</a></li>
                            <li><Link className="dropdown-item" to="/admin/services">Services List</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/appointment">
                            <span className="db-iconbox">
                                <i className="fa-regular fa-calendar-days"></i>
                            </span>
                             {toggleSidebar === false ? 'Appointment Lead' : ''}
                        </Link>
                    </li>
                    <li className="nav-item mt-5 text-center">
                        <a className="toggleBtn" onClick={toggleSidebarBtn}>
                        {toggleSidebar === false ? 
                            (
                            <i className="fa-solid fa-chevron-left"></i>
                            ) : (
                            <i className="fa-solid fa-chevron-right"></i>
                            )
                        }
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default AdminSidebar