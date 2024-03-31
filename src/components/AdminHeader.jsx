import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const AdminHeader = () => {
    const navigate = useNavigate()

    useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn')

      if (!isLoggedIn) {
        navigate('/login')
      }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };
  return (
    <>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand col-md-2 bg-light text-center" to="/admin">
                <img src={logo} className='w-100' alt="logo" />
            </Link>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 px-3'>
                <li className="nav-item">
                    <a className="nav-link text-light" href='javascript:void(0)' onClick={handleLogout}>Logout</a>
                </li>
            </ul>
        </header>
    </>
  )
}

export default AdminHeader